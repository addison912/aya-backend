const passport = require("passport"),
  GoogleStrategy = require("passport-google-oauth20"),
  db = require("../Models"),
  keys = require("./keys.js");

passport.use(
  new GoogleStrategy(
    {
      callbackURL: "/auth/google/redirect",
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret
    },
    (accessToken, refreshToken, profile, done) => {
      //callbackfunction
      db.User.findOne({ email: profile._json.email }).then(currentUser => {
        if (currentUser) {
          // already have this user
          console.log("user is: ", currentUser);
          done(null, currentUser);
        }
        console.log(profile);
      });
    }
  )
);
