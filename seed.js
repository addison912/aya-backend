const db = require("./models");

let photos = [
  {
    location: "Scribe-500x700.jpg",
    caption: "Scribe",
    category: "Portraits",
    gallery: "Portraits",
    searchTags: []
  },
  {
    location: "AyaBrackettTTurner-500x700.jpg",
    caption: "Tiffanie Turner",
    category: "Portraits",
    gallery: "Portraits",
    searchTags: []
  },
  {
    location: "Quince-775x554.jpg",
    caption: "Quince Restaurant Team",
    category: "Portraits",
    gallery: "Portraits",
    searchTags: []
  },
  {
    location: "06Portrait_AliceWaters.jpg",
    caption: "Alice Waters",
    category: "Portraits",
    gallery: "Portraits",
    searchTags: []
  },
  {
    location: "BrackettChabonWaldman.jpg",
    caption: "Michael Chabon & Ayelet Waldman",
    category: "Portraits",
    gallery: "Portraits",
    searchTags: []
  },
  {
    location: "AyaBrackettAmyTan.jpg",
    caption: "Amy Tan",
    category: "Portraits",
    gallery: "Portraits",
    searchTags: []
  },
  {
    location: "DeborahMadison.jpg",
    caption: "Deborah Madison",
    category: "Portraits",
    gallery: "Portraits",
    searchTags: []
  },
  {
    location: "ThomasMacnaughton1.jpg",
    caption: "Thomas McNaughton and Kona",
    category: "Portraits",
    gallery: "Portraits",
    searchTags: []
  },
  {
    location: "01portrait_alexis.jpg",
    caption: "Alexis",
    category: "Portraits",
    gallery: "Portraits",
    searchTags: []
  },
  {
    location: "02portrait_amy.jpg",
    caption: "Amy",
    category: "Portraits",
    gallery: "Portraits",
    searchTags: []
  },
  {
    location: "03portrait_yuriko.jpg",
    caption: "Yuriko",
    category: "Portraits",
    gallery: "Portraits",
    searchTags: []
  },
  {
    location: "James.jpg",
    caption: "James",
    category: "Portraits",
    gallery: "Portraits",
    searchTags: []
  },
  {
    location: "04portrait_charlesphan.jpg",
    caption: "Charles Phan",
    category: "Portraits",
    gallery: "Portraits",
    searchTags: []
  },
  {
    location: "05Portrait_AnnHamilton.jpg",
    caption: "Ann Hamilton",
    category: "Portraits",
    gallery: "Portraits",
    searchTags: []
  },
  {
    location: "07portrait_anyafernald.jpg",
    caption: "Anya Fernald",
    category: "Portraits",
    gallery: "Portraits",
    searchTags: []
  },
  {
    location: "10Portrait_Isabel-509x700.jpg",
    caption: "Isabel Allende",
    category: "Portraits",
    gallery: "Portraits",
    searchTags: []
  },
  {
    location: "08portrait_armisteadmaupin.jpg",
    caption: "Armistead Maupin",
    category: "Portraits",
    gallery: "Portraits",
    searchTags: []
  },
  {
    location: "09Portrait_Lauren.jpg",
    caption: "Lauren",
    category: "Portraits",
    gallery: "Portraits",
    searchTags: []
  },
  {
    location: "11portrait_paris.jpg",
    caption: "Paris",
    category: "Portraits",
    gallery: "Portraits",
    searchTags: []
  },
  {
    location: "12Portrait_JoannaNewsom.jpg",
    caption: "Joanna Newsom",
    category: "Portraits",
    gallery: "Portraits",
    searchTags: []
  },
  {
    location: "13Portrait_IsabelAllende.jpg",
    caption: "Isabel Allende and Willie Gordon",
    category: "Portraits",
    gallery: "Portraits",
    searchTags: []
  },
  {
    location: "KaruizawaSpring.jpg",
    caption: "Karuizawa",
    category: "Portraits",
    gallery: "Portraits",
    searchTags: []
  },
  {
    location: "15portrait_denna.jpg",
    caption: "Denna",
    category: "Portraits",
    gallery: "Portraits",
    searchTags: []
  },
  {
    location: "16portrait_floragrubb.jpg",
    caption: "Flora Grubb",
    category: "Portraits",
    gallery: "Portraits",
    searchTags: []
  },
  {
    location: "18portrait_andadamayi.jpg",
    caption: "Anandamayi",
    category: "Portraits",
    gallery: "Portraits",
    searchTags: []
  },
  {
    location: "19portrait_melissa.jpg",
    caption: "Melissa",
    category: "Portraits",
    gallery: "Portraits",
    searchTags: []
  },
  {
    location: "20portrait_christine.jpg",
    caption: "Christine",
    category: "Portraits",
    gallery: "Portraits",
    searchTags: []
  },
  {
    location: "21portrait_len.jpg",
    caption: "Len",
    category: "Portraits",
    gallery: "Portraits",
    searchTags: []
  },
  {
    location: "22Portrait_Obachan.jpg",
    caption: "Obachan",
    category: "Portraits",
    gallery: "Portraits",
    searchTags: []
  },
  {
    location: "23portrait_sylviaweinstock.jpg",
    caption: "Sylvia Weinstock",
    category: "Portraits",
    gallery: "Portraits",
    searchTags: []
  },
  {
    location: "24portrait_patderby.jpg",
    caption: "Pat Derby",
    category: "Portraits",
    gallery: "Portraits",
    searchTags: []
  },
  {
    location: "Quince_BeetLollipop-509x700.jpg",
    caption: "Quince Beet Lollipop",
    category: "Still Life",
    gallery: "General",
    searchTags: []
  },
  {
    location: "HibiscusDye-500x700.jpg",
    caption: "Hibiscus Dye",
    category: "Still Life",
    gallery: "General",
    searchTags: []
  },
  {
    location: "SteamRosePrinting-775x554.jpg",
    caption: "Rose Steam Printing",
    category: "Still Life",
    gallery: "General",
    searchTags: []
  },
  {
    location: "cochinealDye.jpg",
    caption: "Cochineal Dye",
    category: "Still Life",
    gallery: "General",
    searchTags: []
  },
  {
    location: "IndigoDye-775x554.jpg",
    caption: "Indigo Dye",
    category: "Still Life",
    gallery: "General",
    searchTags: []
  },
  {
    location: "PerfumeIngredients_2-500x700.jpg",
    caption: "Perfume Ingredients",
    category: "Still Life",
    gallery: "General",
    searchTags: []
  },
  {
    location: "MSLFroYo.jpg",
    caption: "Frozen Yogurt",
    category: "Still Life",
    gallery: "General",
    searchTags: []
  },
  {
    location: "MSLSundae1.jpg",
    caption: "Ice Cream Sundae",
    category: "Still Life",
    gallery: "General",
    searchTags: []
  },
  {
    location: "09stilllifegen_driesvannotencake2.jpg",
    caption: "Dries Van Noten Cake",
    category: "Still Life",
    gallery: "General",
    searchTags: []
  },
  {
    location: "02stilllifegen_chard.jpg",
    caption: "Chard",
    category: "Still Life",
    gallery: "General",
    searchTags: []
  },
  {
    location: "03stilllifegen_fall.jpg",
    caption: "Fall",
    category: "Still Life",
    gallery: "General",
    searchTags: []
  },
  {
    location: "LuckyPeachShrimp.jpg",
    caption: "Lucky Peach Shrimp",
    category: "Still Life",
    gallery: "General",
    searchTags: []
  },
  {
    location: "01stilllifegen_a_menu.jpg",
    caption: "A Menu",
    category: "Still Life",
    gallery: "General",
    searchTags: []
  },
  {
    location: "05stilllifegen_robert.jpg",
    caption: "Robert",
    category: "Still Life",
    gallery: "General",
    searchTags: []
  },
  {
    location: "07stilllifegen_madeline.jpg",
    caption: "Madeline",
    category: "Still Life",
    gallery: "General",
    searchTags: []
  },
  {
    location: "08stilllifegen_alicesquilt.jpg",
    caption: "Alice's Quilt",
    category: "Still Life",
    gallery: "General",
    searchTags: []
  },
  {
    location: "10stilllifegen_biche.jpg",
    caption: "Brittany Breakfast",
    category: "Still Life",
    gallery: "General",
    searchTags: []
  },
  {
    location: "11stilllifegen_parissink.jpg",
    caption: "Paris Sink",
    category: "Still Life",
    gallery: "General",
    searchTags: []
  },
  {
    location: "12stilllifegen_tokyoteabreakfast.jpg",
    caption: "Tokyo Tea Breakfast",
    category: "Still Life",
    gallery: "General",
    searchTags: []
  },
  {
    location: "13stilllifegen_pasta.jpg",
    caption: "Pasta",
    category: "Still Life",
    gallery: "General",
    searchTags: []
  },
  {
    location: "14stilllifegen_odaicho.jpg",
    caption: "Odaicho: Grandma's cakes",
    category: "Still Life",
    gallery: "General",
    searchTags: []
  },
  {
    location: "15stilllifegen_profiteroles.jpg",
    caption: "Profiteroles",
    category: "Still Life",
    gallery: "General",
    searchTags: []
  },
  {
    location: "16stilllifegen_soup.jpg",
    caption: "East Hampton Soup",
    category: "Still Life",
    gallery: "General",
    searchTags: []
  },
  {
    location: "18stilllifegen_cherries.jpg",
    caption: "Cherries",
    category: "Still Life",
    gallery: "General",
    searchTags: []
  },
  {
    location: "19stilllifegen_mie.jpg",
    caption: "Mie",
    category: "Still Life",
    gallery: "General",
    searchTags: []
  },
  {
    location: "20stilllifegen_brittanyseaside.jpg",
    caption: "Brittany Seaside",
    category: "Still Life",
    gallery: "General",
    searchTags: []
  },
  {
    location: "21stilllifegen_eggs.jpg",
    caption: "Eggs",
    category: "Still Life",
    gallery: "General",
    searchTags: []
  },
  {
    location: "23stilllifegen_noodles.jpg",
    caption: "Noodles",
    category: "Still Life",
    gallery: "General",
    searchTags: []
  },
  {
    location: "24stilllifegen_scribegrapes.jpg",
    caption: "Scribe Winery Grapes",
    category: "Still Life",
    gallery: "General",
    searchTags: []
  },
  {
    location: "25stilllifegen_paperpassionfruit.jpg",
    caption: "Paper Passion Fruit",
    category: "Still Life",
    gallery: "General",
    searchTags: []
  },
  {
    location: "27stilllifegen_poppies.jpg",
    caption: "Poppies",
    category: "Still Life",
    gallery: "General",
    searchTags: []
  },
  {
    location: "28stilllifegen_nesteggs.jpg",
    caption: "Nest Eggs",
    category: "Still Life",
    gallery: "General",
    searchTags: []
  },
  {
    location: "29stilllifegen_sugarflowers.jpg",
    caption: "Sugar Flowers",
    category: "Still Life",
    gallery: "General",
    searchTags: []
  },
  {
    location: "32stilllifegen_winetasting.jpg",
    caption: "Winetasting",
    category: "Still Life",
    gallery: "General",
    searchTags: []
  },
  {
    location: "30stilllifegen_breakfasttray.jpg",
    caption: "Breakfast Tray",
    category: "Still Life",
    gallery: "General",
    searchTags: []
  },
  {
    location: "SoiledStatementweb-504x700.jpg",
    caption: "Soiled Series Artist Statement",
    category: "Still Life",
    gallery: "Soiled",
    searchTags: []
  },
  {
    location: "AyaBrackettStrawberriesAlgae.jpg",
    caption: "Strawberries & Algae",
    category: "Still Life",
    gallery: "Soiled",
    searchTags: []
  },
  {
    location: "AyaBrackettPetalsEggs.jpg",
    caption: "Petals & Eggs",
    category: "Still Life",
    gallery: "Soiled",
    searchTags: []
  },
  {
    location: "AyaBrackettStreetPomegranates.jpg",
    caption: "Street Pomegranates",
    category: "Still Life",
    gallery: "Soiled",
    searchTags: []
  },
  {
    location: "AyaBrackettJellyDesserts.jpg",
    caption: "Jelly Desserts",
    category: "Still Life",
    gallery: "Soiled",
    searchTags: []
  },
  {
    location: "AyaBrackettBeachPicnic.jpg",
    caption: "Beach Picnic",
    category: "Still Life",
    gallery: "Soiled",
    searchTags: []
  },
  {
    location: "AyaBrackettPeachesAsh.jpg",
    caption: "Peaches & Ash",
    category: "Still Life",
    gallery: "Soiled",
    searchTags: []
  },
  {
    location: "AyaBrackettChocolateBowls.jpg",
    caption: "Licked Chocolate Bowls",
    category: "Still Life",
    gallery: "Soiled",
    searchTags: []
  },
  {
    location: "AyaBrackettFungus.jpg",
    caption: "Fungus",
    category: "Still Life",
    gallery: "Soiled",
    searchTags: []
  },
  {
    location: "AyaBrackettOnigiriWood.jpg",
    caption: "Onigiri & Wood",
    category: "Still Life",
    gallery: "Soiled",
    searchTags: []
  },
  {
    location: "AyaBrackettSesameSawdust.jpg",
    caption: "Sesame & Sawdust",
    category: "Still Life",
    gallery: "Soiled",
    searchTags: []
  },
  {
    location: "AyaBrackettSawhorsesBread.jpg",
    caption: "Sawhorses & Bread",
    category: "Still Life",
    gallery: "Soiled",
    searchTags: []
  },
  {
    location: "AyaBrackettMackerelMalakoff.jpg",
    caption: "Mackerel & Malakoff",
    category: "Still Life",
    gallery: "Soiled",
    searchTags: []
  },
  {
    location: "AyaBrackettKetchup.jpg",
    caption: "Ketchup",
    category: "Still Life",
    gallery: "Soiled",
    searchTags: []
  },
  {
    location: "AyaBrackettPreservesOven.jpg",
    caption: "June Taylor Preserves & Oven",
    category: "Still Life",
    gallery: "Soiled",
    searchTags: []
  },
  {
    location: "AyaBrackettVegetablesAsh.jpg",
    caption: "Vegetables & Ash",
    category: "Still Life",
    gallery: "Soiled",
    searchTags: []
  },
  {
    location: "AyaBrackettPatesDesFruits.jpg",
    caption: "Pâtes de Fruits",
    category: "Still Life",
    gallery: "Soiled",
    searchTags: []
  },
  {
    location: "AyaBrackettApricotPlumPreserves.jpg",
    caption: "June Taylor Apricot & Plum Preserves",
    category: "Still Life",
    gallery: "Soiled",
    searchTags: []
  },
  {
    location: "AyaBrackettFirepitVegetables.jpg",
    caption: "Firepit Vegetables",
    category: "Still Life",
    gallery: "Soiled",
    searchTags: []
  },
  {
    location: "SoiledBookWeb1-775x553.jpg",
    caption: "Hand Painted Soiled Series Books",
    category: "Still Life",
    gallery: "Soiled",
    searchTags: []
  },
  {
    location: "SoiledBookWeb2-2-775x553.jpg",
    caption: "Soiled Book",
    category: "Still Life",
    gallery: "Soiled",
    searchTags: []
  },
  {
    location: "SoiledBookWeb3-775x553.jpg",
    caption: "Soiled Book",
    category: "Still Life",
    gallery: "Soiled",
    searchTags: []
  },
  {
    location: "SoiledBookWeb4-775x553.jpg",
    caption: "Soiled Book",
    category: "Still Life",
    gallery: "Soiled",
    searchTags: []
  },
  {
    location: "SoiledBookWeb6-775x553.jpg",
    caption: "Soiled Book",
    category: "Still Life",
    gallery: "Soiled",
    searchTags: []
  },
  {
    location: "SoiledBookWeb7-775x553.jpg",
    caption: "Soiled Book Signed Edition of 500",
    category: "Still Life",
    gallery: "Soiled",
    searchTags: []
  },
  {
    location: "SoiledShowInstalWeb1-775x553.jpg",
    caption: "Tokyo Exhibition Installation",
    category: "Still Life",
    gallery: "Soiled",
    searchTags: []
  },
  {
    location: "SoiledShowInstalWeb2-553x700.jpg",
    caption: "Tokyo Exhibition Installation",
    category: "Still Life",
    gallery: "Soiled",
    searchTags: []
  },
  {
    location: "HandpaintingSoiledBooksWeb-700x700.jpg",
    caption: "Hand Painted Soiled Books with Natural Food Dyes",
    category: "Still Life",
    gallery: "Soiled",
    searchTags: []
  },
  {
    location: "NaturalDyeBookmark-553x700.jpg",
    caption: "Food Dyes Used to Paint Soiled Books",
    category: "Still Life",
    gallery: "Soiled",
    searchTags: []
  },
  {
    location: "AyaBrackett_PaperDahlias-500x700.jpg",
    caption: "Paper Dahlias",
    category: "Still Life",
    gallery: "Paper Flowers",
    searchTags: []
  },
  {
    location: "AyaBrackett_PaperCosmos-499x700.jpg",
    caption: "Paper Cosmos",
    category: "Still Life",
    gallery: "Paper Flowers",
    searchTags: []
  },
  {
    location: "AyaBrackett_PaperBigPeony-500x700.jpg",
    caption: "Giant Paper Peony",
    category: "Still Life",
    gallery: "Paper Flowers",
    searchTags: []
  },
  {
    location: "AyaBrackett_PaperMarigoldsBox-500x700.jpg",
    caption: "Paper Marigolds",
    category: "Still Life",
    gallery: "Paper Flowers",
    searchTags: []
  },
  {
    location: "AyaBrackett_PaperMarigolds-500x700.jpg",
    caption: "Paper Marigold Garlands",
    category: "Still Life",
    gallery: "Paper Flowers",
    searchTags: []
  },
  {
    location: "AyaBrackett_PaperPeonies-500x700.jpg",
    caption: "Paper Decomposed Peonies",
    category: "Still Life",
    gallery: "Paper Flowers",
    searchTags: []
  },
  {
    location: "AyaBrackett_DutchArrangement-775x554.jpg",
    caption: "Paper Still Life",
    category: "Still Life",
    gallery: "Paper Flowers",
    searchTags: []
  },
  {
    location: "AyaBrackett_PaperChocCosmos-1-500x700.jpg",
    caption: "Paper Chocolate Cosmos",
    category: "Still Life",
    gallery: "Paper Flowers",
    searchTags: []
  },
  {
    location: "AyaBrackett_PaperBlueRose-500x700.jpg",
    caption: "Paper Blue Rose",
    category: "Still Life",
    gallery: "Paper Flowers",
    searchTags: []
  },
  {
    location: "AyaBrackett_PaperRoses-500x700.jpg",
    caption: "Paper Iceberg Rose",
    category: "Still Life",
    gallery: "Paper Flowers",
    searchTags: []
  },
  {
    location: "AyaBrackett_PaperWhites-775x553.jpg",
    caption: "Paper Whites",
    category: "Still Life",
    gallery: "Paper Flowers",
    searchTags: []
  },
  {
    location: "AyaBrackett_PaperDeadFlwrs-500x700.jpg",
    caption: "Paper Dead Flowers",
    category: "Still Life",
    gallery: "Paper Flowers",
    searchTags: []
  },
  {
    location: "AyaBrackett_TreePeonies-775x554.jpg",
    caption: "Paper California Tree Poppies",
    category: "Still Life",
    gallery: "Paper Flowers",
    searchTags: []
  },
  {
    location: "AyaBrackett_PaperPaintPetals-500x700.jpg",
    caption: "Paper Painted Petals",
    category: "Still Life",
    gallery: "Paper Flowers",
    searchTags: []
  },
  {
    location: "AyaBrackett_PaperLeaves-775x554.jpg",
    caption: "Paper Leaves",
    category: "Still Life",
    gallery: "Paper Flowers",
    searchTags: []
  },
  {
    location: "AyaBrackett_PaperSupplies-2-500x700.jpg",
    caption: "Paper Flower Materials",
    category: "Still Life",
    gallery: "Paper Flowers",
    searchTags: []
  },
  {
    location: "01slowfood_lemonmeringuepie.jpg",
    caption: "Tartine Lemon Meringue Pie",
    category: "Still Life",
    gallery: "Slow Food",
    searchTags: []
  },
  {
    location: "03slowfood_chezpanissetart.jpg",
    caption: "Chez Panisse Tart",
    category: "Still Life",
    gallery: "Slow Food",
    searchTags: []
  },
  {
    location: "04slowfood_chezpanissedessert.jpg",
    caption: "Chez Panisse",
    category: "Still Life",
    gallery: "Slow Food",
    searchTags: []
  },
  {
    location: "05slowfood_fennelfish.jpg",
    caption: "Fennel & Fish",
    category: "Still Life",
    gallery: "Slow Food",
    searchTags: []
  },
  {
    location: "06slowfood_cisternobreakfast.jpg",
    caption: "Cisterno Breakfast",
    category: "Still Life",
    gallery: "Slow Food",
    searchTags: []
  },
  {
    location: "07slowfood_quince.jpg",
    caption: "Quince",
    category: "Still Life",
    gallery: "Slow Food",
    searchTags: []
  },
  {
    location: "08slowfood_chezpanisse.jpg",
    caption: "Chez Panisse",
    category: "Still Life",
    gallery: "Slow Food",
    searchTags: []
  },
  {
    location: "09slowfood_eaudevie.jpg",
    caption: "Eau de Vie",
    category: "Still Life",
    gallery: "Slow Food",
    searchTags: []
  },
  {
    location: "10slowfood_tangerines.jpg",
    caption: "Tangerines",
    category: "Still Life",
    gallery: "Slow Food",
    searchTags: []
  },
  {
    location: "11slowfood_flambe.jpg",
    caption: "Flambe",
    category: "Still Life",
    gallery: "Slow Food",
    searchTags: []
  },
  {
    location: "12slowfood_happyhour.jpg",
    caption: "Happy Hour",
    category: "Still Life",
    gallery: "Slow Food",
    searchTags: []
  },
  {
    location: "13slowfood_julytomatoes.jpg",
    caption: "July Tomatoes",
    category: "Still Life",
    gallery: "Slow Food",
    searchTags: []
  },
  {
    location: "14slowfood_clayoven.jpg",
    caption: "Clay Oven",
    category: "Still Life",
    gallery: "Slow Food",
    searchTags: []
  },
  {
    location: "15slowfood_naganodeerhunt.jpg",
    caption: "Nagano Deerhunt",
    category: "Still Life",
    gallery: "Slow Food",
    searchTags: []
  },
  {
    location: "16slowfood_naganosoba.jpg",
    caption: "Nagano Soba",
    category: "Still Life",
    gallery: "Slow Food",
    searchTags: []
  },
  {
    location: "17slowfood_naganomushrooms.jpg",
    caption: "Nagano Mushrooms",
    category: "Still Life",
    gallery: "Slow Food",
    searchTags: []
  },
  {
    location: "18slowfood_sakura.jpg",
    caption: "Sakura",
    category: "Still Life",
    gallery: "Slow Food",
    searchTags: []
  },
  {
    location: "19slowfood_gourdrice.jpg",
    caption: "Gourd Rice",
    category: "Still Life",
    gallery: "Slow Food",
    searchTags: []
  },
  {
    location: "20slowfood_japanesenewyear.jpg",
    caption: "Japanese New Year",
    category: "Still Life",
    gallery: "Slow Food",
    searchTags: []
  },
  {
    location: "21slowfood_whiteheart.jpg",
    caption: "Untitled",
    category: "Still Life",
    gallery: "Slow Food",
    searchTags: []
  },
  {
    location: "22slowfood_tostadas.jpg",
    caption: "Tostadas",
    category: "Still Life",
    gallery: "Slow Food",
    searchTags: []
  },
  {
    location: "23slowfood_preserves.jpg",
    caption: "Preserves",
    category: "Still Life",
    gallery: "Slow Food",
    searchTags: []
  },
  {
    location: "24slowfood_junetaylorjam.jpg",
    caption: "June Taylor Jam",
    category: "Still Life",
    gallery: "Slow Food",
    searchTags: []
  },
  {
    location: "25slowfood_ritzcarlton.jpg",
    caption: "Ritz Carlton",
    category: "Still Life",
    gallery: "Slow Food",
    searchTags: []
  },
  {
    location: "26slowfood_matsumotopeach.jpg",
    caption: "Matsumoto Peach",
    category: "Still Life",
    gallery: "Slow Food",
    searchTags: []
  },
  {
    location: "27slowfood_newyearsmochi.jpg",
    caption: "New Years Mochi",
    category: "Still Life",
    gallery: "Slow Food",
    searchTags: []
  },
  {
    location: "28slowfood_iciicecream.jpg",
    caption: "Ici Ice Cream",
    category: "Still Life",
    gallery: "Slow Food",
    searchTags: []
  },
  {
    location: "29slowfood_jagaimo.jpg",
    caption: "Japanese Potatoes",
    category: "Still Life",
    gallery: "Slow Food",
    searchTags: []
  },
  {
    location: "30slowfood_tokyojagaimo.jpg",
    caption: "Tokyo Jagaimo",
    category: "Still Life",
    gallery: "Slow Food",
    searchTags: []
  },
  {
    location: "01btwnmeals_helenesmeal.jpg",
    caption: "Helene's Meal",
    category: "Still Life",
    gallery: "Between Meals",
    searchTags: []
  },
  {
    location: "02btwnmeals_letterdesk.jpg",
    caption: "Letterdesk",
    category: "Still Life",
    gallery: "Between Meals",
    searchTags: []
  },
  {
    location: "03btwnmeals_tokyobreakfast.jpg",
    caption: "Tokyo Breakfast",
    category: "Still Life",
    gallery: "Between Meals",
    searchTags: []
  },
  {
    location: "04btwnmeals_thanksgiving.jpg",
    caption: "Thanksgiving",
    category: "Still Life",
    gallery: "Between Meals",
    searchTags: []
  },
  {
    location: "05btwnmeals_januaryapples.jpg",
    caption: "January Apples",
    category: "Still Life",
    gallery: "Between Meals",
    searchTags: []
  },
  {
    location: "06btwnmeals_decembergrapes.jpg",
    caption: "December Grapes",
    category: "Still Life",
    gallery: "Between Meals",
    searchTags: []
  },
  {
    location: "07btwnmeals_montmorencywood.jpg",
    caption: "Montmorency & Wood",
    category: "Still Life",
    gallery: "Between Meals",
    searchTags: []
  },
  {
    location: "08btwnmeals_problemsolving.jpg",
    caption: "Problem Solving",
    category: "Still Life",
    gallery: "Between Meals",
    searchTags: []
  },
  {
    location: "09btwnmeals_petaluma.jpg",
    caption: "Petaluma",
    category: "Still Life",
    gallery: "Between Meals",
    searchTags: []
  },
  {
    location: "10btwnmeals_currantcake.jpg",
    caption: "Currant Cake",
    category: "Still Life",
    gallery: "Between Meals",
    searchTags: []
  },
  {
    location: "11btwnmeals_well_water.jpg",
    caption: "Well Water",
    category: "Still Life",
    gallery: "Between Meals",
    searchTags: []
  },
  {
    location: "12btwnmeals_jeromeslunch.jpg",
    caption: "Jerome's Lunch",
    category: "Still Life",
    gallery: "Between Meals",
    searchTags: []
  },
  {
    location: "13btwnmeals_lifecycle.jpg",
    caption: "Lifecycle",
    category: "Still Life",
    gallery: "Between Meals",
    searchTags: []
  },
  {
    location: "14btwnmeals_conversation.jpg",
    caption: "Conversation",
    category: "Still Life",
    gallery: "Between Meals",
    searchTags: []
  },
  {
    location: "15btwnmeals_sitastea.jpg",
    caption: "Sita's Tea",
    category: "Still Life",
    gallery: "Between Meals",
    searchTags: []
  },
  {
    location: "16btwnmeals_tasks.jpg",
    caption: "Tasks",
    category: "Still Life",
    gallery: "Between Meals",
    searchTags: []
  },
  {
    location: "17btwnmeals_5pm.jpg",
    caption: "5pm",
    category: "Still Life",
    gallery: "Between Meals",
    searchTags: []
  },
  {
    location: "18btwnmeals_3pm.jpg",
    caption: "3pm",
    category: "Still Life",
    gallery: "Between Meals",
    searchTags: []
  },
  {
    location: "19btwnmeals_sarlat.jpg",
    caption: "Sarlat",
    category: "Still Life",
    gallery: "Between Meals",
    searchTags: []
  },
  {
    location: "20btwnmeals_recycling.jpg",
    caption: "Recycling",
    category: "Still Life",
    gallery: "Between Meals",
    searchTags: []
  },
  {
    location: "21btwnmeals_steel_cut.jpg",
    caption: "Steel Cut",
    category: "Still Life",
    gallery: "Between Meals",
    searchTags: []
  },
  {
    location: "22btwnmeals_zucchini.jpg",
    caption: "Zucchini",
    category: "Still Life",
    gallery: "Between Meals",
    searchTags: []
  },
  {
    location: "23btwnmeals_foiegrasbreakfast.jpg",
    caption: "Foie Gras Breakfast",
    category: "Still Life",
    gallery: "Between Meals",
    searchTags: []
  },
  {
    location: "24btwnmeals_muffinandmango.jpg",
    caption: "Muffin and Mango",
    category: "Still Life",
    gallery: "Between Meals",
    searchTags: []
  },
  {
    location: "Paris-775x553.jpg",
    caption: "Le Marais, Paris",
    category: "Travel",
    gallery: "Travel",
    searchTags: []
  },
  {
    location: "PatisserieBags-500x700.jpg",
    caption: "Paris Boulangerie Bags",
    category: "Travel",
    gallery: "Travel",
    searchTags: []
  },
  {
    location: "01travel_bagnovignoni.jpg",
    caption: "Bagno Vignoni, Italy",
    category: "Travel",
    gallery: "Travel",
    searchTags: []
  },
  {
    location: "02travel_tuscanpicnic.jpg",
    caption: "Tuscan Picnic, Italy",
    category: "Travel",
    gallery: "Travel",
    searchTags: []
  },
  {
    location: "03travel_roccadorcia.jpg",
    caption: "Rocca D'Orcia, Italy",
    category: "Travel",
    gallery: "Travel",
    searchTags: []
  },
  {
    location: "04travel_tuscanplums.jpg",
    caption: "Tuscan Plums, Italy",
    category: "Travel",
    gallery: "Travel",
    searchTags: []
  },
  {
    location: "05travel_moltacino.jpg",
    caption: "Montalcino, Italy",
    category: "Travel",
    gallery: "Travel",
    searchTags: []
  },
  {
    location: "06travel_bagno.jpg",
    caption: "Bagno, Tuscany",
    category: "Travel",
    gallery: "Travel",
    searchTags: []
  },
  {
    location: "07travel_cappella_di_vitaleta.jpg",
    caption: "Cappella di Vitaleta, Italy",
    category: "Travel",
    gallery: "Travel",
    searchTags: []
  },
  {
    location: "08travel_stpetersvatican.jpg",
    caption: "St. Peters Vatican, Italy",
    category: "Travel",
    gallery: "Travel",
    searchTags: []
  },
  {
    location: "09travel_romeespresso.jpg",
    caption: "Rome, Italy",
    category: "Travel",
    gallery: "Travel",
    searchTags: []
  },
  {
    location: "10travel_stpeters.jpg",
    caption: "Tiber River, Italy",
    category: "Travel",
    gallery: "Travel",
    searchTags: []
  },
  {
    location: "11travel_ruerivoli.jpg",
    caption: "Rue Rivoli, France",
    category: "Travel",
    gallery: "Travel",
    searchTags: []
  },
  {
    location: "14Opener_MontreuilMacarons.jpg",
    caption: "Montreuil Macarons, France",
    category: "Travel",
    gallery: "Travel",
    searchTags: []
  },
  {
    location: "12travel_montmarte.jpg",
    caption: "Montmartre, France",
    category: "Travel",
    gallery: "Travel",
    searchTags: []
  },
  {
    location: "13travel_souvenir.jpg",
    caption: "Souvenir, France",
    category: "Travel",
    gallery: "Travel",
    searchTags: []
  },
  {
    location: "14travel_louvretrees.jpg",
    caption: "Tuileries, France",
    category: "Travel",
    gallery: "Travel",
    searchTags: []
  },
  {
    location: "15travel_lesezyiesdetayac.jpg",
    caption: "Les Ezyies De Tayac, France",
    category: "Travel",
    gallery: "Travel",
    searchTags: []
  },
  {
    location: "16travel_lascaux.jpg",
    caption: "Lascaux, France",
    category: "Travel",
    gallery: "Travel",
    searchTags: []
  },
  {
    location: "17travel_dordogne.jpg",
    caption: "Dordogne, France",
    category: "Travel",
    gallery: "Travel",
    searchTags: []
  },
  {
    location: "18travel_kyoto.jpg",
    caption: "Kyoto, Japan",
    category: "Travel",
    gallery: "Travel",
    searchTags: []
  },
  {
    location: "19travel_catscradle.jpg",
    caption: "Cats Cradle, Japan",
    category: "Travel",
    gallery: "Travel",
    searchTags: []
  },
  {
    location: "20travel_izakaya.jpg",
    caption: "Izakaya, Japan",
    category: "Travel",
    gallery: "Travel",
    searchTags: []
  },
  {
    location: "21travel_deer.jpg",
    caption: "Deer, Japan",
    category: "Travel",
    gallery: "Travel",
    searchTags: []
  },
  {
    location: "22travel_openharvest.jpg",
    caption: "Open Harvest, Japan",
    category: "Travel",
    gallery: "Travel",
    searchTags: []
  },
  {
    location: "23travel_osaka.jpg",
    caption: "Osaka, Japan",
    category: "Travel",
    gallery: "Travel",
    searchTags: []
  },
  {
    location: "24travel_sakai.jpg",
    caption: "Sakai, Japan",
    category: "Travel",
    gallery: "Travel",
    searchTags: []
  },
  {
    location: "25travel_harajuku.jpg",
    caption: "Harajuku, Japan",
    category: "Travel",
    gallery: "Travel",
    searchTags: []
  },
  {
    location: "26travel_hilo.jpg",
    caption: "Hilo, Hawaii",
    category: "Travel",
    gallery: "Travel",
    searchTags: []
  },
  {
    location: "27travel_kilauea.jpg",
    caption: "Kilauea, Hawaii",
    category: "Travel",
    gallery: "Travel",
    searchTags: []
  },
  {
    location: "28travel_scribe.jpg",
    caption: "Scribe Winery, California",
    category: "Travel",
    gallery: "Travel",
    searchTags: []
  },
  {
    location: "29travel_pacific.jpg",
    caption: "Pacific, California",
    category: "Travel",
    gallery: "Travel",
    searchTags: []
  },
  {
    location: "30travel_switzerland.jpg",
    caption: "Switzerland",
    category: "Travel",
    gallery: "Travel",
    searchTags: []
  },
  {
    location: "31travel_springcreek.jpg",
    caption: "Spring Creek, California",
    category: "Travel",
    gallery: "Travel",
    searchTags: []
  },
  {
    location: "32travel_tahoe.jpg",
    caption: "Tahoe, California",
    category: "Travel",
    gallery: "Travel",
    searchTags: []
  },
  {
    location: "33travel_sierra.jpg",
    caption: "Sierra, California",
    category: "Travel",
    gallery: "Travel",
    searchTags: []
  },
  {
    location: "34travel_lodi.jpg",
    caption: "Lodi Elephant Sanctuary, California",
    category: "Travel",
    gallery: "Travel",
    searchTags: []
  },
  {
    location: "AyaBrackett_MSL_Holiday_1-775x468.jpg",
    caption: "Martha Stewart Living",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "AyaBrackett_MSL_Holiday_3-775x468.jpg",
    caption: "Martha Stewart Living",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "AyaBrackett_MSL_Holiday_2-775x468.jpg",
    caption: "Martha Stewart Living",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "AyaBrackett_MSL_Holiday_4-1-775x468.jpg",
    caption: "Martha Stewart Living",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "PDN-775x542.jpg",
    caption: "Photo District News",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "2016MandyAftelNYT_TS1-1-581x700.jpg",
    caption: "New York Times T Magazine",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "2016MandyAftelNYT_TS2-775x488.jpg",
    caption: "New York Times T Magazine",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "2016MandyAftelNYT_TS3-775x488.jpg",
    caption: "New York Times T Magazine",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "AyaBrackettBHG_1-2-775x522.jpg",
    caption: "Better Homes & Gardens",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "AyaBrackettBHG_2-775x522.jpg",
    caption: "Better Homes & Gardens",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "AyaBrackettBHG_3-775x522.jpg",
    caption: "Better Homes & Gardens",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "AyaBrackettBHG_4-775x522.jpg",
    caption: "Better Homes & Gardens",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "BonAppetit_Sept20151-775x527.jpg",
    caption: "Bon Appetit",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "BonAppetit_Sept2015_2-775x527.jpg",
    caption: "Bon Appetit",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "BonAppetit_Sept2015_3-775x527.jpg",
    caption: "Bon Appetit",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "LuckyPeach1.jpg",
    caption: "Lucky Peach",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "LuckyPeach2.jpg",
    caption: "Lucky Peach",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "LuckyPeach3.jpg",
    caption: "Lucky Peach",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "AnthologyStory1.jpg",
    caption: "Anthology",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "AnthologyStory2.jpg",
    caption: "Anthology",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "AyaBrackettSaveurTear.jpg",
    caption: "Saveur Magazine",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "TearsheetsSunsetPekoPeko1.jpg",
    caption: "Sunset",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "TearsheetsSunsetPekoPeko2.jpg",
    caption: "Sunset",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "TearsheetsSunsetPekoPeko3.jpg",
    caption: "Sunset",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "TearsheetsSunsetDebMadison1.jpg",
    caption: "Sunset",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "TearsheetsSunsetDebMadison3.jpg",
    caption: "Sunset",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "TearsheetsSunsetDebMadison2.jpg",
    caption: "Sunset",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "AyaBrackettFreakyFlora1.jpg",
    caption: "Sunset",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "AyaBrackettFreakyFlora2.jpg",
    caption: "Sunset",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "AyaBrackettStoneFruit1.jpg",
    caption: "Sunset",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "AyaBrackettStoneFruit2.jpg",
    caption: "Sunset",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "AyaBrackettStoneFruit3.jpg",
    caption: "Sunset",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "01_tearsheets_bt.jpg",
    caption: "Budget Travel",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "02_tearsheets_enroute.jpg",
    caption: "EnRoute Air France",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "04_tearsheets_sunset1.jpg",
    caption: "Sunset",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "05_tearsheets_ecocolo1.jpg",
    caption: "Ecocolo",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "06_tearsheets_ecocolo2.jpg",
    caption: "Ecocolo",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "07_tearsheets_ecocolo3.jpg",
    caption: "Ecocolo",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "08_tearsheetswoi.jpg",
    caption: "World Of Interiors",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "09_tearsheets_woi2.jpg",
    caption: "World of Interiors",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "10_tearsheets_rs1.jpg",
    caption: "Real Simple",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "11a_tearsheets_rs3.jpg",
    caption: "Real Simple",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "11b_tearsheets_rs4.jpg",
    caption: "Real Simple",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "2013TelegraphIsabelAllende.jpg",
    caption: "Telegraph Sunday Magazine",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "13_tearsheets_nytmcf.jpg",
    caption: "New York Times Magazine",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "14_tearsheets_nyt2.jpg",
    caption: "New York Times Magazine",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "15_tearsheets_sunset3.jpg",
    caption: "Sunset",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "16_tearsheets_travesias.jpg",
    caption: "Travesias",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "17_tearsheets_oprah1.jpg",
    caption: "Oprah",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "18_tearsheets_oprah2.jpg",
    caption: "Oprah",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "12_Tearsheets_SFMagAnya_.jpg",
    caption: "San Francisco Magazine",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "19_tearsheets_dinersjrnl.jpg",
    caption: "Diners Journal",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "20_tearsheets_ms1.jpg",
    caption: "Martha Stewart Living",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "21_tearsheets_ms3.jpg",
    caption: "Martha Stewart Living",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "22_tearsheets_ms2.jpg",
    caption: "Martha Stewart Living",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "23_tearsheets_gastronomica1.jpg",
    caption: "Gastronomica",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "24_tearsheets_gastronomica2.jpg",
    caption: "Gastronomica",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "25_tearsheets_gastronomica3.jpg",
    caption: "Gastronomica",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "26_tearsheets_anthology1.jpg",
    caption: "Anthology",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "27_tearsheets_anthology2-775x700.jpg",
    caption: "Anthology",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "28_tearsheets_bodysoul.jpg",
    caption: "Body Soul",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "29_tearsheets_more.jpg",
    caption: "More",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "30_tearsheets_more2.jpg",
    caption: "More",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "31_tearsheets_bonappetit1.jpg",
    caption: "Bon Appetit",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "32_tearsheets_bonappetit2.jpg",
    caption: "Bon Appetit",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "33_tearsheets_bonappetit3.jpg",
    caption: "Bon Appetit",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "34_tearsheets_sfmag.jpg",
    caption: "San Francisco Magazine",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "35_tearsheets_afar.jpg",
    caption: "Afar",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "35b_tearsheets_bonappetit4.jpg",
    caption: "Bon Appetit",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "36b_tearsheets_money.jpg",
    caption: "Money",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "37a_tearsheets_cntrylvg.jpg",
    caption: "Country Living",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "37b_tearsheets_cntrylvg2.jpg",
    caption: "Country Living",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "38_tearsheets_sunset2.jpg",
    caption: "Sunset",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "39_tearsheets_ms4.jpg",
    caption: "Martha Stewart Living",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "39b_tearsheets_nytla.jpg",
    caption: "New York Times Magazine",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "40_tearsheets_nytcocktails.jpg",
    caption: "New York Times Magazine",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "43_tearsheets_kunel2.jpg",
    caption: "Ku:nel",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "44_tearsheets_dwell2.jpg",
    caption: "Dwell",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "45_tearsheets_dwell.jpg",
    caption: "Dwell",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "46_tearsheets_dossier.jpg",
    caption: "Dossier",
    category: "Tearsheets",
    gallery: "Tear sheets",
    searchTags: []
  },
  {
    location: "01covertearsheets_sunset.jpg",
    caption: "Sunset",
    category: "Tearsheets",
    gallery: "Covers",
    searchTags: []
  },
  {
    location: "02covertearsheets_ecocolo.jpg",
    caption: "Ecocolo",
    category: "Tearsheets",
    gallery: "Covers",
    searchTags: []
  },
  {
    location: "03covertearsheets_tl.jpg",
    caption: "Travel + Leisure",
    category: "Tearsheets",
    gallery: "Covers",
    searchTags: []
  },
  {
    location: "04covertearsheets_btdordogne.jpg",
    caption: "Budget Travel",
    category: "Tearsheets",
    gallery: "Covers",
    searchTags: []
  },
  {
    location: "05covertearsheets_sfmagramen.jpg",
    caption: "San Francisco Magazine",
    category: "Tearsheets",
    gallery: "Covers",
    searchTags: []
  },
  {
    location: "06covertearsheets_kunel1-586x700.jpg",
    caption: "Ku:nel",
    category: "Tearsheets",
    gallery: "Covers",
    searchTags: []
  },
  {
    location: "07covertearsheets_btitaly.jpg",
    caption: "Budget Travel",
    category: "Tearsheets",
    gallery: "Covers",
    searchTags: []
  },
  {
    location: "1__Bittman_HTCE_Cover-1-622x700.jpg",
    caption: "How to Cook Everything: Houghton Mifflin Harcourt",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "1_Bittman_HTCE-775x436.jpg",
    caption: "How to Cook Everything: Houghton Mifflin Harcourt",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "2_Bittman_HTCE-775x436.jpg",
    caption: "How to Cook Everything: Houghton Mifflin Harcourt",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "3_Bittman_HTCE-775x436.jpg",
    caption: "How to Cook Everything: Houghton Mifflin Harcourt",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "26_Bittman_HTCE-775x436.jpg",
    caption: "How to Cook Everything: Houghton Mifflin Harcourt",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "10_Bittman_HTCE-775x436.jpg",
    caption: "How to Cook Everything: Houghton Mifflin Harcourt",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "13_Bittman_HTCE-775x436.jpg",
    caption: "How to Cook Everything: Houghton Mifflin Harcourt",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "18_Bittman_HTCE-775x436.jpg",
    caption: "How to Cook Everything: Houghton Mifflin Harcourt",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "24_Bittman_HTCE-775x436.jpg",
    caption: "How to Cook Everything: Houghton Mifflin Harcourt",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "11_Bittman_HTCE-775x436.jpg",
    caption: "How to Cook Everything: Houghton Mifflin Harcourt",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "4_Bittman_HTCE-775x436.jpg",
    caption: "How to Cook Everything: Houghton Mifflin Harcourt",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "14_Bittman_HTCE-775x436.jpg",
    caption: "How to Cook Everything: Houghton Mifflin Harcourt",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "5_Bittman_HTCE-775x436.jpg",
    caption: "How to Cook Everything: Houghton Mifflin Harcourt",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "12_Bittman_HTCE-775x436.jpg",
    caption: "How to Cook Everything: Houghton Mifflin Harcourt",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "6_Bittman_HTCE-775x436.jpg",
    caption: "How to Cook Everything: Houghton Mifflin Harcourt",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "7_Bittman_HTCE-775x436.jpg",
    caption: "How to Cook Everything: Houghton Mifflin Harcourt",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "16_Bittman_HTCE-775x436.jpg",
    caption: "How to Cook Everything: Houghton Mifflin Harcourt",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "25_Bittman_HTCE-775x436.jpg",
    caption: "How to Cook Everything: Houghton Mifflin Harcourt",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "1_BittmanDFE_Cover-1-598x700.jpg",
    caption: "",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "Bittman_1_Fettucini-775x466.jpg",
    caption: "Dinner For Everyone: Clarkson Potter",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "Bittman_3_frenchtoast-775x461.jpg",
    caption: "Dinner For Everyone: Clarkson Potter",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "Bittman_4_gnocchi-775x467.jpg",
    caption: "Dinner For Everyone: Clarkson Potter",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "Bittman_5_Parmigiana-775x459.jpg",
    caption: "Dinner For Everyone: Clarkson Potter",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "Bittman_6_Trout-775x456.jpg",
    caption: "Dinner For Everyone: Clarkson Potter",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "Bittman_7_Tandoori-775x462.jpg",
    caption: "Dinner For Everyone: Clarkson Potter",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "Bittman_8_Chowder-775x465.jpg",
    caption: "Dinner For Everyone: Clarkson Potter",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "Bittman_10_JerkChicken-775x458.jpg",
    caption: "Dinner For Everyone: Clarkson Potter",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "Bittman_9_risotto-775x465.jpg",
    caption: "Dinner For Everyone: Clarkson Potter",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "Bittman_11_Lomein-775x464.jpg",
    caption: "Dinner For Everyone: Clarkson Potter",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "Bittman_12_Salmon-775x462.jpg",
    caption: "Dinner For Everyone: Clarkson Potter",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "Bittman_13_Eggplant-775x457.jpg",
    caption: "Dinner For Everyone: Clarkson Potter",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "NewlywedTable-508x700.jpg",
    caption: "Newlywed Table : Artisan Publishing",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "Brackett-2019NewlwedCookbook_1-775x534.jpg",
    caption: "Newlywed Table : Artisan Publishing",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "Brackett-2019NewlwedCookbook_3-775x534.jpg",
    caption: "Newlywed Table : Artisan Publishing",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "Brackett-2019NewlwedCookbook_6-775x534.jpg",
    caption: "Newlywed Table : Artisan Publishing",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "Brackett-2019NewlwedCookbook_7-775x534.jpg",
    caption: "Newlywed Table : Artisan Publishing",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "Brackett-2019NewlwedCookbook_10-775x534.jpg",
    caption: "Newlywed Table : Artisan Publishing",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "Brackett-2019NewlwedCookbook_9-775x534.jpg",
    caption: "Newlywed Table : Artisan Publishing",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "Brackett-2019NewlwedCookbook_13-775x534.jpg",
    caption: "Newlywed Table : Artisan Publishing",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "Brackett-2019NewlwedCookbook_14-775x534.jpg",
    caption: "Newlywed Table : Artisan Publishing",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "Brackett-2019NewlwedCookbook_8-775x534.jpg",
    caption: "Newlywed Table : Artisan Publishing",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "Brackett-2019NewlwedCookbook_11-775x534.jpg",
    caption: "Newlywed Table : Artisan Publishing",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "Brackett-2019NewlwedCookbook_12-775x534.jpg",
    caption: "Newlywed Table : Artisan Publishing",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "Brackett-2019NewlwedCookbook_16-775x534.jpg",
    caption: "Newlywed Table : Artisan Publishing",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "Brackett-2019NewlwedCookbook_17-775x534.jpg",
    caption: "Newlywed Table : Artisan Publishing",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "AyaBrackett_PaperFlwr_Cover-563x700.jpg",
    caption: "The Fine Art of Paper Flowers: Ten Speed/Watson Guptill",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "AyaBrackett_PaperFlwr_2-775x484.jpg",
    caption: "The Fine Art of Paper Flowers: Ten Speed/Watson Guptill",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "AyaBrackett_PaperFlwr_1-775x484.jpg",
    caption: "The Fine Art of Paper Flowers: Ten Speed/Watson Guptill",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "AyaBrackett_PaperFlwr_8-775x484.jpg",
    caption: "The Fine Art of Paper Flowers: Ten Speed/Watson Guptill",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "AyaBrackett_PaperFlwr_3-775x484.jpg",
    caption: "The Fine Art of Paper Flowers: Ten Speed/Watson Guptill",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "AyaBrackett_PaperFlwr_4-775x484.jpg",
    caption: "The Fine Art of Paper Flowers: Ten Speed/Watson Guptill",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "AyaBrackett_PaperFlwr_5-775x484.jpg",
    caption: "The Fine Art of Paper Flowers: Ten Speed/Watson Guptill",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "AyaBrackett_PaperFlwr_9-775x484.jpg",
    caption: "The Fine Art of Paper Flowers: Ten Speed/Watson Guptill",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "AyaBrackett_PaperFlwr_6-775x484.jpg",
    caption: "The Fine Art of Paper Flowers: Ten Speed/Watson Guptill",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "AyaBrackett_PaperFlwr_12-775x484.jpg",
    caption: "The Fine Art of Paper Flowers: Ten Speed/Watson Guptill",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "AyaBrackett_PaperFlwr_7-775x484.jpg",
    caption: "The Fine Art of Paper Flowers: Ten Speed/Watson Guptill",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "AyaBrackett_PaperFlwr_13-775x484.jpg",
    caption: "The Fine Art of Paper Flowers: Ten Speed/Watson Guptill",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "AyaBrackett_PaperFlwr_11-775x484.jpg",
    caption: "The Fine Art of Paper Flowers: Ten Speed/Watson Guptill",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "AyaBrackett_PaperFlwr_10-775x484.jpg",
    caption: "The Fine Art of Paper Flowers: Ten Speed/Watson Guptill",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "AyaBrackett_PaperFlwr_14-775x484.jpg",
    caption: "The Fine Art of Paper Flowers: Ten Speed/Watson Guptill",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "AyaBrackett_NatColor_1-529x700.jpg",
    caption: "Natural Color : Ten Speed Press/ WatsonGuptill",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "AyaBrackett_NatColor_2-775x517.jpg",
    caption: "Natural Color : Ten Speed Press/ WatsonGuptill",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "AyaBrackett_NatColor_3-775x517.jpg",
    caption: "Natural Color : Ten Speed Press/ WatsonGuptill",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "AyaBrackett_NatColor_4-775x517.jpg",
    caption: "Natural Color : Ten Speed Press/ WatsonGuptill",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "AyaBrackett_NatColor_5-775x517.jpg",
    caption: "Natural Color : Ten Speed Press/ WatsonGuptill",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "AyaBrackett_NatColor_6-775x517.jpg",
    caption: "Natural Color : Ten Speed Press/ WatsonGuptill",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "AyaBrackett_NatColor_7-1-775x517.jpg",
    caption: "Natural Color : Ten Speed Press/ WatsonGuptill",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "AyaBrackett_NatColor_8-775x517.jpg",
    caption: "Natural Color : Ten Speed Press/ WatsonGuptill",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "AyaBrackett_NatColor_9-775x517.jpg",
    caption: "Natural Color : Ten Speed Press/ WatsonGuptill",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "AyaBrackett_NatColor_10-775x517.jpg",
    caption: "Natural Color : Ten Speed Press/ WatsonGuptill",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "AyaBrackett_NatColor_11-775x517.jpg",
    caption: "Natural Color : Ten Speed Press/ WatsonGuptill",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "AyaBrackett_NatColor_12-775x517.jpg",
    caption: "Natural Color : Ten Speed Press/ WatsonGuptill",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "AyaBrackett_NatColor_13-775x517.jpg",
    caption: "Natural Color : Ten Speed Press/ WatsonGuptill",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "AyaBrackettBitterJBA1-775x700.jpg",
    caption: "Bitter : Ten Speed press",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "BitterBook_Page_Radicchio.jpg",
    caption: "Bitter : Ten Speed press",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "BitterBookCitrus.jpg",
    caption: "Bitter : Ten Speed press",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "BitterBookCrdoon.jpg",
    caption: "Bitter : Ten Speed press",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "BitterBook_PageCocoa.jpg",
    caption: "Bitter : Ten Speed press",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "BitterBookQuail.jpg",
    caption: "Bitter : Ten Speed press",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "BitterBook_Aspara.jpg",
    caption: "Bitter : Ten Speed press",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "BitterBookDessert.jpg",
    caption: "Bitter : Ten Speed press",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "SoiledBookWeb1-775x553.jpg",
    caption: "Hand Painted Soiled Series Books",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "SoiledBookWeb2-2-775x553.jpg",
    caption: "Soiled Book",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "SoiledBookWeb6-775x553.jpg",
    caption: "Soiled Book",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "SoiledBookWeb5-775x553.jpg",
    caption: "",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "SoiledBookWeb4-775x553.jpg",
    caption: "Soiled Book",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "SoiledBookWeb3-775x553.jpg",
    caption: "Soiled Book",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "SoiledBookWeb7-775x553.jpg",
    caption: "Soiled Book Signed Edition of 500",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "HandpaintingSoiledBooksWeb-700x700.jpg",
    caption: "Hand Painted Soiled Books with Natural Food Dyes",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "NaturalDyeBookmark-553x700.jpg",
    caption: "Food Dyes Used to Paint Soiled Books",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "01_book_kibo.jpg",
    caption: "Kibo Cookbook: Ten Speed Press",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "02_book_kibo.jpg",
    caption: "Kibo Cookbook: Ten Speed Press",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "03_book_kibo.jpg",
    caption: "Kibo Cookbook: Ten Speed Press",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "04_book_chezpanisse.jpg",
    caption: "Chez Panisse 40th Anniversary Book: Clarkson Potter",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "05_book_chezpanisse.jpg",
    caption: "Chez Panisse 40th Anniversary Book: Clarkson Potter",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "05a_coccobook.jpg",
    caption: "Welcome Cocco: Babjiji Publishing",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "05aa_bookcoccomay-775x700.jpg",
    caption: "Welcome Cocco: Babjiji Publishing",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "05b_bbookcoccoapril.jpg",
    caption: "Welcome Cocco: Babjiji Publishing",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "05c_bbookcoccoaug1-775x700.png",
    caption: "Welcome Cocco: Babjiji Publishing",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "05cc_bbookcoccoaug1-775x700.png",
    caption: "Welcome Cocco: Babjiji Publishing",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "05d_bbookcoccoaug2-775x700.png",
    caption: "Welcome Cocco: Babjiji Publishing",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "05e_bookcoccoaug6-775x700.jpg",
    caption: "Welcome Cocco: Babjiji Publishing",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "05ed_bookcoccomay-775x700.png",
    caption: "Welcome Cocco: Babjiji Publishing",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "05f_bookcoccoaug-775x700.png",
    caption: "Welcome Cocco: Babjiji Publishing",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "05g_bookcoccosep-775x700.png",
    caption: "Welcome Cocco: Babjiji Publishing",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "05h_bookcoccojune-775x700.jpg",
    caption: "Welcome Cocco: Babjiji Publishing",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "13_book_tl.jpg",
    caption: "Travel + Leisure Trips: American Express Publishing",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "14_book_tl-775x700.jpg",
    caption: "Travel + Leisure Trips: American Express Publishing",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "Book.jpg",
    caption: "Come to the Table: Rodale Press",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "16_book_japbookcover.jpg",
    caption: "Building the Japanese House Today: Harry Abrams Inc.",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "17_book_japbook.jpg",
    caption: "Building the Japanese House Today: Harry Abrams Inc.",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "18_book_japbook.jpg",
    caption: "Building the Japanese House Today: Harry Abrams Inc.",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "19_book_japanesebathbook.jpg",
    caption: "Japanese Bath Book: Gibbs Smith Press",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "20_book_slowfoodcover.jpg",
    caption: "Slow Food Guide San Francisco: Chelsea Green Publishing",
    category: "Books",
    gallery: "Books",
    searchTags: []
  },
  {
    location: "NestAdManTable.jpg",
    caption: "Nest",
    category: "Advertising",
    gallery: "Nest",
    searchTags: []
  },
  {
    location: "AyaBrackettNestLifestyle.jpg",
    caption: "Nest",
    category: "Advertising",
    gallery: "Nest",
    searchTags: []
  },
  {
    location: "NestAdGirl.jpg",
    caption: "Nest",
    category: "Advertising",
    gallery: "Nest",
    searchTags: []
  },
  {
    location: "AyaBrackettNestLifestyleToast1.jpg",
    caption: "Nest",
    category: "Advertising",
    gallery: "Nest",
    searchTags: []
  },
  {
    location: "AyaBrackettNestLifestyleBaby.jpg",
    caption: "Nest",
    category: "Advertising",
    gallery: "Nest",
    searchTags: []
  },
  {
    location: "ad01nestbox_copy.jpg",
    caption: "Nest",
    category: "Advertising",
    gallery: "Nest",
    searchTags: []
  },
  {
    location: "ad02nestcouch_copy.jpg",
    caption: "Nest",
    category: "Advertising",
    gallery: "Nest",
    searchTags: []
  },
  {
    location: "nest-welcome-guide.jpg",
    caption: "Nest",
    category: "Advertising",
    gallery: "Nest",
    searchTags: []
  },
  {
    location: "AD02aabNest_Fall.jpg",
    caption: "Nest",
    category: "Advertising",
    gallery: "Nest",
    searchTags: []
  },
  {
    location: "AyaBrackettNestLifestyleMobile1.jpg",
    caption: "Nest",
    category: "Advertising",
    gallery: "Nest",
    searchTags: []
  },
  {
    location: "ad03nest_oranges_copy.jpg",
    caption: "Nest",
    category: "Advertising",
    gallery: "Nest",
    searchTags: []
  },
  {
    location: "ad04nest_stairs_copy.jpg",
    caption: "Nest",
    category: "Advertising",
    gallery: "Nest",
    searchTags: []
  },
  {
    location: "ad06nest_lvgcouch_copy.jpg",
    caption: "Nest",
    category: "Advertising",
    gallery: "Nest",
    searchTags: []
  },
  {
    location: "ad07nest_kitchengirlman_copy.jpg",
    caption: "Nest",
    category: "Advertising",
    gallery: "Nest",
    searchTags: []
  },
  {
    location: "ad08nest_kitchen_copy.jpg",
    caption: "Nest",
    category: "Advertising",
    gallery: "Nest",
    searchTags: []
  },
  {
    location: "ad05nest_lvrrmtoys_copy.jpg",
    caption: "Nest",
    category: "Advertising",
    gallery: "Nest",
    searchTags: []
  },
  {
    location: "NestAdNight.jpg",
    caption: "Nest",
    category: "Advertising",
    gallery: "Nest",
    searchTags: []
  },
  {
    location: "NestAdBooks.jpg",
    caption: "Nest",
    category: "Advertising",
    gallery: "Nest",
    searchTags: []
  },
  {
    location: "NestAdChair.jpg",
    caption: "Nest",
    category: "Advertising",
    gallery: "Nest",
    searchTags: []
  },
  {
    location: "NestAdDayBdrm.jpg",
    caption: "Nest",
    category: "Advertising",
    gallery: "Nest",
    searchTags: []
  },
  {
    location: "NestAdDngRm.jpg",
    caption: "Nest",
    category: "Advertising",
    gallery: "Nest",
    searchTags: []
  },
  {
    location: "NestAdDresser.jpg",
    caption: "Nest",
    category: "Advertising",
    gallery: "Nest",
    searchTags: []
  },
  {
    location: "NestAdJump.jpg",
    caption: "Nest",
    category: "Advertising",
    gallery: "Nest",
    searchTags: []
  },
  {
    location: "1QuinceCaviar-775x484.jpg",
    caption: "",
    category: "Advertising",
    gallery: "Quince Restaurant",
    searchTags: []
  },
  {
    location: "2QuinceOyster-775x484.jpg",
    caption: "Quince",
    category: "Advertising",
    gallery: "Quince Restaurant",
    searchTags: []
  },
  {
    location: "3QuinceStrawberry-775x485.jpg",
    caption: "Quince",
    category: "Advertising",
    gallery: "Quince Restaurant",
    searchTags: []
  },
  {
    location: "4QuincePastaRollingPins-775x436.jpg",
    caption: "Quince",
    category: "Advertising",
    gallery: "Quince Restaurant",
    searchTags: []
  },
  {
    location: "5QuinceTable-775x485.jpg",
    caption: "Quince",
    category: "Advertising",
    gallery: "Quince Restaurant",
    searchTags: []
  },
  {
    location: "6QuinceTablesQuid-775x485.jpg",
    caption: "Quince",
    category: "Advertising",
    gallery: "Quince Restaurant",
    searchTags: []
  },
  {
    location: "7QuinceChefUni-775x485.jpg",
    caption: "Quince",
    category: "Advertising",
    gallery: "Quince Restaurant",
    searchTags: []
  },
  {
    location: "8QuinceFarmVeg-775x484.jpg",
    caption: "Quince",
    category: "Advertising",
    gallery: "Quince Restaurant",
    searchTags: []
  },
  {
    location: "9QuinceFarmer-775x484.jpg",
    caption: "Quince",
    category: "Advertising",
    gallery: "Quince Restaurant",
    searchTags: []
  },
  {
    location: "10QuinceFarmChefs-775x485.jpg",
    caption: "Quince",
    category: "Advertising",
    gallery: "Quince Restaurant",
    searchTags: []
  },
  {
    location: "11QuinceBar_Pasta-775x485.jpg",
    caption: "Quince",
    category: "Advertising",
    gallery: "Quince Restaurant",
    searchTags: []
  },
  {
    location: "12QuinceTeam-775x484.jpg",
    caption: "Quince",
    category: "Advertising",
    gallery: "Quince Restaurant",
    searchTags: []
  },
  {
    location: "13QuinceKItchen-775x485.jpg",
    caption: "Quince",
    category: "Advertising",
    gallery: "Quince Restaurant",
    searchTags: []
  },
  {
    location: "14QuinceRoom-775x484.jpg",
    caption: "Quince",
    category: "Advertising",
    gallery: "Quince Restaurant",
    searchTags: []
  },
  {
    location: "15QuincePRDine-775x484.jpg",
    caption: "Quince",
    category: "Advertising",
    gallery: "Quince Restaurant",
    searchTags: []
  },
  {
    location: "16QuinceSign-775x484.jpg",
    caption: "Quince",
    category: "Advertising",
    gallery: "Quince Restaurant",
    searchTags: []
  },
  {
    location: "SightglassChair-775x353.jpg",
    caption: "Sightglass Coffee",
    category: "Advertising",
    gallery: "Sightglass Coffee",
    searchTags: []
  },
  {
    location: "SightglassStove-775x353.jpg",
    caption: "Sightglass Coffee",
    category: "Advertising",
    gallery: "Sightglass Coffee",
    searchTags: []
  },
  {
    location: "SightglassNewspaper-775x353.jpg",
    caption: "Sightglass Coffee",
    category: "Advertising",
    gallery: "Sightglass Coffee",
    searchTags: []
  },
  {
    location: "SightglassLogo-1-775x353.jpg",
    caption: "Sightglass Coffee",
    category: "Advertising",
    gallery: "Sightglass Coffee",
    searchTags: []
  },
  {
    location: "AyaBrackettNanit1-1-775x560.jpg",
    caption: "Nanit",
    category: "Advertising",
    gallery: "Nanit",
    searchTags: []
  },
  {
    location: "AyaBrackettNanit2-775x560.jpg",
    caption: "Nanit",
    category: "Advertising",
    gallery: "Nanit",
    searchTags: []
  },
  {
    location: "AyaBrackettNanit3-775x560.jpg",
    caption: "Nanit",
    category: "Advertising",
    gallery: "Nanit",
    searchTags: []
  },
  {
    location: "AyaBrackettNanit4-1-775x560.jpg",
    caption: "Nanit",
    category: "Advertising",
    gallery: "Nanit",
    searchTags: []
  },
  {
    location: "AyaBrackettPurpleCarrot1_srgb-775x700.jpg",
    caption: "Purple Carrot with Mark Bittman",
    category: "Advertising",
    gallery: "Purple Carrot",
    searchTags: []
  },
  {
    location: "AyaBrackettPurpleCarrot2_srgb-775x700.jpg",
    caption: "Purple Carrot with Mark Bittman",
    category: "Advertising",
    gallery: "Purple Carrot",
    searchTags: []
  },
  {
    location: "AyaBrackettPurpleCarrot3_srgb-775x700.jpg",
    caption: "Purple Carrot with Mark Bittman",
    category: "Advertising",
    gallery: "Purple Carrot",
    searchTags: []
  },
  {
    location: "AyaBrackettPurpleCarrot4_srgb-775x700.jpg",
    caption: "Purple Carrot with Mark Bittman",
    category: "Advertising",
    gallery: "Purple Carrot",
    searchTags: []
  },
  {
    location: "AyaBrackettPurpleCarrot5_srgb-775x700.jpg",
    caption: "Purple Carrot with Mark Bittman",
    category: "Advertising",
    gallery: "Purple Carrot",
    searchTags: []
  },
  {
    location: "AyaBrackettPurpleCarrot6_srgb-775x700.jpg",
    caption: "Purple Carrot with Mark Bittman",
    category: "Advertising",
    gallery: "Purple Carrot",
    searchTags: []
  },
  {
    location: "AyaBrackettPurpleCarrot7_srgb-775x700.jpg",
    caption: "Purple Carrot with Mark Bittman",
    category: "Advertising",
    gallery: "Purple Carrot",
    searchTags: []
  },
  {
    location: "AyaBrackettPurpleCarrot8_srgb-775x700.jpg",
    caption: "Purple Carrot with Mark Bittman",
    category: "Advertising",
    gallery: "Purple Carrot",
    searchTags: []
  },
  {
    location: "AyaBrackettPurpleCarrot9_srgb-775x700.jpg",
    caption: "Purple Carrot with Mark Bittman",
    category: "Advertising",
    gallery: "Purple Carrot",
    searchTags: []
  },
  {
    location: "AyaBrackettPurpleCarrots10_rgb-775x700.jpg",
    caption: "Purple Carrot with Mark Bittman",
    category: "Advertising",
    gallery: "Purple Carrot",
    searchTags: []
  },
  {
    location: "AyaBrackettPurpleCarrot11_srgb-775x700.jpg",
    caption: "Purple Carrot with Mark Bittman",
    category: "Advertising",
    gallery: "Purple Carrot",
    searchTags: []
  },
  {
    location: "AyaBrackettPurpleCarrot12_srgb-775x700.jpg",
    caption: "Purple Carrot with Mark Bittman",
    category: "Advertising",
    gallery: "Purple Carrot",
    searchTags: []
  },
  {
    location: "OrangeChefYogurt2-775x500.jpg",
    caption: "Orange Chef",
    category: "Advertising",
    gallery: "Orange Chef",
    searchTags: []
  },
  {
    location: "OrangeChefAvo2-775x583.jpg",
    caption: "Orange Chef",
    category: "Advertising",
    gallery: "Orange Chef",
    searchTags: []
  },
  {
    location: "OrangeChefVM-775x300.jpg",
    caption: "Orange Chef",
    category: "Advertising",
    gallery: "Orange Chef",
    searchTags: []
  },
  {
    location: "OrangeChefVMKt2-775x500.jpg",
    caption: "",
    category: "Advertising",
    gallery: "Orange Chef",
    searchTags: []
  },
  {
    location: "OrangeChefCrockPot-775x300.jpg",
    caption: "Orange Chef",
    category: "Advertising",
    gallery: "Orange Chef",
    searchTags: []
  },
  {
    location: "OrangeChefSalad2-775x500.jpg",
    caption: "Orange Chef",
    category: "Advertising",
    gallery: "Orange Chef",
    searchTags: []
  },
  {
    location: "OrangeChefVCT2.jpg",
    caption: "Orange Chef",
    category: "Advertising",
    gallery: "Orange Chef",
    searchTags: []
  },
  {
    location: "PHone2.jpg",
    caption: "Orange Chef",
    category: "Advertising",
    gallery: "Orange Chef",
    searchTags: []
  },
  {
    location: "PopSlateGroc-775x500.jpg",
    caption: "Pop Slate",
    category: "Advertising",
    gallery: "Pop Slate",
    searchTags: []
  },
  {
    location: "PopSlatecoffee-775x500.jpg",
    caption: "Pop Slate",
    category: "Advertising",
    gallery: "Pop Slate",
    searchTags: []
  },
  {
    location: "PopSlateBag-775x500.jpg",
    caption: "Pop Slate",
    category: "Advertising",
    gallery: "Pop Slate",
    searchTags: []
  },
  {
    location: "PopSlateDesk-775x500.jpg",
    caption: "",
    category: "Advertising",
    gallery: "Pop Slate",
    searchTags: []
  },
  {
    location: "PopSlateAirprt-775x500.jpg",
    caption: "Pop Slate",
    category: "Advertising",
    gallery: "Pop Slate",
    searchTags: []
  },
  {
    location: "PopSlateBar-775x500.jpg",
    caption: "Pop Slate",
    category: "Advertising",
    gallery: "Pop Slate",
    searchTags: []
  },
  {
    location: "PopSlateBlackMulti-775x500.jpg",
    caption: "Pop Slate",
    category: "Advertising",
    gallery: "Pop Slate",
    searchTags: []
  },
  {
    location: "PopSlateBlackduo-775x500.jpg",
    caption: "Pop Slate",
    category: "Advertising",
    gallery: "Pop Slate",
    searchTags: []
  },
  {
    location: "PopSlateWhites-775x500.jpg",
    caption: "Pop Slate",
    category: "Advertising",
    gallery: "Pop Slate",
    searchTags: []
  },
  {
    location: "PopSlateSide-775x500.jpg",
    caption: "Pop Slate",
    category: "Advertising",
    gallery: "Pop Slate",
    searchTags: []
  },
  {
    location: "Coffee.jpg",
    caption: "Equal Exchange",
    category: "Advertising",
    gallery: "Equal Exchange",
    searchTags: []
  },
  {
    location: "Chocolate.jpg",
    caption: "Equal Exchange",
    category: "Advertising",
    gallery: "Equal Exchange",
    searchTags: []
  },
  {
    location: "Tea.jpg",
    caption: "Equal Exchange",
    category: "Advertising",
    gallery: "Equal Exchange",
    searchTags: []
  },
  {
    location: "FairFoods.jpg",
    caption: "Equal Exchange",
    category: "Advertising",
    gallery: "Equal Exchange",
    searchTags: []
  },
  {
    location: "HotChoc.jpg",
    caption: "Equal Exchange",
    category: "Advertising",
    gallery: "Equal Exchange",
    searchTags: []
  },
  {
    location: "IceCoffee.jpg",
    caption: "Equal Exchange",
    category: "Advertising",
    gallery: "Equal Exchange",
    searchTags: []
  },
  {
    location: "MintTea.jpg",
    caption: "Equal Exchange",
    category: "Advertising",
    gallery: "Equal Exchange",
    searchTags: []
  },
  {
    location: "Cookies.jpg",
    caption: "Equal Exchange",
    category: "Advertising",
    gallery: "Equal Exchange",
    searchTags: []
  },
  {
    location: "GranolaBars.jpg",
    caption: "Equal Exchange",
    category: "Advertising",
    gallery: "Equal Exchange",
    searchTags: []
  },
  {
    location: "Brownies.jpg",
    caption: "Equal Exchange",
    category: "Advertising",
    gallery: "Equal Exchange",
    searchTags: []
  },
  {
    location: "AyaBrackettChinJukan.jpg",
    caption: "Chin Jukan Pottery",
    category: "Advertising",
    gallery: "Chin Jukan",
    searchTags: []
  },
  {
    location: "ad01_chinjukan_ume.jpg",
    caption: "Chin Jukan Pottery",
    category: "Advertising",
    gallery: "Chin Jukan",
    searchTags: []
  },
  {
    location: "ad02_chinjukan_white.jpg",
    caption: "Chin Jukan Pottery",
    category: "Advertising",
    gallery: "Chin Jukan",
    searchTags: []
  },
  {
    location: "ad03_chinjukanjpg.jpg",
    caption: "Chin Jukan Pottery",
    category: "Advertising",
    gallery: "Chin Jukan",
    searchTags: []
  },
  {
    location: "ad04_chinjukanjpg.jpg",
    caption: "Chin Jukan Pottery",
    category: "Advertising",
    gallery: "Chin Jukan",
    searchTags: []
  },
  {
    location: "ad05_chinjukanjpg.jpg",
    caption: "Chin Jukan Pottery",
    category: "Advertising",
    gallery: "Chin Jukan",
    searchTags: []
  },
  {
    location: "ad06_chinjukan.jpg",
    caption: "Chin Jukan Pottery",
    category: "Advertising",
    gallery: "Chin Jukan",
    searchTags: []
  },
  {
    location: "ad07_chinjukan.jpg",
    caption: "Chin Jukan Pottery",
    category: "Advertising",
    gallery: "Chin Jukan",
    searchTags: []
  },
  {
    location: "06_Book_URCACover-572x700.jpg",
    caption: "Urban Research Clothing",
    category: "Advertising",
    gallery: "Urban Research Clothing",
    searchTags: []
  },
  {
    location: "07_Book_URCA-775x500.jpg",
    caption: "Urban Research Clothing",
    category: "Advertising",
    gallery: "Urban Research Clothing",
    searchTags: []
  },
  {
    location: "08_Book_URCAL2-775x489.jpg",
    caption: "Urban Research Clothing",
    category: "Advertising",
    gallery: "Urban Research Clothing",
    searchTags: []
  },
  {
    location: "09_Book_URCA-775x494.jpg",
    caption: "Urban Research Clothing",
    category: "Advertising",
    gallery: "Urban Research Clothing",
    searchTags: []
  },
  {
    location: "10_Book_URCA-775x498.jpg",
    caption: "Urban Research Clothing",
    category: "Advertising",
    gallery: "Urban Research Clothing",
    searchTags: []
  },
  {
    location: "11_Book_URCA-775x511.jpg",
    caption: "Urban Research Clothing",
    category: "Advertising",
    gallery: "Urban Research Clothing",
    searchTags: []
  },
  {
    location: "12_Book_URCA-775x487.jpg",
    caption: "Urban Research Clothing",
    category: "Advertising",
    gallery: "Urban Research Clothing",
    searchTags: []
  },
  {
    location: "AD01_Susan1.jpg",
    caption: "Susan / The Grocery Store",
    category: "Advertising",
    gallery: "Susan/ Grocery",
    searchTags: []
  },
  {
    location: "AD02_Susan1.jpg",
    caption: "Susan / The Grocery Store",
    category: "Advertising",
    gallery: "Susan/ Grocery",
    searchTags: []
  },
  {
    location: "AD07_Susan1.jpg",
    caption: "Susan / The Grocery Store",
    category: "Advertising",
    gallery: "Susan/ Grocery",
    searchTags: []
  },
  {
    location: "AD05_Susan1.jpg",
    caption: "Susan / The Grocery Store",
    category: "Advertising",
    gallery: "Susan/ Grocery",
    searchTags: []
  },
  {
    location: "AD06_Susan1.jpg",
    caption: "Susan / The Grocery Store",
    category: "Advertising",
    gallery: "Susan/ Grocery",
    searchTags: []
  },
  {
    location: "AD09_Susan1.jpg",
    caption: "Susan / The Grocery Store",
    category: "Advertising",
    gallery: "Susan/ Grocery",
    searchTags: []
  },
  {
    location: "AD08_Susan1.jpg",
    caption: "Susan / The Grocery Store",
    category: "Advertising",
    gallery: "Susan/ Grocery",
    searchTags: []
  },
  {
    location: "AD10_Susan1.jpg",
    caption: "Susan / The Grocery Store",
    category: "Advertising",
    gallery: "Susan/ Grocery",
    searchTags: []
  },
  {
    location: "AD11_Susan1.jpg",
    caption: "Susan / The Grocery Store",
    category: "Advertising",
    gallery: "Susan/ Grocery",
    searchTags: []
  },
  {
    location: "AD12_Susan1.jpg",
    caption: "Susan / The Grocery Store",
    category: "Advertising",
    gallery: "Susan/ Grocery",
    searchTags: []
  },
  {
    location: "AD13_Susan1.jpg",
    caption: "Susan / The Grocery Store",
    category: "Advertising",
    gallery: "Susan/ Grocery",
    searchTags: []
  },
  {
    location: "AD04_Susan1.jpg",
    caption: "Susan / The Grocery Store",
    category: "Advertising",
    gallery: "Susan/ Grocery",
    searchTags: []
  },
  {
    location: "PekoPeko1.jpg",
    caption: "Peko Peko / Rintaro Restaurant",
    category: "Advertising",
    gallery: "Peko Peko",
    searchTags: []
  },
  {
    location: "PekoPeko2.jpg",
    caption: "Peko Peko / Rintaro Restaurant",
    category: "Advertising",
    gallery: "Peko Peko",
    searchTags: []
  },
  {
    location: "PekoPeko3.jpg",
    caption: "Peko Peko / Rintaro Restaurant",
    category: "Advertising",
    gallery: "Peko Peko",
    searchTags: []
  },
  {
    location: "PekoPeko4.jpg",
    caption: "Peko Peko / Rintaro Restaurant",
    category: "Advertising",
    gallery: "Peko Peko",
    searchTags: []
  },
  {
    location: "Osechi_2013_Posterweb.jpg",
    caption: "Peko Peko / Rintaro Restaurant",
    category: "Advertising",
    gallery: "Peko Peko",
    searchTags: []
  },
  {
    location: "Osechi_2013_PosterPhotos.jpg",
    caption: "Peko Peko / Rintaro Restaurant",
    category: "Advertising",
    gallery: "Peko Peko",
    searchTags: []
  },
  {
    location: "Kanimeshi2013web.jpg",
    caption: "Peko Peko / Rintaro Restaurant",
    category: "Advertising",
    gallery: "Peko Peko",
    searchTags: []
  },
  {
    location: "DuckPosterWeb.jpg",
    caption: "Peko Peko / Rintaro Restaurant",
    category: "Advertising",
    gallery: "Peko Peko",
    searchTags: []
  },
  {
    location: "ad01blogslanteddoor2.png",
    caption: "Slanted Door Restaurant",
    category: "Advertising",
    gallery: "Slanted Door",
    searchTags: []
  },
  {
    location: "ad02blogslanteddoor4.png",
    caption: "Slanted Door Restaurant",
    category: "Advertising",
    gallery: "Slanted Door",
    searchTags: []
  },
  {
    location: "ad03slanteddoor1.jpg",
    caption: "Slanted Door Restaurant",
    category: "Advertising",
    gallery: "Slanted Door",
    searchTags: []
  },
  {
    location: "ad04blogslanteddoor5.png",
    caption: "Slanted Door Restaurant",
    category: "Advertising",
    gallery: "Slanted Door",
    searchTags: []
  },
  {
    location: "ad05blogslanteddoor6.png",
    caption: "Slanted Door Restaurant",
    category: "Advertising",
    gallery: "Slanted Door",
    searchTags: []
  },
  {
    location: "ad01saminweb.jpg",
    caption: "Samin Nosrat Website",
    category: "Advertising",
    gallery: "Samin Nosrat",
    searchTags: []
  },
  {
    location: "ad02samin.png",
    caption: "Samin Nosrat Website",
    category: "Advertising",
    gallery: "Samin Nosrat",
    searchTags: []
  },
  {
    location: "ad03samin.png",
    caption: "Samin Nosrat Website",
    category: "Advertising",
    gallery: "Samin Nosrat",
    searchTags: []
  },
  {
    location: "ad04samin.png",
    caption: "Samin Nosrat Website",
    category: "Advertising",
    gallery: "Samin Nosrat",
    searchTags: []
  },
  {
    location: "ad05samin.jpg",
    caption: "Samin Nosrat Website",
    category: "Advertising",
    gallery: "Samin Nosrat",
    searchTags: []
  },
  {
    location: "07opener_albuquerqueballoons.jpg",
    caption: "Albuquerque",
    category: "Home",
    gallery: "Home",
    searchTags: []
  },
  {
    location: "20190206_LizPrueitt17899_RT-500x700.jpg",
    caption: "Liz Prueitt",
    category: "Home",
    gallery: "Home",
    searchTags: []
  },
  {
    location: "AliceBed.jpg",
    caption: "Wood and Fruit",
    category: "Home",
    gallery: "Home",
    searchTags: []
  },
  {
    location: "17opener_notopeninsula.jpg",
    caption: "Noto Peninsula",
    category: "Home",
    gallery: "Home",
    searchTags: []
  },
  {
    location: "AyaBrackett_VincentMontreuil-1-560x700.jpg",
    caption: "Comfort Food: Vincent, Montreuil",
    category: "Home",
    gallery: "Home",
    searchTags: []
  },
  {
    location: "AyaBrackett_DelphineMontreuil-1-560x700.jpg",
    caption: "Comfort Food: Delphine, Montreuil",
    category: "Home",
    gallery: "Home",
    searchTags: []
  },
  {
    location: "AyaBrackett_Caitlin-775x554.jpg",
    caption: "Comfort Food: Caitlin, Brooklyn",
    category: "Home",
    gallery: "Home",
    searchTags: []
  },
  {
    location: "TartineCake76321.jpg",
    caption: "Tartine Ice Cream Cake",
    category: "Home",
    gallery: "Home",
    searchTags: []
  },
  {
    location: "Radicchio.jpg",
    caption: "Radicchio",
    category: "Home",
    gallery: "Home",
    searchTags: []
  },
  {
    location: "Quince_Caviar-775x564.jpg",
    caption: "Quince Caviar",
    category: "Home",
    gallery: "Home",
    searchTags: []
  },
  {
    location: "WhiteAsparagus.jpg",
    caption: "White Asparagus",
    category: "Home",
    gallery: "Home",
    searchTags: []
  },
  {
    location: "04opener_dannybowien.jpg",
    caption: "Danny Bowien",
    category: "Home",
    gallery: "Home",
    searchTags: []
  },
  {
    location: "15Opener_Hannah.jpg",
    caption: "Hannah",
    category: "Home",
    gallery: "Home",
    searchTags: []
  },
  {
    location: "AyaBrackett_DMontreuil-775x554.jpg",
    caption: "Comfort Food: Delphine, Montreuil",
    category: "Home",
    gallery: "Home",
    searchTags: []
  },
  {
    location: "BelizeJungelSky.jpg",
    caption: "Belize",
    category: "Home",
    gallery: "Home",
    searchTags: []
  },
  {
    location: "01opener_peachesash.jpg",
    caption: "Peaches & Ash",
    category: "Home",
    gallery: "Home",
    searchTags: []
  },
  {
    location: "11opener_saigon.jpg",
    caption: "Saigon",
    category: "Home",
    gallery: "Home",
    searchTags: []
  },
  {
    location: "BeechandTulips-1-560x700.jpg",
    caption: "Beech and Tulips",
    category: "Home",
    gallery: "Home",
    searchTags: []
  },
  {
    location: "AyaBrackett_Prawns-560x700.jpg",
    caption: "Salt Prawns",
    category: "Home",
    gallery: "Home",
    searchTags: []
  },
  {
    location: "Cardoon.jpg",
    caption: "Cardoon",
    category: "Home",
    gallery: "Home",
    searchTags: []
  },
  {
    location: "AyaBrackett_PaperDahlias-500x700.jpg",
    caption: "Paper Dahlias",
    category: "Home",
    gallery: "Home",
    searchTags: []
  },
  {
    location: "AyaBrackett_PaperHeadpiece-500x700.jpg",
    caption: "Kaitlin",
    category: "Home",
    gallery: "Home",
    searchTags: []
  },
  {
    location: "MSLPopsicles.jpg",
    caption: "Popsicles",
    category: "Home",
    gallery: "Home",
    searchTags: []
  },
  {
    location: "QuinceTortellini-775x564.jpg",
    caption: "Quince",
    category: "Home",
    gallery: "Home",
    searchTags: []
  },
  {
    location: "10opener_stvincent.jpg",
    caption: "St. Vincent",
    category: "Home",
    gallery: "Home",
    searchTags: []
  },
  {
    location: "BlackBeansDye-500x700.jpg",
    caption: "Black Bean Dye",
    category: "Home",
    gallery: "Home",
    searchTags: []
  },
  {
    location: "09opener_ume.jpg",
    caption: "Ume",
    category: "Home",
    gallery: "Home",
    searchTags: []
  },
  {
    location: "ParisPastries.jpg",
    caption: "Paris Apartment",
    category: "Home",
    gallery: "Home",
    searchTags: []
  },
  {
    location: "RoseDye-775x554.jpg",
    caption: "Rose Leaf Dye",
    category: "Home",
    gallery: "Home",
    searchTags: []
  },
  {
    location: "Beerworks.jpg",
    caption: "A Chef's Kitchen",
    category: "Home",
    gallery: "Home",
    searchTags: []
  },
  {
    location: "03opener_popevalleycake.jpg",
    caption: "Pope Valley Cake",
    category: "Home",
    gallery: "Home",
    searchTags: []
  },
  {
    location: "AyaBrackett_Roast-560x700.jpg",
    caption: "Crown Roast",
    category: "Home",
    gallery: "Home",
    searchTags: []
  },
  {
    location: "Citrus.jpg",
    caption: "Citrus",
    category: "Home",
    gallery: "Home",
    searchTags: []
  },
  {
    location: "CitrusPeels.jpg",
    caption: "Peels",
    category: "Home",
    gallery: "Home",
    searchTags: []
  },
  {
    location: "PerfumeIngredients_1-500x700.jpg",
    caption: "Perfume Ingredients",
    category: "Home",
    gallery: "Home",
    searchTags: []
  },
  {
    location: "18opener_tuscany.jpg",
    caption: "Tuscany",
    category: "Home",
    gallery: "Home",
    searchTags: []
  },
  {
    location: "AyaBrackett_tart-579x700.jpg",
    caption: "Tart",
    category: "Home",
    gallery: "Home",
    searchTags: []
  },
  {
    location: "13Opener_DriesVanNotenCake.jpg",
    caption: "Dries Van Noten Slice",
    category: "Home",
    gallery: "Home",
    searchTags: []
  },
  {
    location: "12opener_bigislandtea.jpg",
    caption: "Big Island Tea",
    category: "Home",
    gallery: "Home",
    searchTags: []
  },
  {
    location: "Quince-500x700.jpg",
    caption: "Quince",
    category: "Home",
    gallery: "Home",
    searchTags: []
  },
  {
    location: "02opener_chinjukanpottery.jpg",
    caption: "Chinjukan Pottery",
    category: "Home",
    gallery: "Home",
    searchTags: []
  },
  {
    location: "PassionFruitDye-775x554.jpg",
    caption: "Passion Fruit Dye",
    category: "Home",
    gallery: "Home",
    searchTags: []
  }
];
let galleries = [
  {
    name: "Books",
    category: "Books"
  },
  {
    name: "Travel",
    category: "Travel"
  },
  {
    name: "Portraits",
    category: "Portraits"
  },
  {
    name: "Nest",
    category: "Advertising"
  },
  {
    name: "Quince Restaurant",
    category: "Advertising"
  },
  {
    name: "Sightglass Coffee",
    category: "Advertising"
  },
  {
    name: "Nanit",
    category: "Advertising"
  },
  {
    name: "Purple Carrot",
    category: "Advertising"
  },
  {
    name: "Orange Chef",
    category: "Advertising"
  },
  {
    name: "Pop Slate",
    category: "Advertising"
  },
  {
    name: "Equal Exchange",
    category: "Advertising"
  },
  {
    name: "Chin Jukan",
    category: "Advertising"
  },
  {
    name: "Urban Research Clothing",
    category: "Advertising"
  },
  {
    name: "Susan/ Grocery",
    category: "Advertising"
  },
  {
    name: "Peko Peko",
    category: "Advertising"
  },
  {
    name: "Slanted Door",
    category: "Advertising"
  },
  {
    name: "Samin Norsat",
    category: "Advertising"
  },
  {
    name: "Between Meals",
    category: "Still Life"
  },
  {
    name: "General",
    category: "Still Life"
  },
  {
    name: "Paper Flowers",
    category: "Still Life"
  },
  {
    name: "Slow Food",
    category: "Still Life"
  },
  {
    name: "Soiled",
    category: "Still Life"
  },
  {
    name: "Covers",
    category: "Magazines"
  },
  {
    name: "Tearsheets",
    category: "Magazines"
  }
];

// simpleCreate(db.Photo, photos, "photos");
// // simpleCreate(db.Gallery, galleries, "galleries");

// function simpleCreate(DB, object_list, name) {
//   DB.deleteMany({}, (err, objects) => {
//     DB.create(object_list, (err, objects) => {
//       if (err) {
//         return console.log("err", err);
//       }
//       console.log("deleted all", name);
//       console.log("created", objects.length, name);
//     });
//   });
// }

db.Gallery.deleteMany({}, function(err, objects) {
  console.log("deleted all galleries");
  galleries.forEach(galleryData => {
    var gallery = new db.Gallery({
      name: galleryData.name,
      category: galleryData.category
    });
    db.Photo.find({ gallery: galleryData.name }, function(err, foundGalleries) {
      if (err) {
        console.log(err);
        return;
      }
      gallery.photos = foundGalleries;
      gallery.save((err, savedGallery) => {
        if (err) {
          console.log(err);
        }
      });
    });
  });
});
