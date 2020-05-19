const About = require("../Models/About");

module.exports = {
  all: (req, res) => {
    About.findOne({}, (err, about) => {
      if (err) {
        res.status(404).json("unable to get about page content");
        return console.log(err);
      }
      res.status(200).json(about);
    });
  }
};
