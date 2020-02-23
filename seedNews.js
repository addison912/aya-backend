const db = require("./Models");

news = [
  {
    title: `New Revised Edition of How To Cook Everything by Mark Bittman`,
    date: `September 26, 2019`,
    text: `The 20th anniversary of&nbsp;<a href="https://www.amazon.com/gp/product/1328545431/ref=dbs_a_def_rwt_bibl_vppi_i0"><em>How to Cook Everything</em>&nbsp;by Mark Bittman</a> is marked by this new edition&nbsp;with photographs by me! It was an honor to work on such a classic and essential book. We spent 3 weeks in NYC photographing hundreds of dishes and my crew, <a href="http://www.victoriagranof.com" target="_blank">Victoria Granof</a> (food stylist extraordinaire), <a href="https://www.michelekarpe.com/Philippa-Brathwaite/Portfolio/1">Philippa Brathwaite</a> (prop stylist),&nbsp;<a href="https://www.martynaszcz.com">Martyna Szczesna</a> (photo assistance), Kerri Conan, Stephanie Fletcher from Houghton Mifflin Harcourt&nbsp;made the job a dream. You can see more images from the book<a href="http://www.ayabrackett.com/books/">&nbsp;HERE</a>`,
    photos: [
      {
        location: `http://www.ayabrackett.com/wp-content/uploads/2019/09/1__Bittman_HTCE_Cover-2.jpg`,
        link: "http://new.ayabrackett.com/#/Books"
      },
      {
        location: `http://www.ayabrackett.com/wp-content/uploads/2019/09/HTCE-Blog.jpg`,
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
        caption: "Dinner For Everyone by Mark Bittman",
        location:
          "http://www.ayabrackett.com/wp-content/uploads/2019/09/1_BittmanDFE_Cover-1.jpg",
        link: "http://new.ayabrackett.com/#/Books"
      },
      {
        location:
          "http://www.ayabrackett.com/wp-content/uploads/2019/09/Dinner-For-Everyone-Bittman_SpreadBlog.jpg",
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
        location:
          "http://www.ayabrackett.com/wp-content/uploads/2018/09/NewlywedTable.jpg",
        link: "http://new.ayabrackett.com/#/Books"
      },
      {
        location:
          "http://www.ayabrackett.com/wp-content/uploads/2018/09/AyaBrackettNewlywedbook.jpg",
        link: "http://new.ayabrackett.com/#/Books"
      },
      {
        location:
          "http://www.ayabrackett.com/wp-content/uploads/2018/09/AyaBrackettNewlywedbook_process.jpg"
      }
    ]
  },
  {
    title: `A Photo Editor Blog Interview`,
    date: `January 29, 2018`,
    text: `<a href="http://aphotoeditor.com/2018/01/29/the-daily-promo-aya-brackett/" target="_blank">A Photo Editor (APE) </a>is a blog&nbsp;edited by Rob Haggart, the former Director of Photography for Men's Journal and Outside Magazine, and compiles and presents notable photography. As a frequent reader,&nbsp;I was excited to have been&nbsp;recently&nbsp;included with an <a href="http://aphotoeditor.com/2018/01/29/the-daily-promo-aya-brackett/" target="_blank">interview </a>about my&nbsp;latest photo booklet.&nbsp;`,
    photos: [
      {
        location:
          "http://www.ayabrackett.com/wp-content/uploads/2018/01/APhotoEditorBlogPost.jpg",
        caption:
          "http://aphotoeditor.com/2018/01/29/the-daily-promo-aya-brackett/"
      }
    ]
  },
  {
    title: `Wrapped Mark Bittman Cookbook shoot – Whew!`,
    date: `November 27, 2017`,
    text: `We wrapped a 3 week cookbook shoot for Mark Bittman (Clarkson&nbsp;Potter, 2018) – a marathon of cooking, shooting and eating (like prepping for Thanksgiving every day for 16 days). With over 300 recipes, it will&nbsp;be an essential reference and inspiration to cooks. Below is our shoot board, props and things grillin'. Look for it next year!`,
    photos: [
      {
        location:
          "http://www.ayabrackett.com/wp-content/uploads/2017/11/AyaBrackettBittmanBook2-1.jpg"
      },
      {
        location:
          "http://www.ayabrackett.com/wp-content/uploads/2017/11/AyaBrackettBittmanBook2.jpg"
      }
    ]
  },
  {
    title: `New Quince Restaurant Website Launch`,
    date: `October 29, 2017`,
    text: `Hands down, one of the best restaurant shoots I've done in a long time. So impressed by the food, of course, but also&nbsp;by the integrity and kindness of the people&nbsp;at Quince. It's no surprise they just earned a third Michelin star.`,
    photos: [
      {
        location:
          "http://www.ayabrackett.com/wp-content/uploads/2017/11/1QuinceCaviar.jpg",
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
        location:
          "http://www.ayabrackett.com/wp-content/uploads/2017/08/AyaBrackettPaperFlwrs.jpg",
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
        location:
          "http://www.ayabrackett.com/wp-content/uploads/2017/03/PaperFlowers2.jpg",
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
        location:
          "http://www.ayabrackett.com/wp-content/uploads/2017/02/PDNStory-1.jpg",
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
        location:
          "http://www.ayabrackett.com/wp-content/uploads/2016/12/AyaBrackett_MSL_Holiday_1.jpg",
        link: "http://new.ayabrackett.com/#/Magazines"
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
