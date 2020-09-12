const About = require("../Models/About"),
  fs = require("fs"),
  Jimp = require("jimp"),
  path = require("path");

function errCheck(err) {
  if (err) {
    console.log(err);
    return res.status(500).json({ err });
  }
}

module.exports = {
  //return all about page fields
  all: (req, res) => {
    try {
      About.findOne({}, (err, about) => {
        if (err) {
          res.status(500).json("unable to get about page content");
          return;
        }
        res.status(200).json(about);
      });
    } catch (err) {
      errCheck(err);
    }
  },

  update: (req, res) => {
    try {
      About.updateOne({}, req.body, (err, about) => {
        if (err) {
          res.status(404).json("unable to update about page");
          return console.log(err);
        }
        About.findOne({}, (err, about) => {
          if (err) {
            res.status(404).json("unable to get about page content");
            return console.log(err);
          }
          res.status(200).json(about);
        });
      });
    } catch (err) {
      errCheck(err);
    }
  },
  profilePic: (req, res) => {
    try {
      if (req.files === null) {
        return res.status(400).json({ msg: "No file uploaded" });
      }
      const file = req.files.file;
      function checkAndDelete(filePath) {
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      }
      try {
        file.mv(`${__dirname}/../uploads/tmp/${file.name}`, (err) => {
          errCheck(err);
          Jimp.read(
            `${__dirname}/../uploads/tmp/${file.name}`,
            (err, resized) => {
              errCheck(err);
              resized
                .resize(480, Jimp.AUTO) // resize
                .write(`${file.name}.jpg`); // save
              console.log(file);
              checkAndDelete(`${__dirname}/../uploads/about/profile-pic.jpg`);
              file.mv(
                `${__dirname}/../uploads/about/profile-pic.jpg`,
                (err) => {
                  errCheck(err);
                  checkAndDelete(`${__dirname}/../uploads/tmp/${file.name}`);
                  res.status(200).json("profile-pic-uploaded");
                }
              );
            }
          );
        });
      } catch (err) {
        errCheck(err);
      }
    } catch (err) {
      errCheck(err);
    }
  },
  test: (req, res) => {
    try {
      About.findOne({}, (err, about) => {
        if (err) {
          res.status(500).json("unable to get about page content");
          return;
        }
        res.status(200).json({});
      });
    } catch (err) {
      errCheck(err);
    }
  },
};
