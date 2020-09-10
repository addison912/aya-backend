const News = require("../Models/News"),
  mongodb = require("mongodb"),
  path = require("path"),
  fs = require("fs");

function errCheck(err) {
  if (err) {
    console.log(err);
    return res.status(500).json({ err });
  }
}

module.exports = {
  index: (req, res) => {
    News.find({}, (err, news) => {
      errCheck(err);
      res.status(200).json(news);
    });
  },

  edit: (req, res) => {
    try {
      let deletePhotos =
        !!req.body.deletePhotos && req.body.deletePhotos != "undefined"
          ? JSON.parse(req.body.deletePhotos)
          : null;

      let editPhotos =
        !!req.body.editPhotos && req.body.editPhotos != "undefined"
          ? JSON.parse(req.body.editPhotos)
          : null;

      //check for photos to delete
      if (deletePhotos && deletePhotos.length > 0) {
        deletePostPhotos();
      }
      //check for photos to edit
      if (editPhotos && editPhotos.length > 0) {
        editPostPhotos();
      }
      //check for new photos
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
              errCheck(err);
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
              errCheck(err);
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
            errCheck(err);
            getUpdatedPost();
          }
        );
      }

      function getUpdatedPost() {
        console.log("getting updated post");
        News.findOne({ _id: mongodb.ObjectId(req.body._id) }, (err, post) => {
          errCheck(err);
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
          errCheck(err);
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
            errCheck(err);
            updatePost();
          }
        );
      }
    } catch (err) {
      errCheck(err);
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
      News.create(post, (err, post) => {
        errCheck(err);
        res.status(200).json(post);
      });
    }

    try {
      if (req.files === null) {
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
      }
    } catch (err) {
      errCheck(err);
    }
  },
  delete: (req, res) => {
    try {
      console.log(`deleting post: ${req.params.id}`);

      News.findOne({ _id: mongodb.ObjectId(req.params.id) }, (err, post) => {
        errCheck(err);
        //
        console.log(post);
        if (post && post.photos) {
          for (let i = 0; i < post.photos.length; i++) {
            try {
              fs.unlinkSync(
                `${__dirname}/../uploads/news/${post.photos[i].location}`
              );
            } catch (err) {
              errCheck(err);
            }
          }
          News.deleteOne(
            { _id: mongodb.ObjectId(req.params.id) },
            (err, deleted) => {
              errCheck(err);
              res.status(200).json(deleted);
            }
          );
        }
      });
    } catch (err) {
      errCheck(err);
    }
  },
};
