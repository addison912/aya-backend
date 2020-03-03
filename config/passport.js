const passport = require("passport"),
  GoogleStrategy = require("passport-google-oauth20"),
  keys = require("./keys.js");

passport.use(
  new GoogleStrategy(
    {
      callbackURL: "/auth/google/redirect",
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret
    },
    () => {
      //callbackfunction
    }
  )
);
