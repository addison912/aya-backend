const Gallery = require("../Models/Gallery");

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
    Gallery.find({ category: req.params.category }, (err, galleries) => {
      if (err) {
        res.status(404).json("unable to get galleries");
        return console.log(err);
      }
      res.status(200).json(galleries);
    });
  }
};
