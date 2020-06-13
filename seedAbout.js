const db = require("./Models");

const about = [
  {
    bio:
      "Aya Brackett was born and raised in a traditionally built Japanese house in Nevada City, CA and is now based in Oakland, CA. She grew up with two wood stoves, a generator for electricity and a long dirt road. Aya received a Magna Cum Laude dual B.A. in Visual Arts and East Asian Studies from Brown University, and also studied photography at Rhode Island School of Design and the California College of the Arts. She worked for four years as a photo editor at Dwell Magazine where she contributed her own photography and styled food and props for many shoots. Her love of food and design informs her photography and fuels a constant search for the unusual and inspiring.",
    press:
      '<ul><li><a href="https://pdnonline.com/gear/lighting-techniques/photographers-bringing-life-still-lifes/">4 Forward-Thinking Food Photographers</a>, PDN, 2017</li><li><a href="https://www.jamesbeard.org/blog/2015-james-beard-award-winners">James Beard Award</a> for “Bitter” Ten Speed Press, 2015</li><li>1st Place, <a href="https://www.pdntaste.com/pastwinners/winners/PDNTaste/353">Taste Photo Contest</a>, PDN, 2014</li><li>American Photography Annual, 2007, 2011, 2012, and 2014</li><li>30 Top Photographers, PDN, 2008</li></ul>',
    contact:
      '<ul><li>aya@ayabrackett.com</li><li>(510) 292-5719</li><li><a href="https://www.instagram.com/ayabrackett/">@ayabrackett</a></li></ul>',
    clients: [
      {
        name: "EDITORIAL",
        clients: [
          "Anthology",
          "Afar",
          "Bon Appetit",
          "Brutus/Casa Brutus",
          "Budget Travel",
          "Cherry Bombe",
          "Diner’s Journal",
          "Dossier",
          "Dwell",
          "Elle & Elle å Table",
          "Gastronomica",
          "Martha Stewart",
          "Men’s Health",
          "Metropolis",
          "Monocle",
          "More",
          "New York Times Magazine",
          "O The Oprah Magazine",
          "PDN",
          "Real Simple",
          "San Francisco Magazine",
          "Sunset",
          "Telegraph Sunday Magazine",
          "Travel + Leisure",
          "Vogue Japan / Australia",
          "Wall Street Journal Magazine",
          "World of Interiors",
        ],
      },
      {
        name: "ADVERTISING",
        clients: [
          "Apple",
          "Airbnb",
          "Chez Panisse",
          "Dosa Clothing",
          "Equal Exchange",
          "Fairmont Hotels",
          "Landscape Products",
          "Method",
          "Moderntwist",
          "Nest Labs Inc",
          "Orange Chef",
          "Rintaro Restaurant",
          "Ritz Carlton",
          "Quince Restaurant",
          "Sightglass Coffee",
          "Slanted Door Restaurant",
          "Slow Food USA",
          "Small Trade Company",
          "Susan/Grocery Store",
          "Urban Research Clothing",
        ],
      },
      {
        name: "PUBLISHERS",
        clients: [
          "Artisan Books",
          "American Express Publishing",
          "Chelsea Green Publishing",
          "Clarkson Potter",
          "Gestalten",
          "Gibbs Smith Publishing",
          "Harry Abrams Inc.",
          "Houghton Mifflin Harcourt",
          "Rodale Publishing",
          "Taunton Press",
          "Ten Speed Press",
        ],
      },
    ],
  },
];

simpleCreate(db.About, about, "about");
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
