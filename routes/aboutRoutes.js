const express = require("express"),
  router = express.Router(),
  controllers = require("../controllers");

module.exports = router
  .get("/all", controllers.about.all)
  .get("/test", function(req, res) {
    res.json({ message: "test successful" });
    console.log("test successful");
  });
