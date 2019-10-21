const mongoose = require("mongoose");
Schema = mongoose.Schema;

const GallerySchema = new Schema({
  name: String,
  category: String,
  order: Array,
  photos: Array
});

const Gallery = mongoose.model("Gallery", GallerySchema);

module.exports = Gallery;
