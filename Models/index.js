const mongoose = require("mongoose");

mongoose.Promise = Promise;

mongoose
  .connect("mongodb://localhost/aya-backend")
  .then(connection => console.log("Connection established!"))
  .catch(err => console.log("Connection failed!", err));

const Photo = require("./Photo");
const Gallery = require("./Gallery");

module.exports = { Photo, Gallery };
