const mongoose = require("mongoose");
Schema = mongoose.Schema;

const PhotoSchema = new Schema({
  caption: String,
  gallery: String,
  searchTags: Array,
  url: String
});

const Photo = mongoose.model("Photo", PhotoSchema);

module.exports = Photo;
