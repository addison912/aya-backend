const mongoose = require("mongoose");
Schema = mongoose.Schema;

const NewsSchema = new Schema({
  title: String,
  date: String,
  timestamp: Number,
  text: String,
  photos: [
    {
      caption: String,
      location: String,
      link: String,
      order: Number
    }
  ]
});

const News = mongoose.model("News", NewsSchema);

module.exports = News;
