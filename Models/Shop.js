const mongoose = require("mongoose");
Schema = mongoose.Schema;

const ShopSchema = new Schema({
  name: String,
  photos: Array,
  description: String,
  price: Number,
  availability: String,
});

const Shop = mongoose.model("Shop", ShopSchema);

module.exports = Shop;
