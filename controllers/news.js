const News = require("../Models/News");

module.exports = {
  index: (req, res) => {
    News.find({}, (err, news) => {
      if (err) {
        res.status(404).json("unable to get news feed");
        return console.log(err);
      }
      res.status(200).json(news);
    });
  }
};
