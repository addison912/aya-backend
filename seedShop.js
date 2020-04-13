const db = require("./Models");

let shop_items = [
  {
    name: "Limited Edition Prints",
    photos: [
      "http://funky.haus/uploads/photos/Still_Life/Soiled/HandpaintingSoiledBooksWeb-700x700.jpg",
    ],
    description:
      "Limited edition archival prints available for selected website images. Email aya@ayabrackett.com for more information",
    availability: "0",
  },
  {
    name: "Limited Edition Prints",
    photos: [
      "http://funky.haus/uploads/photos/Still_Life/Soiled/HandpaintingSoiledBooksWeb-700x700.jpg",
    ],
    description:
      "Limited edition archival prints available for selected website images. Email aya@ayabrackett.com for more information",
    availability: "sold out",
  },
  {
    name: "Limited Edition Prints",
    photos: [
      "http://funky.haus/uploads/photos/Still_Life/Soiled/HandpaintingSoiledBooksWeb-700x700.jpg",
    ],
    description:
      "Limited edition archival prints available for selected website images. Email aya@ayabrackett.com for more information",
    availability: "sold out",
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
