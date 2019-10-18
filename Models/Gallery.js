const mongoose = require("mongoose");
Schema = mongoose.Schema;

const GallerySchema = new Schema({
  name: String,
  category: String,
  pics: Array
});

const Gallery = mongoose.model("Gallery", GallerySchema);

module.exports = Gallery;
