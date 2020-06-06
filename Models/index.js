const mongoose = require("mongoose"),
  config = require("../config/config");

mongoose.Promise = Promise;

mongoose
  .connect(config.db)
  .then((connection) => console.log("Connection established!"))
  .catch((err) => console.log("Connection failed!", err));

const Photo = require("./Photo");
const Gallery = require("./Gallery");
const News = require("./News");
const User = require("./User");
const Shop = require("./Shop");
const About = require("./About");

module.exports = { Photo, Gallery, News, User, About, Shop };
