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

  edit: (req, res) => {
    console.log(req.body);
    let deletePhotos =
      !!req.body.deletePhotos && req.body.deletePhotos != "undefined"
        ? JSON.parse(req.body.deletePhotos)
        : null;
    let editPhotos =
      !!req.body.editPhotos && req.body.editPhotos != "undefined"
        ? JSON.parse(req.body.editPhotos)
        : null;

    if (deletePhotos && deletePhotos.length > 0) {
      deletePostPhotos();
    }
    if (editPhotos && editPhotos.length > 0) {
      editPostPhotos();
    }
    if (req.files) {
      addPhoto();
    } else {
      updatePost();
    }

    function deletePostPhotos() {
      console.log("deleting photos:");
      for (let i = 0; i < deletePhotos.length; i++) {
        let photo = deletePhotos[i];
        News.updateOne(
          { _id: mongodb.ObjectId(req.body._id) },
          {
            $pull: {
              photos: {
                _id: mongodb.ObjectId(photo._id),
              },
            },
          },
          (err, result) => {
            if (err) {
              console.log(err);
              return res.status(500).json(err);
            }
            deletePhotoFile(photo);
            if (i == deletePhotos.length - 1) {
              console.log(result);
            }
          }
        );
      }
    }

    function editPostPhotos() {
      console.log("updating edited photos:");
      for (let i = 0; i < editPhotos.length; i++) {
        let photo = editPhotos[i];
        News.updateOne(
          {
            "photos._id": mongodb.ObjectId(photo._id),
          },

          {
            $set: {
              "photos.$.caption": photo.caption,
              "photos.$.order": photo.order,
            },
          },
          (err, result) => {
            if (err) {
              console.log(err);
              return res.status(500).json(err);
            }
            if (i == editPhotos.length - 1) {
              console.log(result);
            }
          }
        );
      }
    }

    function deletePhotoFile(photo) {
      try {
        fs.unlinkSync(`${__dirname}/../uploads/news/${photo.location}`);
      } catch (err) {
        console.log(err);
      }
    }

    function updatePost() {
      News.updateOne(
        { _id: mongodb.ObjectId(req.body._id) },
        {
          title: req.body.title,
          text: req.body.text,
          date: req.body.date,
          hideDate: req.body.hideDate,
          hidePost: req.body.hidePost,
        },
        (err, post) => {
          if (err)
            if (err) {
              console.log(err);
              return res.status(500).json(err);
            }
          getUpdatedPost();
        }
      );
    }

    function getUpdatedPost() {
      console.log("getting updated post");
      News.findOne({ _id: mongodb.ObjectId(req.body._id) }, (err, post) => {
        if (err)
          if (err) {
            console.log(err);
            return res.status(500).json(err);
          }
        res.json(post);
      });
    }

    function addPhoto() {
      let photos = req.body.photoData ? JSON.parse(req.body.photoData) : null;
      let files = [];
      try {
        if (Array.isArray(req.files.newPhotos)) {
          files = req.files.newPhotos;
        } else {
          files.push(req.files.newPhotos);
        }
        for (let i = 0; i < files.length; i++) {
          let newName = `${Math.random().toString(36).substring(2, 8)}-${
            files[i].name
          }`;
          photos.find((arr) => {
            return arr.location == files[i].name;
          }).location = newName;
          files[i].mv(`${__dirname}/../uploads/news/${newName}`, () => {
            if (i == files.length - 1) {
              addPhotoData(photos);
            }
          });
        }
      } catch (err) {
        res.status(500).json("server error");
        return console.log(err);
      }
    }

    function addPhotoData(photos) {
      photos.forEach((photo) => {
        photo._id = mongodb.ObjectID();
      });
      console.log("adding photos:");
      console.log(photos);
      News.updateOne(
        { _id: mongodb.ObjectId(req.body._id) },
        { $push: { photos: { $each: photos } } },
        (err, result) => {
          if (err) {
            console.log(err);
            return res.status(500).json(err);
          }
          updatePost();
        }
      );
    }
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
      hidePost: req.body.hidePost,
      hideDate: req.body.hideDate,
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
