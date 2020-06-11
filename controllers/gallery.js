const Gallery = require("../Models/Gallery"),
  mongodb = require("mongodb"),
  fs = require("fs"),
  multer = require("multer"),
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
};
