const mongoose = require("mongoose");

mongoose.Promise = Promise;

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/aya-backend")
  .then(connection => console.log("Connection established!"))
  .catch(err => console.log("Connection failed!", err));

const Photo = require("./Photo");
const Gallery = require("./Gallery");
const News = require("./News");

module.exports = { Photo, Gallery, News };
