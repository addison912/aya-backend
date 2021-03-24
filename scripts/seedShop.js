const db = require("../Models");

let shop_items = [
  {
    name: "Soiled Zine",
    photos: [
      "http://funky.haus/uploads/photos/Books/Soiled_Book/HandpaintingSoiledBooksWeb-700x700.jpg",
    ],
    description:
      "Soiled is a series which uses food and dirty surfaces to explore the tension between edibility, beauty and disgust.",
    availability: "0",
    order: 1,
  },
  {
    name: "Limited Edition Prints",
    photos: [
      "http://funky.haus/uploads/photos/Travel/Travel/27travel_kilauea.jpg",
    ],
    description:
      "Limited edition archival prints available for selected website images. Email aya@ayabrackett.com for more information",
    order: 2,
  },
];

simpleCreate(db.Shop, shop_items, "shop items");
function simpleCreate(DB, object_list, name) {
  DB.deleteMany({}, (err, objects) => {
    DB.create(object_list, (err, objects) => {
      if (err) {
        return console.log("err", err);
      }
      console.log("deleted all", name);
      console.log("created", objects.length, name);
    });
  });
}
