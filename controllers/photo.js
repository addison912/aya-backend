const db = require("../Models"),
  mongodb = require("mongodb"),
  path = require("path"),
  multer = require("multer"),
  fs = require("fs");

const storage = multer.diskStorage({
  destination: "../test/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// Init Upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).single("myImage");

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
      db.Gallery.find({ "photos.caption": search }, (err, galleries) => {
        if (err) {
          res.status(404).json("unable to get photos");
          return console.log(err);
        }
        let response = [];
        galleries.forEach((gallery) => {
          if (gallery.photos) {
            gallery.photos.forEach((photo) => {
              if (photo.caption.match(search)) {
                response.push(photo);
              }
            });
          }
        });
        console.log(response);
        res.status(200).json(response);
      });
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
          //
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
            //
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
  edit: (req, res) => {
    try {
      console.log(req.body);
      console.log(req.params.id);

      db.Gallery.findOne(
        { "photos._id": mongodb.ObjectId(req.params.id) },
        (err, gallery) => {
          if (err) {
            console.log(err);
            return res.status(500).json({ err });
          } else {
            console.log("gallery: " + gallery);
            db.Gallery.updateOne(
              {
                "photos._id": mongodb.ObjectId(req.params.id),
              },

              { $set: { "photos.$": req.body } },

              (err, gal) => {
                if (err) {
                  console.log(err);
                  return res.status(500).json(err);
                } else {
                  console.log(gal);
                  res.status(200).json(gal);
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
