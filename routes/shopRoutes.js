const express = require("express"),
  router = express.Router(),
  controllers = require("../controllers");

module.exports = router
  .get("/all", controllers.shop.index)
  // .post("/update", controllers.shop.update)
  .get("/test", verifyToken, function (req, res) {
    res.json({ message: "shop test successful" });
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
