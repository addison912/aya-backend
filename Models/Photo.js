const mongoose = require("mongoose");
Schema = mongoose.Schema;

const PhotoSchema = new Schema({
  caption: String,
  category: String,
  gallery: String,
  searchTags: String,
  location: String,
  order: Number,
});

const Photo = mongoose.model("Photo", PhotoSchema);

module.exports = Photo;
