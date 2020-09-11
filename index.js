const express = require("express"),
  path = require("path"),
  bodyParser = require("body-parser"),
  jwt = require("jsonwebtoken"),
  cors = require("cors"),
  config = require("./config/config"),
  https = require("https"),
  fileUpload = require("express-fileupload"),
  fs = require("fs");

// generate a new express app and call it 'app'
const app = express();
app.set("case sensitive routing", false);

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(fileUpload());

app.use("/", express.static(path.join(__dirname, "dist")));

//api routes
const routes = require("./routes");
app.use("/auth", routes.user);
app.use("/api/gallery", routes.gallery);
app.use("/api/photo", routes.photo);
app.use("/api/news", routes.news);
app.use("/api/about", routes.about);
app.use("/api/shop", routes.shop);

//static file routes
app.use("/uploads", express.static("uploads"));
app.use("/assets", express.static("assets"));

// app.post("/verify", verifyToken, (req, res) => {
//   let verified = jwt.verify(req.token, "waffles");
//   console.log("verified: ", verified);
//   res.json(verified);
// });

// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "dist", "index.html"));
// });

// app.get("/", function(req, res) {
//   res.sendFile("/index.html");
// });

function verifyToken(req, res, next) {
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
}

app.get("/api/test", function (req, res) {
  res.status(200).json({ message: "Hello World" });
});

const port = process.env.PORT || config.port;

app.listen(port, () => console.log(`Listening on port ${port}`));
