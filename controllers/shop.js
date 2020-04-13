const Shop = require("../Models/Shop");

module.exports = {
  index: (req, res) => {
    Shop.find({}, (err, shop) => {
      if (err) {
        res.status(404).json("unable to get shop items");
        return console.log(err);
      }
      res.status(200).json(shop);
    });
  },
};
