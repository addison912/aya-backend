const Shop = require("../Models/Shop"),
  axios = require("axios"),
  mongodb = require("mongodb"),
  path = require("path"),
  fs = require("fs"),
  config = require("../config/config");

module.exports = {
  index: (req, res) => {
    console.log("updating inventory");
    axios
      .get(`https://connect.squareup.com/v2/catalog/list?types=ITEM%2CIMAGE`, {
        headers: {
          Authorization: `Bearer ${config.square}`,
          "Content-Type": "application/json",
          "Square-Version": "2020-06-25",
        },
      })
      .then((updatedCatalog) => {
        try {
          if (!!updatedCatalog.data && !!updatedCatalog.data.objects) {
            let items = updatedCatalog.data.objects.filter(
              (item) =>
                item.type == "ITEM" &&
                item.is_deleted == false &&
                item.item_data.ecom_visibility == "VISIBLE"
            );

            let images = updatedCatalog.data.objects.filter(
              (image) => image.type == "IMAGE" && image.is_deleted == false
            );
            items.forEach((item) => (item.photos = []));
            images.forEach((image) => {
              if (
                items.indexOf(
                  items.find((item) => {
                    return image.id == item.image_id;
                  })
                ) > -1
              ) {
                console.log(true);
                items
                  .find((item) => {
                    return image.id == item.image_id;
                  })
                  .photos.push(image.image_data);
              }
            });
            res.status(200).json(items);
          } else {
            if (err) {
              res.status(500).json("unable to get shop items from Square");
              return;
            }
          }
        } catch (err) {
          res.status(500).json("unable to get shop items from Square");
          return;
        }
      })
      .catch((err) => {
        res.status(500).json(err);
        console.log(err);
      });
  },
};
