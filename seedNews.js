const db = require("./Models");

let news = [
  {
    title: `New Revised Edition of How To Cook Everything by Mark Bittman`,
    date: `September 26, 2019`,
    text: `The 20th anniversary of&nbsp;<a href="https://www.amazon.com/gp/product/1328545431/ref=dbs_a_def_rwt_bibl_vppi_i0"><em>How to Cook Everything</em>&nbsp;by Mark Bittman</a> is marked by this new edition&nbsp;with photographs by me! It was an honor to work on such a classic and essential book. We spent 3 weeks in NYC photographing hundreds of dishes and my crew, <a href="http://www.victoriagranof.com" target="_blank">Victoria Granof</a> (food stylist extraordinaire), <a href="https://www.michelekarpe.com/Philippa-Brathwaite/Portfolio/1">Philippa Brathwaite</a> (prop stylist),&nbsp;<a href="https://www.martynaszcz.com">Martyna Szczesna</a> (photo assistance), Kerri Conan, Stephanie Fletcher from Houghton Mifflin Harcourt&nbsp;made the job a dream. You can see more images from the book<a href="http://www.ayabrackett.com/books/">&nbsp;HERE</a>`,
    photos: [
      {
        location: `1_Bittman_HTCE-775x436.jpg`,
        link: "http://new.ayabrackett.com/#/Books"
      },
      {
        location: `2_Bittman_HTCE-775x436.jpg`,
        link: "http://new.ayabrackett.com/#/Books"
      },
      {
        location: `3_Bittman_HTCE_Cover-1-622x700.jpg`,
        link: "http://new.ayabrackett.com/#/Books"
      },
      {
        location: `4_Bittman_HTCE-775x436.jpg`,
        link: "http://new.ayabrackett.com/#/Books"
      },
      {
        location: `5_Bittman_HTCE-775x436.jpg`,
        link: "http://new.ayabrackett.com/#/Books"
      },
      {
        location: `6_Bittman_HTCE-775x436.jpg`,
        link: "http://new.ayabrackett.com/#/Books"
      }
    ]
  },
  {
    title: `Dinner for Everyone by Mark Bittman – out in stores now!`,
    date: `September 26, 2019`,
    text: `The book that really solves the nightly dinner dilemna is out now! <a href="https://www.amazon.com/Dinner-Everyone-Ways-Easy-Perfect-Company/dp/0385344767">Dinner for Everyone</a>&nbsp;by Mark Bittman was a lengthy shoot with over 300 recipes and lots of leftovers (I gained a few pounds on this shoot!)`,
    photos: [
      {
        location: "1-Bittman_3_frenchtoast-775x461.jpg",
        link: "http://new.ayabrackett.com/#/Books"
      },
      {
        location: "2-Bittman_1_Fettucini-775x466.jpg",
        link: "http://new.ayabrackett.com/#/Books"
      },
      {
        location: "3-BittmanDFE_Cover-1-598x700.jpg",
        link: "http://new.ayabrackett.com/#/Books"
      },
      {
        location: "4-Bittman_4_gnocchi-775x467.jpg",
        link: "http://new.ayabrackett.com/#/Books"
      },
      {
        location: "5-Bittman_5_Parmigiana-775x459.jpg",
        link: "http://new.ayabrackett.com/#/Books"
      },
      {
        location: "6-Bittman_6_Trout-775x456.jpg",
        link: "http://new.ayabrackett.com/#/Books"
      }
    ]
  },
  {
    title: `Newlywed Table cookbook – Available now!`,
    date: `April 17, 2018`,
    text: `Earlier this year we were busy shooting a cookbook with <a href="https://www.mariazizka.com">Maria Zizka</a> for Artisan books titled&nbsp;<a href="https://www.amazon.com/Newlywed-Table-Cookbook-Kitchen-Together/dp/1579657982"><em>The Newlywed Table</em></a>. We shot mostly in&nbsp;studio but also&nbsp;on a couple&nbsp;locations (including my own kitchen :). <a href="http://grahambradley.com" target="_blank">Graham Bradley</a>&nbsp;designed the book and cheerfully&nbsp;mocked up over 200 cover options – this team was a hard&nbsp;working, creative powerhouse!`,
    photos: [
      {
        location: "1-Brackett-2019NewlwedCookbook_12-775x534.jpg",
        link: "http://new.ayabrackett.com/#/Books"
      },
      {
        location: "2-newlywed-table-bts-1.jpg",
        link: "http://new.ayabrackett.com/#/Books"
      },
      {
        location: "3-NewlywedTable-508x700.jpg",
        link: "http://new.ayabrackett.com/#/Books"
      },
      {
        location: "4-Brackett-2019NewlwedCookbook_10-775x534.jpg",
        link: "http://new.ayabrackett.com/#/Books"
      },
      {
        location: "5-newlywed-table-bts-3.jpg",
        link: "http://new.ayabrackett.com/#/Books"
      },
      {
        location: "6-newlywed-table-bts-2.jpg",
        link: "http://new.ayabrackett.com/#/Books"
      }
    ]
  },
  {
    title: `A Photo Editor Blog Interview`,
    date: `January 29, 2018`,
    text: `<a href="http://aphotoeditor.com/2018/01/29/the-daily-promo-aya-brackett/" target="_blank">A Photo Editor (APE) </a>is a blog&nbsp;edited by Rob Haggart, the former Director of Photography for Men's Journal and Outside Magazine, and compiles and presents notable photography. As a frequent reader,&nbsp;I was excited to have been&nbsp;recently&nbsp;included with an <a href="http://aphotoeditor.com/2018/01/29/the-daily-promo-aya-brackett/" target="_blank">interview </a>about my&nbsp;latest photo booklet.&nbsp;`,
    photos: [
      {
        location: "1-ape-booklet-1.jpg",
        link: "http://aphotoeditor.com/2018/01/29/the-daily-promo-aya-brackett/"
      },
      {
        location: "2-ape-booklet-2.jpg",
        link: "http://aphotoeditor.com/2018/01/29/the-daily-promo-aya-brackett/"
      },
      {
        location: "3-ape-booklet-3.jpg",
        link: "http://aphotoeditor.com/2018/01/29/the-daily-promo-aya-brackett/"
      }
    ]
  },
  {
    title: `Wrapped Mark Bittman Cookbook shoot – Whew!`,
    date: `November 27, 2017`,
    text: `We wrapped a 3 week cookbook shoot for Mark Bittman (Clarkson&nbsp;Potter, 2018) – a marathon of cooking, shooting and eating (like prepping for Thanksgiving every day for 16 days). With over 300 recipes, it will&nbsp;be an essential reference and inspiration to cooks. Below is our shoot board, props and things grillin'. Look for it next year!`,
    photos: [
      {
        location: "1-AyaBrackettBittmanBook.jpg"
      },
      {
        location: "2-AyaBrackettBittmanBook.jpg"
      },
      {
        location: "3-AyaBrackettBittmanBook2-1.jpg"
      }
    ]
  },
  {
    title: `New Quince Restaurant Website Launch`,
    date: `October 29, 2017`,
    text: `Hands down, one of the best restaurant shoots I've done in a long time. So impressed by the food, of course, but also&nbsp;by the integrity and kindness of the people&nbsp;at Quince. It's no surprise they just earned a third Michelin star.`,
    photos: [
      {
        location: "1-QuinceFarmChefs-775x485.jpg",
        link: "http://www.ayabrackett.com/advertising/quince-restaurant/"
      },
      {
        location: "2-QuinceOyster-775x484.jpg",
        link: "http://www.ayabrackett.com/advertising/quince-restaurant/"
      },
      {
        location: "3-QuinceCaviar-775x484.jpg",
        link: "http://www.ayabrackett.com/advertising/quince-restaurant/"
      }
    ]
  },
  {
    title: `Pre-order “The Fine Art of Paper Flowers Book”!!`,
    date: `August 2, 2017`,
    text: `My book with paper extraordinaire, Tiffanie Turner, is coming out August 22nd! Pre-order<a href="https://app.snapapp.com/PAPERFLOWERS"> here </a>and get a free poster!! These are paper cosmos with a few of my favorite&nbsp;"dead" ones. See some excerpts from the&nbsp;book <a href="http://www.ayabrackett.com/books/">HERE</a>`,
    photos: [
      {
        location: "1-AyaBrackett_PaperFlwr_6-775x484.jpg",
        link: "http://new.ayabrackett.com/#/Books"
      },
      {
        location: "2-AyaBrackett_PaperFlwr_12-775x484.jpg",
        link: "http://new.ayabrackett.com/#/Books"
      },
      {
        location: "3-AyaBrackettPaperFlwrs.jpg",
        link: "http://new.ayabrackett.com/#/Books"
      }
    ]
  },
  {
    title: `Paper Flower Book with Tiffanie Turner`,
    date: `March 29, 2017`,
    text: `I've been working on a book with <a href="http://www.papelsf.com/" target="_blank">Tiffanie Turner</a>, an incredible paper artist, and have finally put up some <a href="http://www.ayabrackett.com/still-life/paper-flowers/">images</a> from the upcoming book, <a href="http://www.ayabrackett.com/still-life/paper-flowers/"><em>The Fine Art of Paper Flowers </em></a>(Ten Speed Press, 2017) I feel it's important to emphasize that these are made out of PAPER!! The book will be released on August 22, 2017 but is available for pre-order now&nbsp;<a href="https://www.amazon.com/Fine-Art-Paper-Flowers-Botanicals/dp/0399578374" target="_blank">here</a><a href="https://www.amazon.com/Fine-Art-Paper-Flowers-Botanicals/dp/0399578374">&nbsp;</a>&nbsp; &nbsp;&nbsp;Tiffanie is amazing….`,
    photos: [
      {
        location: "1-AyaBrackett_PaperFlwr_4-775x484.jpg",
        link: "http://new.ayabrackett.com/#/Books"
      },
      {
        location: "2-AyaBrackett_PaperFlwr_9-775x484.jpg",
        link: "http://new.ayabrackett.com/#/Books"
      },
      {
        location: "3-AyaBrackett_PaperFlwr_Cover-563x700.jpg",
        link: "http://new.ayabrackett.com/#/Books"
      }
    ]
  },
  {
    title: `Photo District News Story about Forward Thinking Photographers`,
    date: `February 9, 2017`,
    text: `PDN (Photo District News) included me in a group of "4 forward thinking photographers" in a recent issue. There are so many food photgraphers out there and the article was an apt summary of my approach and attempt to stand out from the crowd (I'll be lifting these words in my next artist statement- just kidding!)&nbsp;They also did a short essay on thoughts on my hero photographer, Martin Parr.`,
    photos: [
      {
        location: "1-PDNStory.jpg",
        link:
          "http://www.pdnonline.com/business-marketing/marketing/aya-brackett-bringing-art-culture-food-photography/"
      },
      {
        location: "2-PDNStory.jpg",
        link:
          "http://www.pdnonline.com/business-marketing/marketing/aya-brackett-bringing-art-culture-food-photography/"
      },
      {
        location: "3-PDNStory.jpg",
        link:
          "http://www.pdnonline.com/business-marketing/marketing/aya-brackett-bringing-art-culture-food-photography/"
      }
    ]
  },
  {
    title: `Holiday Story for Martha Stewart Living`,
    date: `December 8, 2016`,
    text: `Just out on stands now! See more <a href="http://www.ayabrackett.com/publications/tear-sheets/">HERE</a>`,
    photos: [
      {
        location: "1-AyaBrackett_MSL_Holiday_1.jpg",
        link: "http://new.ayabrackett.com/#/Magazines",
        caption: "Martha Stewart Living"
      },
      {
        location: "2-AyaBrackett_MSL_Holiday_1.jpg",
        link: "http://new.ayabrackett.com/#/Magazines",
        caption: "Martha Stewart Living"
      }
    ]
  }
];

simpleCreate(db.News, news, "news");
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
