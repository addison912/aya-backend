const express = require("express"),
  router = express.Router(),
  controllers = require("../controllers");

module.exports = router
  .get("/all", controllers.about.all)
  .post("/edit", controllers.about.update)
  .get("/test", function (req, res) {
    res.json({ message: "test successful" });
    console.log("test successful");
  });
