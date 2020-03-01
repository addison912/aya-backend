const express = require("express"),
  router = express.Router(),
  controllers = require("../controllers");

module.exports = router
  .get("/all/", controllers.gallery.index)
  .get("/c/:category", controllers.gallery.byCategory)
  // .get("/:name", controllers.gallery.byName)
  .get("/test", function(req, res) {
    res.json({ message: "test successful" });
    console.log("test successful");
  });
// .get("/:id", controllers.gallery.byid)
//   .post("/", controllers.gallery.create);
// .put("/:id", controllers.gallery.edit);
//   .get("/user/:userId", controllers.gallery.byUser);
