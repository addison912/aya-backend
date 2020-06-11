const express = require("express"),
  router = express.Router(),
  jwt = require("jsonwebtoken"),
  config = require("../config/config"),
  controllers = require("../controllers");

module.exports = router
  .post("/search", controllers.photo.search)
  // .get("/c/:category", controllers.photo.byCategory)
  // .get("/:name", controllers.photo.byName)
  .delete("/id/:id/location/:location", verifyToken, controllers.photo.delete)
  .post("/edit/:id", verifyToken, controllers.photo.edit)
  .get("/test/:id", verifyToken, function (req, res) {
    console.log(req.params.id);
    res.json(req.params);
    console.log("test successful");
  })
  .post("/add/:id", verifyToken, controllers.photo.addPhoto);

function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  console.log("triggered token check", bearerHeader);

  if (typeof bearerHeader !== "undefined") {
    console.log("checking token");
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    let verified = jwt.verify(req.token, config.jwtSecret);
    console.log("here is the verified", verified);
    req.userId = verified._id; //set user id for routes to use
    next();
  } else {
    console.log("token check failed");
    res.sendStatus(403);
  }
}
