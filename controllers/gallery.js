const Gallery = require("../Models/Gallery"),
  mongodb = require("mongodb"),
  fs = require("fs"),
  Jimp = require("jimp"),
  path = require("path");

module.exports = {
  index: (req, res) => {
    Gallery.find({}, (err, galleries) => {
      if (err) {
        res.status(404).json("unable to get galleries");
        return console.log(err);
      }
      res.status(200).json(galleries);
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
        published: false,
        _id: mongodb.ObjectId(),
      };
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

      function createNewGallery() {
        Gallery.create(gallery, (err, newGallery) => {
          if (err) {
            console.log(err);
            return res.status(500).json(err);
          } else {
            if (file) {
              let galleryPath = `${__dirname}/../uploads/photos/${
                gallery.category.toLowerCase() == "advertising"
                  ? "Client-Work"
                  : gallery.category.replace(/\/?\s+/g, "_")
              }/${gallery.name
                .replace(/\/?\s+/g, "_")
                .replace(/[^\w\s]/gi, "")}`;
              if (fs.existsSync(galleryPath)) {
                if (fs.existsSync(`${galleryPath}/thumbs`)) {
                  file.mv(`${galleryPath}/thumb.jpg`, (err) => {
                    if (err) {
                      console.error(err);
                      return res.status(500).send(err);
                    }
                    res.status(200).json(newGallery);
                    console.log("gallery created");
                  });
                } else {
                  fs.mkdir(`${galleryPath}/thumbs`, (err) => {
                    if (err) {
                      console.error(err);
                      return res.status(500).send(err);
                    }
                    file.mv(`${galleryPath}/thumb.jpg`, (err) => {
                      if (err) {
                        console.error(err);
                        return res.status(500).send(err);
                      }
                      res.status(200).json(newGallery);
                      console.log("gallery created");
                    });
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
                    file.mv(`${galleryPath}/thumb.jpg`, (err) => {
                      if (err) {
                        console.error(err);
                        return res.status(500).send(err);
                      }
                      res.status(200).json(newGallery);
                      console.log("gallery created");
                    });
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
};
