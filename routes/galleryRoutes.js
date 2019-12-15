const express = require("express"),
  router = express.Router(),
  galleryController = require("../controllers/gallery.js");

module.exports = router
  .get("/all/", galleryController.index)
  .get("/c/:category", galleryController.byCategory)
  // .get("/:name", galleryController.byName)
  .get("/test", function(req, res) {
    res.json({ message: "test successful" });
    console.log("test successful");
  });
// .get("/:id", galleryController.byid)
//   .post("/", galleryController.create);
// .put("/:id", galleryController.edit);
//   .get("/user/:userId", galleryController.byUser);
