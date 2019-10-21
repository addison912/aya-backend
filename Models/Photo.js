const mongoose = require("mongoose");
Schema = mongoose.Schema;

const PhotoSchema = new Schema({
  caption: String,
  category: String,
  gallery: String,
  searchTags: Array,
  location: String
});

const Photo = mongoose.model("Photo", PhotoSchema);

module.exports = Photo;
