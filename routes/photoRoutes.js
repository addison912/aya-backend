const express = require("express"),
  router = express.Router(),
  controllers = require("../controllers");

module.exports = router
  .post("/search", controllers.photo.search)
  // .get("/c/:category", controllers.photo.byCategory)
  // .get("/:name", controllers.photo.byName)
  .get("/test", function(req, res) {
    res.json({ message: "test successful" });
    console.log("test successful");
  });
