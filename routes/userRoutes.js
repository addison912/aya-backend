const express = require("express"),
  app = express(),
  router = express.Router(),
  jwt = require("jsonwebtoken"),
  controllers = require("../controllers"),
  config = require("../config/config"),
  keys = require("../config/keys.js"),
  passport = require("passport");

// router.post("/signup", controllers.user.signup);

router.post("/login", controllers.user.login);

router.get(
  `/login/google`,
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.post(`/login/google`, controllers.user.googleLogin);

router.get("/verify", controllers.user.verify);

router.get(
  `/google/redirect`,
  passport.authenticate("google"),
  // (req, res) => {
  // console.log(req);
  // res.header("id", "test");
  // res.redirect(config.domain);
  // }
  controllers.user.googleRedirect
);

// router.use((req, res, next) => {
//   console.log("activated");
//   const bearerHeader = req.headers["authorization"];
//   console.log("triggered token check", bearerHeader);

//   if (typeof bearerHeader !== "undefined") {
//     const bearer = bearerHeader.split(" ");
//     const bearerToken = bearer[1];
//     req.token = bearerToken;
//     let verified = jwt.verify(req.token, config.jwtSecret);
//     console.log("here is the verified", verified);
//     req.userId = verified._id; //set user id for routes to use
//     next();
//   } else {
//     res.sendStatus(403);
//   }
// });

// router.get("/", controllers.user.show);

router.get("/test", function (req, res) {
  res.json({ message: "test successful" });
  console.log("test successful");
});

function verifyToken(req, res, next) {
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
}

// router.delete("/", controllers.user.delete);

module.exports = router;
