const db = require("../Models"),
  mongodb = require("mongodb"),
  path = require("path"),
  Jimp = require("jimp"),
  fs = require("fs");

// Check File Type
function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
}

module.exports = {
  search: (req, res) => {
    // console.log(req.body);
    if (!req.body || !req.body.query) {
      res.status(404).json("Invalid: Missing query string");
    } else {
      let search = new RegExp(req.body.query, "i");
      //   console.log(search);
      db.Gallery.find(
        {
          $or: [{ "photos.caption": search }, { "photos.searchTags": search }],
        },
        (err, galleries) => {
          // db.Gallery.find({ "photos.caption": search }, (err, galleries) => {
          if (err) {
            res.status(404).json("unable to get photos");
            return console.log(err);
          }
          let response = [];
          galleries.forEach((gallery) => {
            if (gallery.photos) {
              gallery.photos.forEach((photo) => {
                if (
                  photo.caption.match(search) ||
                  photo.searchTags.match(search)
                ) {
                  response.push(photo);
                }
              });
            }
          });
          console.log(response);
          res.status(200).json(response);
        }
      );
    }
  },

  delete: (req, res) => {
    console.log(`deleting photo: ${req.params.id}`);
    location = req.params.location;
    db.Gallery.findOne(
      { "photos._id": mongodb.ObjectId(req.params.id) },
      (err, gallery) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ err });
        } else {
          console.log(gallery);
          if (gallery && location) {
            try {
              fs.unlinkSync(
                `${__dirname}/../uploads/photos/${
                  gallery.category.toLowerCase() == "advertising"
                    ? "Client-Work"
                    : gallery.category.replace(/\/?\s+/g, "_")
                }/${gallery.name.replace(/\/?\s+/g, "-")}/${location}`
              );
              fs.unlinkSync(
                `${__dirname}/../uploads/photos/${
                  gallery.category.toLowerCase() == "advertising"
                    ? "Client-Work"
                    : gallery.category.replace(/\/?\s+/g, "_")
                }/${gallery.name
                  .replace(/\/?\s+/g, "_")
                  .replace(/[^\w\s]/gi, "")}/thumbs/${location}`
              );
            } catch (err) {
              console.log(err);
            }
            db.Gallery.updateOne(
              { name: gallery.name, category: gallery.category },
              {
                $pull: { photos: { _id: mongodb.ObjectId(req.params.id) } },
              },
              (err, photo) => {
                if (err) {
                  console.log(err);
                  return res.status(500).json({ err });
                } else {
                  res
                    .status(200)
                    .json({ message: "Photo successfully deleted" });
                }
              }
            );
          }

          //
        }
      }
    );
  },
  addPhoto: (req, res) => {
    if (req.files === null) {
      return res.status(400).json({ msg: "No file uploaded" });
    }

    const file = req.files.file;
    console.log(req.body);

    file.mv(
      `${__dirname}/../uploads/photos/${
        req.body.category.toLowerCase() == "advertising"
          ? "Client-Work"
          : req.body.category.replace(/\/?\s+/g, "_")
      }/${req.body.gallery.replace(/\/?\s+/g, "_").replace(/[^\w\s]/gi, "")}/${
        file.name
      }`,
      (err) => {
        if (err) {
          console.error(err);
          return res.status(500).send(err);
        }
        file.mv(
          `${__dirname}/../uploads/photos/${
            req.body.category.toLowerCase() == "advertising"
              ? "Client-Work"
              : req.body.category.replace(/\/?\s+/g, "_")
          }/${req.body.gallery
            .replace(/\/?\s+/g, "_")
            .replace(/[^\w\s]/gi, "")}/thumbs/${file.name}`,
          (err) => {
            if (err) {
              console.error(err);
              return res.status(500).send(err);
            }

            let newPhoto = req.body;
            newPhoto.location = file.name;
            newPhoto._id = mongodb.ObjectID();
            console.log(newPhoto);
            db.Gallery.updateOne(
              { _id: mongodb.ObjectId(req.params.id) },
              {
                $push: { photos: newPhoto },
              },
              (err, photo) => {
                if (err) {
                  console.log(err);
                  return res.status(500).json({ err });
                } else {
                  db.Gallery.findOne(
                    { _id: mongodb.ObjectId(req.params.id) },
                    (err, gallery) => {
                      if (err) {
                        console.log(err);
                        return res.status(500).json({ err });
                      } else {
                        res.status(200).json(gallery);
                      }
                    }
                  );
                  // res.status(200).res.json(newPhoto);
                }
              }
            );

            //
          }
        );
      }
    );
  },
  copy: (req, res) => {
    let photo = req.body.photo;
    let destinationGallery = req.body.destinationGallery;
    try {
      db.Gallery.findOne(
        { "photos._id": mongodb.ObjectId(photo._id) },
        (err, gallery) => {
          if (err) {
            console.log(err);
            return res.status(500).json({ err });
          } else {
            newPhoto = gallery.photos.find((item) => {
              return photo._id == item._id;
            });
            newPhoto._id = mongodb.ObjectID();
            newPhoto.order = 0;
            db.Gallery.findOne(
              { _id: mongodb.ObjectId(destinationGallery) },
              (err, destGallery) => {
                if (err) {
                  console.log(err);
                  return res.status(500).json({ err });
                } else {
                  newPhoto.category = destGallery.category;
                  newPhoto.gallery = destGallery.name;
                  copyFile(photo, newPhoto);
                }
              }
            );
          }
        }
      );
    } catch (err) {
      if (err) {
        console.log(err);
        return res.status(500).json({ err });
      }
    }

    function copyFile(source, dest) {
      let destPath = `${__dirname}/../uploads/photos/${
        dest.category.toLowerCase() == "advertising"
          ? "Client-Work"
          : dest.category.replace(/\/?\s+/g, "_")
      }/${dest.gallery.replace(/\/?\s+/g, "_").replace(/[^\w\s]/gi, "")}`;
      let sourcePath = `${__dirname}/../uploads/photos/${
        source.category.toLowerCase() == "advertising"
          ? "Client-Work"
          : source.category.replace(/\/?\s+/g, "_")
      }/${source.gallery.replace(/\/?\s+/g, "_").replace(/[^\w\s]/gi, "")}`;
      if (fs.existsSync(destPath)) {
        dest.location = `${Math.random().toString(36).substring(2, 8)}-${
          dest.location
        }`;
      }

      fs.copyFile(
        `${sourcePath}/${source.location}`,
        `${destPath}/${dest.location}`,
        (err) => {
          if (err) {
            console.log(err);
            return res.status(500).json({ err });
          } else {
            fs.copyFile(
              `${sourcePath}/thumbs/${source.location}`,
              `${destPath}/thumbs/${dest.location}`,
              (err) => {
                if (err) {
                  console.log(err);
                  return res.status(500).json({ err });
                } else {
                  addPhotoData(dest, destinationGallery);
                }
              }
            );
          }
        }
      );
    }

    function addPhotoData(photo, galleryID) {
      db.Gallery.updateOne(
        { _id: mongodb.ObjectId(galleryID) },
        {
          $push: { photos: photo },
        },
        (err, copiedPhoto) => {
          if (err) {
            console.log(err);
            return res.status(500).json({ err });
          } else {
            res.json(copiedPhoto);
          }
        }
      );
    }
  },
  edit: (req, res) => {
    try {
      db.Gallery.updateOne(
        {
          "photos._id": mongodb.ObjectId(req.params.id),
        },

        {
          $set: {
            "photos.$.caption": req.body.newPhoto.caption,
            "photos.$.order": req.body.newPhoto.order,
            "photos.$.searchTags": req.body.newPhoto.searchTags,
          },
        },

        (err, gal) => {
          if (err) {
            console.log(err);
            return res.status(500).json(err);
          } else {
            db.Gallery.findOne(
              { name: req.body.newPhoto.gallery },
              (err, gallery) => {
                if (err) {
                  console.log(err);
                  return res.status(500).json({ err });
                } else {
                  if (req.body.reordered.photos) {
                    // console.log(req.body.reordered);
                    let photos = req.body.reordered.photos;
                    console.log("updating photos");
                    for (i = 0; i < photos.length; i++) {
                      if (photos[i]._id && photos[i].order) {
                        let final = i == photos.length - 1;
                        db.Gallery.updateOne(
                          {
                            "photos._id": mongodb.ObjectId(photos[i]._id),
                          },

                          {
                            $set: {
                              "photos.$.order": photos[i].order,
                            },
                          },
                          (err, result) => {
                            if (err) {
                              console.log(err);
                              return res.status(500).json(err);
                            } else if (final) {
                              console.log("getting updated gallery");
                              db.Gallery.findOne(
                                { name: req.body.newPhoto.gallery },
                                (err, gallery) => {
                                  if (err) {
                                    console.log(err);
                                    return res.status(500).json({ err });
                                  } else {
                                    console.log("sending response");
                                    res.status(200).json(gallery);
                                  }
                                }
                              );
                            }
                          }
                        );
                      } else if (i == photos.length - 1) {
                        console.log("getting updated gallery");
                        db.Gallery.findOne(
                          { name: req.body.newPhoto.gallery },
                          (err, gallery) => {
                            if (err) {
                              console.log(err);
                              return res.status(500).json({ err });
                            } else {
                              console.log("sending response");
                              res.status(200).json(gallery);
                            }
                          }
                        );
                      }
                    }
                  } else {
                    console.log(gal);
                    res.status(200).json(gallery);
                  }
                }
              }
            );
          }
        }
      );
    } catch (err) {
      console.log(err);
      res.status(500).json({ err });
    }
  },
};
