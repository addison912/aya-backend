const mongoose = require("mongoose");
Schema = mongoose.Schema;

const AboutSchema = new Schema({
  bio: String,
  press: Array,
  contact: Array,
  profilePic: String,
  clients: Object
});

const About = mongoose.model("About", AboutSchema);

module.exports = About;
