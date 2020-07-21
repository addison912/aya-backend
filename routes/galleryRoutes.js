const express = require("express"),
  router = express.Router(),
  jwt = require("jsonwebtoken"),
  config = require("../config/config"),
  controllers = require("../controllers");

module.exports = router
  .get("/all/", controllers.gallery.index)
  .get("/c/:category", controllers.gallery.byCategory)
  // .get("/:name", controllers.gallery.byName)
  .get("/test", function (req, res) {
    res.json({ message: "test successful" });
    console.log("test successful");
  })
  .post("/rename/:id", verifyToken, controllers.gallery.rename)
  .post("/create", verifyToken, controllers.gallery.create)
  .post("/reorder", verifyToken, controllers.gallery.reorder)
  .post("/thumb", verifyToken, controllers.gallery.editThumb)
  .delete("/delete/:id", verifyToken, controllers.gallery.delete);
// .get("/:id", controllers.gallery.byid)
//   .post("/", controllers.gallery.create);
// .put("/:id", controllers.gallery.edit);
//   .get("/user/:userId", controllers.gallery.byUser);

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
