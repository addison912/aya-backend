const express = require("express"),
  router = express.Router(),
  photoController = require("../controllers/photo.js");

module.exports = router
  .post("/search", photoController.search)
  // .get("/c/:category", photoController.byCategory)
  // .get("/:name", photoController.byName)
  .get("/test", function(req, res) {
    res.json({ message: "test successful" });
    console.log("test successful");
  });
