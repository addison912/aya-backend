const mongoose = require("mongoose");
Schema = mongoose.Schema;

const GallerySchema = new Schema({
  name: String,
  category: String,
  order: Number,
  photos: Array
});

const Gallery = mongoose.model("Gallery", GallerySchema);

module.exports = Gallery;
