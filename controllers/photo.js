const db = require("../Models"),
  mongodb = require("mongodb"),
  path = require("path"),
  Jimp = require("jimp"),
  fs = require("fs");

function errCheck(err) {
  if (err) {
    console.log(err);
    return res.status(500).json({ err });
  }
}

module.exports = {
  search: (req, res) => {
    try {
      if (!req.body || !req.body.query) {
        res.status(404).json("Invalid: Missing query string");
      } else {
        let search = new RegExp(req.body.query, "i");
        db.Gallery.find(
          {
            $or: [
              { "photos.caption": search },
              { "photos.searchTags": search },
            ],
          },
          (err, galleries) => {
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
            // console.log(response);
            res.status(200).json(response);
          }
        );
      }
    } catch (err) {
      errCheck(err);
    }
  },
  resize: (req, res) => {
    try {
      console.log("resize started");
      location = req.body.location;
      console.log(location);
      db.Gallery.findOne(
        { "photos._id": mongodb.ObjectId(req.body._id) },
        (err, gallery) => {
          errCheck(err);
          console.log(gallery.name);
          if (gallery && location) {
            try {
              let directory = `${__dirname}/../uploads/photos/${
                gallery.category.toLowerCase() == "advertising"
                  ? "Client-Work"
                  : gallery.category.replace(/\/?\s+/g, "_")
              }/${gallery.name.replace(/\/?\s+/g, "_")}`;
              console.log(directory);
              if (
                fs.existsSync(`${directory}/thumbs/${location}`) &&
                fs.existsSync(`${directory}/${location}`)
              ) {
                console.log("image found");
                fs.unlinkSync(`${directory}/thumbs/${location}`);
                Jimp.read(`${directory}/${location}`, (err, thumbnail) => {
                  errCheck(err);
                  console.log("here");
                  let image = new Jimp(`${directory}/${location}`, function (
                    err,
                    image
                  ) {
                    errCheck(err);
                    let w =
                      image.bitmap.width > 1000 ? 1000 : image.bitmap.width; //  width of the image
                    console.log(w);
                    thumbnail
                      .resize(w, Jimp.AUTO) // resize
                      .write(`${directory}/thumbs/${location}`); // save
                    res
                      .status(200)
                      .json({ message: "Photo successfully resized" });
                  });
                });
              }
            } catch (err) {
              errCheck(err);
            }
          }
        }
      );
    } catch (err) {
      errCheck(err);
    }
  },
  delete: (req, res) => {
    try {
      location = req.params.location;
      db.Gallery.findOne(
        { "photos._id": mongodb.ObjectId(req.params.id) },
        (err, gallery) => {
          errCheck(err);
          // console.log(gallery);
          if (gallery && location) {
            try {
              let directory = `${__dirname}/../uploads/photos/${
                gallery.category.toLowerCase() == "advertising"
                  ? "Client-Work"
                  : gallery.category.replace(/\/?\s+/g, "_")
              }/${gallery.name.replace(/\/?\s+/g, "_")}`;

              if (fs.existsSync(`${directory}/${location}`)) {
                fs.unlinkSync(`${directory}/${location}`);
              }
              if (fs.existsSync(`${directory}/thumbs/${location}`)) {
                fs.unlinkSync(`${directory}/thumbs/${location}`);
              }
            } catch (err) {
              errCheck(err);
            }
            db.Gallery.updateOne(
              { name: gallery.name, category: gallery.category },
              {
                $pull: { photos: { _id: mongodb.ObjectId(req.params.id) } },
              },
              (err, photo) => {
                errCheck(err);
                res.status(200).json({ message: "Photo successfully deleted" });
              }
            );
          }
        }
      );
    } catch (err) {
      errCheck(err);
    }
  },
  addPhoto: (req, res) => {
    try {
      if (req.files === null) {
        return res.status(400).json({ msg: "No file uploaded" });
      }

      const file = req.files.file;
      // console.log(req.body);

      let galleryPath = `${__dirname}/../uploads/photos/${
        req.body.category.toLowerCase() == "advertising"
          ? "Client-Work"
          : req.body.category.replace(/\/?\s+/g, "_")
      }/${req.body.gallery.replace(/\/?\s+/g, "_").replace(/[^\w\s]/gi, "")}`;

      file.mv(`${galleryPath}/${file.name}`, (err) => {
        errCheck(err);
        // console.log("resizing image for thumbnail");
        Jimp.read(`${galleryPath}/${file.name}`, (err, thumbnail) => {
          errCheck(err);
          thumbnail
            .resize(1000, Jimp.AUTO) // resize
            .write(`${galleryPath}/thumbs/${file.name}`); // save

          let newPhoto = req.body;
          newPhoto.location = file.name;
          newPhoto._id = mongodb.ObjectID();
          // console.log(newPhoto);
          db.Gallery.updateOne(
            { _id: mongodb.ObjectId(req.params.id) },
            {
              $push: { photos: newPhoto },
            },
            (err, photo) => {
              errCheck(err);
              db.Gallery.findOne(
                { _id: mongodb.ObjectId(req.params.id) },
                (err, gallery) => {
                  errCheck(err);
                  res.status(200).json(gallery);
                }
              );
            }
          );
        });
      });
    } catch (err) {
      errCheck(err);
    }
  },
  copy: (req, res) => {
    let photo = req.body.photo;
    let destinationGallery = req.body.destinationGallery;
    try {
      db.Gallery.findOne(
        { "photos._id": mongodb.ObjectId(photo._id) },
        (err, gallery) => {
          errCheck(err);
          newPhoto = gallery.photos.find((item) => {
            return photo._id == item._id;
          });
          newPhoto._id = mongodb.ObjectID();
          newPhoto.order = 0;
          db.Gallery.findOne(
            { _id: mongodb.ObjectId(destinationGallery) },
            (err, destGallery) => {
              errCheck(err);
              newPhoto.category = destGallery.category;
              newPhoto.gallery = destGallery.name;
              copyFile(photo, newPhoto);
            }
          );
        }
      );
    } catch (err) {
      errCheck(err);
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
                errCheck(err);
                addPhotoData(dest, destinationGallery);
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
          errCheck(err);
          res.json(copiedPhoto);
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
                errCheck(err);
                if (req.body.reordered.photos) {
                  let photos = req.body.reordered.photos;
                  // console.log("updating photos");
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
                          errCheck(err);
                          if (final) {
                            console.log("getting updated gallery");
                            db.Gallery.findOne(
                              { name: req.body.newPhoto.gallery },
                              (err, gallery) => {
                                errCheck(err);
                                // console.log("sending response");
                                res.status(200).json(gallery);
                              }
                            );
                          }
                        }
                      );
                    } else if (i == photos.length - 1) {
                      // console.log("getting updated gallery");
                      db.Gallery.findOne(
                        { name: req.body.newPhoto.gallery },
                        (err, gallery) => {
                          errCheck(err);
                          // console.log("sending response");
                          res.status(200).json(gallery);
                        }
                      );
                    }
                  }
                } else {
                  // console.log(gal);
                  res.status(200).json(gallery);
                }
              }
            );
          }
        }
      );
    } catch (err) {
      errCheck(err);
    }
  },
};
