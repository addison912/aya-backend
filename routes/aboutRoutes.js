const express = require("express"),
  router = express.Router(),
  jwt = require("jsonwebtoken"),
  config = require("../config/config"),
  controllers = require("../controllers");

module.exports = router
  .get("/all", controllers.about.all)
  .post("/edit", verifyToken, controllers.about.update)
  .post("/profile-pic", verifyToken, controllers.about.profilePic)
  .get("/test", function (req, res) {
    res.json({ message: "test successful" });
    console.log("test successful");
  });

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
