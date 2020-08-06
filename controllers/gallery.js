const Gallery = require("../Models/Gallery"),
  mongodb = require("mongodb"),
  fs = require("fs"),
  Jimp = require("jimp"),
  path = require("path");
const { gallery } = require(".");

module.exports = {
  index: (req, res) => {
    Gallery.find({}, (err, galleries) => {
      if (err) {
        res.status(404).json("unable to get galleries");
        return console.log(err);
      }
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
      if (err) {
        res.status(404).json("unable to get galleries");
        return console.log(err);
      }
      res.status(200).json(galleries);
    });
  },
  byCategory: (req, res) => {
    let category = new RegExp("^" + req.params.category + "$", "i");
    Gallery.find({ category }, (err, galleries) => {
      if (err) {
        res.status(404).json("unable to get galleries");
        return console.log(err);
      }
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
                  if (err) {
                    console.log(err);
                    return res.status(500).json(err);
                  } else {
                    res.json(updated);
                  }
                }
              );
            }
          }
        );
        console.log(req.body.name);
      }
    } catch (err) {
      res.status(500).json("server error");
    }
  },

  rename: (req, res) => {
    try {
      if (req.params.id && req.body.name) {
        Gallery.findOne(
          { _id: mongodb.ObjectId(req.params.id) },
          (err, updated) => {
            if (err) {
              console.log(err);
              return res.status(500).json(err);
            } else {
              Gallery.updateOne(
                { _id: mongodb.ObjectId(req.params.id) },
                { name: req.body.name },
                (err, gallery) => {
                  console.log(gallery);
                  // console.log(`replacing ${gallery.name} with ${req.body.new}`);
                  if (err) {
                    console.log(err);
                    return res.status(500).json(err);
                  } else {
                    Gallery.update(
                      {
                        _id: mongodb.ObjectId(req.params.id),
                      },
                      { $set: { "photos.$[].gallery": req.body.name } },
                      { upsert: true },
                      (err, gal) => {
                        if (err) {
                          console.log(err);
                          return res.status(500).json(err);
                        } else {
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
                              if (err) {
                                return console.error(err);
                              }
                              Gallery.findOne(
                                { _id: mongodb.ObjectId(req.params.id) },
                                (err, updated) => {
                                  if (err) {
                                    console.log(err);
                                    return res.status(500).json(err);
                                  } else {
                                    res.status(200).json(updated);
                                    // res.redirect(
                                    //   `/#/${updated.category
                                    //     .toLowerCase()
                                    //     .replace(/\/?\s+/g, "-")}`
                                    // );
                                    console.log(
                                      "Directory created successfully!"
                                    );
                                  }
                                }
                              );
                            }
                          );
                        }
                      }
                    );
                  }
                }
              );
              console.log(req.body.name);
            }
          }
        );
      }
    } catch (err) {
      res.status(500).json("server error");
    }
  },
  delete: (req, res) => {
    try {
      if (req.params.id) {
        Gallery.deleteOne(
          { _id: mongodb.ObjectId(req.params.id) },
          (err, deleted) => {
            if (err) {
              console.log(err);
              return res.status(500).json(err);
            } else {
              res.status(200).json(deleted);
              console.log("gallery deleted");
            }
          }
        );
      }
    } catch (err) {
      res.status(500).json("server error");
    }
  },
  create: (req, res) => {
    console.log(req.body);
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
          Jimp.read(
            `${__dirname}/../uploads/tmp/${file.name}`,
            (err, thumbnail) => {
              if (err) {
                console.log(err);
                return res.status(500).json(err);
              }
              thumbnail
                .resize(480, Jimp.AUTO) // resize
                .write("thumb.jpg"); // save
              console.log(file);
              createNewGallery();
            }
          );
        });
      }
      function finish(newGallery) {
        file.mv(`${galleryPath}/thumb.jpg`, (err) => {
          if (err) {
            console.error(err);
            return res.status(500).send(err);
          }
          res.status(200).json(newGallery);
          console.log("gallery created");
        });
      }

      function createNewGallery() {
        Gallery.create(gallery, (err, newGallery) => {
          if (err) {
            console.log(err);
            return res.status(500).json(err);
          } else {
            if (file) {
              if (fs.existsSync(galleryPath)) {
                if (fs.existsSync(`${galleryPath}/thumbs`)) {
                  finish(newGallery);
                } else {
                  fs.mkdir(`${galleryPath}/thumbs`, (err) => {
                    if (err) {
                      console.error(err);
                      return res.status(500).send(err);
                    }
                    finish(newGallery);
                  });
                }
              } else {
                fs.mkdir(galleryPath, (err) => {
                  if (err) {
                    console.error(err);
                    return res.status(500).send(err);
                  }
                  fs.mkdir(`${galleryPath}/thumbs`, (err) => {
                    if (err) {
                      console.error(err);
                      return res.status(500).send(err);
                    }
                    finish(newGallery);
                  });
                });
              }
            } else {
              res.status(200).json(newGallery);
              console.log("gallery created");
            }
            // res.status(200).json(newGallery);
            // console.log("gallery created");
          }
        });
      }
    } catch (err) {
      res.status(500).json("server error");
    }
  },
  reorder: (req, res) => {
    console.log("updating gallery order");
    try {
      if (req.body) {
        for (let i = 0; i < req.body.length; i++) {
          Gallery.updateOne(
            { _id: mongodb.ObjectId(req.body[i]._id) },
            { order: req.body[i].order },
            (err, gallery) => {
              if (err) {
                console.error(err);
                return res.status(500).send(err);
              }
              if (i == req.body.length - 1) {
                res.json("successfully updated all galleries");
              }
            }
          );
        }
      }
    } catch (err) {
      console.log(err);
      res.status(500).json("server error");
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
        if (err) {
          console.log(err);
          return res.status(500).json(err);
        }
        thumbnail
          .resize(480, Jimp.AUTO) // resize
          .write(`${galleryPath}/thumb.jpg`); // save
        res.json(thumbnail);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json("server error");
    }
    // console.log(req.body);
    // res.json(req.body);
  },
};
