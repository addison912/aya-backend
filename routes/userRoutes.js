const express = require("express"),
  app = express(),
  router = express.Router(),
  jwt = require("jsonwebtoken"),
  controllers = require("../controllers"),
  config = require("../config/config");

router.post("/signup", controllers.user.signup);

router.post("/login", controllers.user.login);

router.use((req, res, next) => {
  console.log("activated");
  const bearerHeader = req.headers["authorization"];
  console.log("triggered token check", bearerHeader);

  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    let verified = jwt.verify(req.token, config.jwtSecret);
    console.log("here is the verified", verified);
    req.userId = verified._id; //set user id for routes to use
    next();
  } else {
    res.sendStatus(403);
  }
});

router.get("/", controllers.user.show);

router.delete("/", controllers.user.delete);

module.exports = router;
