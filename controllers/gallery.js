const Gallery = require("../Models/Gallery"),
  mongodb = require("mongodb"),
  fs = require("fs"),
  Jimp = require("jimp"),
  path = require("path");
const { gallery } = require(".");

function errCheck(err) {
  if (err) {
    console.log(err);
    return res.status(500).json({ err });
  }
}

module.exports = {
  index: (req, res) => {
    Gallery.find({}, (err, galleries) => {
      errCheck(err);
      galleryList = {};
      categories = [];
      galleries.forEach((gallery) => {
        if (!galleryList[gallery.category]) {
          galleryList[gallery.category] = [];
          categories.push(gallery.category);
        }
        galleryList[gallery.category].push({
          name: gallery.name,
          id: gallery._id,
        });
      });
      categories.forEach((category) => {
        galleryList[category].sort((a, b) => a.name.localeCompare(b.name));
      });
      res.status(200).json(galleryList);
    });
  },

  byName: (req, res) => {
    Gallery.find({ name: req.params.name }, (err, galleries) => {
      errCheck(err);
      res.status(200).json(galleries);
    });
  },
  byCategory: (req, res) => {
    let category = new RegExp("^" + req.params.category + "$", "i");
    Gallery.find({ category }, (err, galleries) => {
      errCheck(err);
      res.status(200).json(galleries);
    });
  },

  hide: (req, res) => {
    try {
      if (req.params.id && typeof req.body.bool == "boolean") {
        Gallery.updateOne(
          { _id: mongodb.ObjectId(req.params.id) },
          { hideGallery: req.body.bool },
          (err, gallery) => {
            console.log(gallery);
            if (err) {
              console.log(err);
              return res.status(500).json(err);
            } else {
              Gallery.findOne(
                { _id: mongodb.ObjectId(req.params.id) },
                (err, updated) => {
                  errCheck(err);
                  res.json(updated);
                }
              );
            }
          }
        );
        console.log(req.body.name);
      }
    } catch (err) {
      errCheck(err);
    }
  },

  rename: (req, res) => {
    try {
      if (req.params.id && req.body.name) {
        //find gallery to rename
        Gallery.findOne(
          { _id: mongodb.ObjectId(req.params.id) },
          (err, updated) => {
            errCheck(err);
            //update gallery name
            Gallery.updateOne(
              { _id: mongodb.ObjectId(req.params.id) },
              { name: req.body.name },
              (err, gallery) => {
                console.log(gallery);
                // console.log(`replacing ${gallery.name} with ${req.body.new}`);
                errCheck(err);
                //update gallery name for gallery photos
                Gallery.update(
                  {
                    _id: mongodb.ObjectId(req.params.id),
                  },
                  { $set: { "photos.$[].gallery": req.body.name } },
                  { upsert: true },
                  (err, gal) => {
                    errCheck(err);
                    //rename directories
                    fs.rename(
                      path.join(
                        __dirname,
                        //directory to rename
                        `../uploads/photos/${
                          updated.category.toLowerCase() == "advertising"
                            ? "Client-Work"
                            : updated.category.replace(/\/?\s+/g, "_")
                        }/${updated.name
                          .replace(/\/?\s+/g, "_")
                          .replace(/[^\w\s]/gi, "")}`
                      ),
                      path.join(
                        __dirname,
                        //new diretory name
                        `../uploads/photos/${
                          updated.category.toLowerCase() == "advertising"
                            ? "Client-Work"
                            : updated.category.replace(/\/?\s+/g, "_")
                        }/${req.body.name
                          .replace(/\/?\s+/g, "_")
                          .replace(/[^\w\s]/gi, "")}`
                      ),
                      (err) => {
                        errCheck(err);
                        Gallery.findOne(
                          { _id: mongodb.ObjectId(req.params.id) },
                          (err, updated) => {
                            errCheck(err);
                            res.status(200).json(updated);
                          }
                        );
                      }
                    );
                  }
                );
              }
            );
          }
        );
      }
    } catch (err) {
      res.status(500).json("server error");
    }
  },
  delete: (req, res) => {
    //delete gallery
    try {
      if (req.params.id) {
        Gallery.deleteOne(
          { _id: mongodb.ObjectId(req.params.id) },
          (err, deleted) => {
            errCheck(err);
            res.status(200).json(deleted);
          }
        );
      }
    } catch (err) {
      errCheck(err);
    }
  },
  create: (req, res) => {
    let file;
    try {
      let gallery = {
        name: req.body.name,
        order: req.body.order,
        category: req.body.category,
        photos: [],
        hideGallery: req.body.hideGallery,
        _id: mongodb.ObjectId(),
      };
      let galleryPath = `${__dirname}/../uploads/photos/${
        gallery.category.toLowerCase() == "advertising"
          ? "Client-Work"
          : gallery.category.replace(/\/?\s+/g, "_")
      }/${gallery.name.replace(/\/?\s+/g, "_").replace(/[^\w\s]/gi, "")}`;
      if (req.files && req.files.thumb) {
        file = req.files.thumb;
        file.mv(`${__dirname}/../uploads/tmp/${file.name}`, (err) => {
          if (err) {
            console.error(err);
            return res.status(500).send(err);
          }
          //resize thumbnail
          Jimp.read(
            `${__dirname}/../uploads/tmp/${file.name}`,
            (err, thumbnail) => {
              errCheck(err);
              thumbnail
                .resize(1000, Jimp.AUTO) // resize
                .write("thumb.jpg"); // save
              console.log(file);
              createNewGallery();
            }
          );
        });
      }
      function finish(newGallery) {
        file.mv(`${galleryPath}/thumb.jpg`, (err) => {
          errCheck(err);
          res.status(200).json(newGallery);
          console.log("gallery created");
        });
      }

      function createNewGallery() {
        Gallery.create(gallery, (err, newGallery) => {
          errCheck(err);
          if (file) {
            if (fs.existsSync(galleryPath)) {
              if (fs.existsSync(`${galleryPath}/thumbs`)) {
                finish(newGallery);
              } else {
                fs.mkdir(`${galleryPath}/thumbs`, (err) => {
                  errCheck(err);
                  finish(newGallery);
                });
              }
            } else {
              fs.mkdir(galleryPath, (err) => {
                errCheck(err);
                fs.mkdir(`${galleryPath}/thumbs`, (err) => {
                  errCheck(err);
                  finish(newGallery);
                });
              });
            }
          } else {
            res.status(200).json(newGallery);
          }
        });
      }
    } catch (err) {
      errCheck(err);
    }
  },
  reorder: (req, res) => {
    try {
      if (req.body) {
        for (let i = 0; i < req.body.length; i++) {
          Gallery.updateOne(
            { _id: mongodb.ObjectId(req.body[i]._id) },
            { order: req.body[i].order },
            (err, gallery) => {
              errCheck(err);
              if (i == req.body.length - 1) {
                res.json("successfully updated all galleries");
              }
            }
          );
        }
      }
    } catch (err) {
      errCheck(err);
    }
  },
  editThumb: (req, res) => {
    try {
      let thumb = req.body;
      let galleryPath = `${__dirname}/../uploads/photos/${
        thumb.category.toLowerCase() == "advertising"
          ? "Client-Work"
          : thumb.category.replace(/\/?\s+/g, "_")
      }/${thumb.gallery.replace(/\/?\s+/g, "_").replace(/[^\w\s]/gi, "")}`;
      Jimp.read(`${galleryPath}/${thumb.location}`, (err, thumbnail) => {
        errCheck(err);
        thumbnail
          .resize(1000, Jimp.AUTO) // resize
          .write(`${galleryPath}/thumb.jpg`); // save
        res.json(thumbnail);
      });
    } catch (err) {
      errCheck(err);
    }
  },
};
