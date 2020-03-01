const express = require("express"),
  router = express.Router(),
  controllers = require("../controllers");

module.exports = router
  .get("/all", controllers.news.index)
  .get("/test", function(req, res) {
    res.json({ message: "news test successful" });
    console.log("test successful");
  });
