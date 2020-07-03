const News = require("../Models/News"),
  mongodb = require("mongodb"),
  path = require("path"),
  fs = require("fs");

module.exports = {
  index: (req, res) => {
    News.find({}, (err, news) => {
      if (err) {
        res.status(404).json("unable to get news feed");
        return console.log(err);
      }
      res.status(200).json(news);
    });
  },

  post: (req, res) => {
    let files = [];
    let photos = JSON.parse(req.body.photoData)
      ? JSON.parse(req.body.photoData)
      : [];
    let newsPost = {
      title: req.body.title,
      text: req.body.text,
      date: req.body.date,
      photos,
    };

    function addPost(post) {
      console.log("posting");
      News.create(post, (err, post) => {
        if (err) {
          console.log(err);
          return res.status(500).json(err);
        } else {
          res.status(200).json(post);
        }
      });
    }

    try {
      if (req.files === null) {
        console.log("No files");
        addPost(newsPost);
      } else {
        if (Array.isArray(req.files.photos)) {
          files = req.files.photos;
        } else {
          files.push(req.files.photos);
        }
        for (let i = 0; i < files.length; i++) {
          let newName = `${Math.random().toString(36).substring(2, 8)}-${
            files[i].name
          }`;
          newsPost.photos.find((arr) => {
            return arr.location == files[i].name;
          }).location = newName;
          files[i].mv(`${__dirname}/../uploads/news/${newName}`, () => {
            if (i == files.length - 1) {
              addPost(newsPost);
            }
          });
          console.log(newsPost);
        }
        // files.forEach((photo) => {

        // });
      }
    } catch (err) {
      res.status(500).json("server error");
      return console.log(err);
    }
  },
  delete: (req, res) => {
    try {
      console.log(`deleting post: ${req.params.id}`);

      News.findOne({ _id: mongodb.ObjectId(req.params.id) }, (err, post) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ err });
        } else {
          //
          console.log(post);
          if (post && post.photos) {
            for (let i = 0; i < post.photos.length; i++) {
              try {
                fs.unlinkSync(
                  `${__dirname}/../uploads/news/${post.photos[i].location}`
                );
              } catch (err) {
                console.log(err);
              }
            }
            News.deleteOne(
              { _id: mongodb.ObjectId(req.params.id) },
              (err, deleted) => {
                if (err) {
                  console.log(err);
                  return res.status(500).json({ err });
                } else {
                  console.log(deleted);
                  res.status(200).json(deleted);
                }
              }
            );
          }
        }
      });
    } catch (err) {
      res.status(500).json("server error");
      return console.log(err);
    }
  },
};

/* 

  check if photos
  if no photos
    add post to db
  else
    for each photo file
      create unique name
      add new name do post photo data 
      move photo to news file
      after last photo
        add post to db
*/
