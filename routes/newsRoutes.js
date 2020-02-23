const express = require("express"),
  router = express.Router(),
  newsController = require("../controllers/news.js");

module.exports = router
  .get("/all", newsController.index)
  .get("/test", function(req, res) {
    res.json({ message: "news test successful" });
    console.log("test successful");
  });
