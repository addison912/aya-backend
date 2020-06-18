const About = require("../Models/About"),
  fs = require("fs"),
  Jimp = require("jimp"),
  path = require("path");

module.exports = {
  all: (req, res) => {
    About.findOne({}, (err, about) => {
      if (err) {
        res.status(404).json("unable to get about page content");
        return console.log(err);
      }
      res.status(200).json(about);
    });
  },
  update: (req, res) => {
    console.log(req.body);
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
  },
  profilePic: (req, res) => {
    console.log("profile pic update request received");

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
        if (err) {
          console.error(err);
          return res.status(500).send(err);
        }
        Jimp.read(
          `${__dirname}/../uploads/tmp/${file.name}`,
          (err, resized) => {
            if (err) {
              console.log(err);
              return res.status(500).json(err);
            }
            resized
              .resize(480, Jimp.AUTO) // resize
              .write(`${file.name}.jpg`); // save
            console.log(file);
            checkAndDelete(`${__dirname}/../uploads/about/profile-pic.jpg`);
            file.mv(`${__dirname}/../uploads/about/profile-pic.jpg`, (err) => {
              if (err) {
                console.error(err);
                return res.status(500).send(err);
              }
              checkAndDelete(`${__dirname}/../uploads/tmp/${file.name}`);
              res.status(200).json("profile-pic-uploaded");
            });
          }
        );
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
};
