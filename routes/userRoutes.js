const express = require("express"),
  app = express(),
  router = express.Router(),
  jwt = require("jsonwebtoken"),
  controllers = require("../controllers"),
  config = require("../config/config"),
  keys = require("../config/keys.js");

// router.post("/signup", controllers.user.signup);

router.post("/login", controllers.user.login);

router.post(`/login/google`, controllers.user.googleLogin);

router.get("/verify", controllers.user.verify);

// router.get("/", controllers.user.show);

router.get("/test", function (req, res) {
  res.json({ message: "test successful" });
  console.log("test successful");
});

// Verify Token
function verifyToken(req, res, next) {
  try {
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
  } catch (err) {
    console.log("token check failed");
    res.sendStatus(403).json(err);
  }
}

// router.delete("/", controllers.user.delete);

module.exports = router;
