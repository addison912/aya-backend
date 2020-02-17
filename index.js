const express = require("express"),
  path = require("path"),
  bodyParser = require("body-parser"),
  // passport = require("./config/passport")(),
  // jwt = require("jsonwebtoken"),
  cors = require("cors"),
  config = require("./config/config");

// generate a new express app and call it 'app'
const app = express();
app.set("case sensitive routing", false);

// middleware
app.use(cors());
// app.use(passport.initialize());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "dist")));

// const galleryRoutes = require("./routes/galleryRoutes");
const routes = require("./routes");

// app.use("/photo", routes.user);
app.use("/api/gallery", routes.gallery);
app.use("/api/photo", routes.photo);

app.use("/uploads", express.static("uploads"));
app.use("/assets", express.static("assets"));
// app.use("/", express.static("build"));

// app.post("/verify", verifyToken, (req, res) => {
//   let verified = jwt.verify(req.token, "waffles");
//   console.log("verified: ", verified);
//   res.json(verified);
// });

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// app.get("/", function(req, res) {
//   res.sendFile("/index.html");
// });

app.get("/api/test", function(req, res) {
  res.json({ message: "Hello World" });
});

// // Verify Tokenj
// function verifyToken(req, res, next) {
//   console.log("in verify...");
//   // Get auth header value
//   // when we send our token, we want to send it in our header
//   const bearerHeader = req.headers["authorization"];
//   console.log(bearerHeader);
//   // Check if bearer is undefined
//   if (typeof bearerHeader !== "undefined") {
//     const bearer = bearerHeader.split(" ");
//     // Get token from array
//     const bearerToken = bearer[1];
//     // Set the token
//     req.token = bearerToken;
//     // Next middleware
//     next();
//   } else {
//     // Forbidden
//     res.sendStatus(403);
//   }
// }

const port = process.env.PORT || config.port;

// server connection
app.listen(port, () => console.log(`Listening on port ${port}`));
