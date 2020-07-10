const passport = require("passport"),
  GoogleStrategy = require("passport-google-oauth20"),
  db = require("../Models"),
  config = require("./config.js"),
  keys = require("./keys.js");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      callbackURL: `${config.domain}/auth/google/redirect`,
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret,
    },
    (accessToken, refreshToken, profile, done) => {
      //callbackfunction
      db.User.findOne({ email: profile._json.email }).then((currentUser) => {
        if (currentUser) {
          // already have this user
          // console.log("user is: ", currentUser);
          done(null, currentUser);
        } else {
          done(null);
        }
        // console.log(profile);
      });
    }
  )
);
