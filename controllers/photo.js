const db = require("../Models"),
  mongodb = require("mongodb");

module.exports = {
  search: (req, res) => {
    // console.log(req.body);
    if (!req.body || !req.body.query) {
      res.status(404).json("Invalid: Missing query string");
    } else {
      let search = new RegExp(req.body.query, "i");
      //   console.log(search);
      db.Photo.find(
        { $or: [{ caption: search }, { gallery: search }] },
        (err, photos) => {
          if (err) {
            res.status(404).json("unable to get photos");
            return console.log(err);
          }
          res.status(200).json(photos);
        }
      );
    }
  },
  delete: (req, res) => {
    console.log(`deleting photo: ${req.params.id}`);
    db.Photo.findOne({ _id: mongodb.ObjectId(req.params.id) }, (err, photo) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ err });
      } else {
        console.log(photo);
        if (photo) {
          db.Gallery.update(
            { name: photo.gallery, category: photo.category },
            {
              $pull: { photos: { _id: mongodb.ObjectId(req.params.id) } },
            },
            (err, gallery) => {
              if (err) {
                console.log(err);
                return res.status(500).json({ err });
              } else if (gallery) {
                console.log(gallery);
              }
            }
          );
        }
        res.status(200).json({ message: "Photo successfully deleted" });
      }
    });
  },

  // delete: (req, res) => {
  //   console.log(`deleting photo: ${req.params.id}`);
  //   db.Gallery.update(
  //     {},
  //     {
  //       $pull: {
  //         photos: { _id: mongodb.ObjectId(req.params.id) },
  //       },
  //     },
  //     (err, photo) => {
  //       if (err) {
  //         console.log(err);
  //         return res.status(500).json({ err });
  //       } else {
  //         console.log(photo);
  //       }
  //     }
  //   );
  // },

  // delete: (req, res) => {
  //   console.log(`deleting photo: ${req.params.id}`);
  //   db.Gallery.findById(req.params.id, (err, photo) => {
  //     if (err) {
  //       console.log(err);
  //       return res.status(500).json({ err });
  //     } else {
  //       console.log(photo);
  //       res.status(200).json({ message: "Photo successfully deleted" });
  //     }
  //   });
  // },
};

// db.getCollection("galleries").update(
//   { name: "Welcome Cocco" },
//   { $pull: { photos: { _id: ObjectId("5edcbb8830e525e0bc906f16") } } }
// );
