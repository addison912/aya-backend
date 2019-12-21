const Photo = require("../Models/Photo");
const db = require("../Models");

module.exports = {
  search: (req, res) => {
    // console.log(req.body);
    if (!req.body || !req.body.query) {
      res.status(404).json("Invalid: Missing query string");
    } else {
      let search = new RegExp(req.body.query, "i");
      //   console.log(search);
      Photo.find(
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
  }
};
