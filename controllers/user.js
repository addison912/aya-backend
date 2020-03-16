const bcrypt = require("bcrypt"),
  db = require("../Models"),
  jwt = require("jsonwebtoken"),
  config = require("../config/config"),
  { OAuth2Client } = require("google-auth-library"),
  keys = require("../config/keys.js"),
  passport = require("passport");

module.exports = {
  signup: (req, res) => {
    console.log(req.body.email);
    // Check to see if email is already in db
    db.User.findOne({ email: req.body.email })
      .exec()
      .then(user => {
        console.log("checking if email exists in DB ...");
        // if a user is found with that email
        if (!!user) {
          // send an error and let the user know that the email already exists
          return res.status(409).json({
            message: "email already exists"
          });
          // if we don't have this user's email in our db, lets get them set up!
        } else {
          console.log("hashing password ...");
          // lets hash our plaintext password
          bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
              console.log("hashing error:", err);
              res.status(200).json({ error: err });
              // we now have a successful hashed password
            } else {
              // we are creating a User object with their email address and OUR hashed password
              db.User.create(
                {
                  email: req.body.email,
                  password: hash
                },
                (err, newUser) => {
                  console.log("here is the result", newUser);
                  if (err) {
                    return res.status(500).json({ err });
                  }
                  // we send our new data back to user or whatever you want to do.
                  let user = {
                    email: newUser.email,
                    _id: newUser._id
                  };

                  jwt.sign(
                    user,
                    config.jwtSecret,
                    {
                      // its good practice to have an expiration amount for jwt tokens.
                      expiresIn: "1h"
                    },
                    (err, signedJwt) => {
                      if (err) {
                        return res.status(500).json({ err });
                      }
                      res.status(200).json({
                        message: "User Created",
                        user,
                        signedJwt
                      });
                    }
                  );
                  // send success back to user, along with a token.
                }
              );
            }
          });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ err });
      });
  },
  googleRedirect: (req, res) => {
    res.send("you reached the callback URI");
  },
  login: (req, res) => {
    console.log("LOGIN CALLED");
    // find the user in our user db
    let data = JSON.parse(Buffer.from(req.body.data, "base64").toString());
    console.log(data);
    db.User.find({ email: data.email })
      .select("+password")
      .exec()
      // if we have found a user
      .then(users => {
        // if there is not email in our db
        console.log("USERS: ", users);
        if (users.length < 1) {
          return res.status(401).json({
            message: "Email/Password incorrect"
          });
        }
        // we have an email in our db that matches what they gave us
        // now we have to compare their hashed password to what we have in our db
        console.log("hash", users[0].password);
        bcrypt.compare(data.password, users[0].password, (err, match) => {
          console.log(match);
          // If the compare function breaks, let them know
          if (err) {
            console.log(err);
            return res.status(500).json({ err });
          }
          // If match is true (their password matches our db password)
          if (match) {
            console.log("MATCH: ", match);
            // create a json web token

            let user = {
              email: users[0].email,
              _id: users[0]._id
            };
            jwt.sign(
              user,
              config.jwtSecret,
              {
                // its good practice to have an expiration amount for jwt tokens.
                expiresIn: "1h"
              },
              (err, signedJwt) => {
                if (err) {
                  console.log(err);
                  res.status(403).json({ message: "Auth failed" });
                } else {
                  res.status(200).json({
                    message: "Auth successful",
                    user,
                    signedJwt
                  });
                }
              }
            );
            // the password provided does not match the password on file.
          } else {
            console.log("NOT A MATCH");
            res.status(401).json({ message: "Email/Password incorrect" });
          }
        });
      })
      .catch(err => {
        console.log("OUTSIDE ERROR_");
        console.log(err);
        res.status(500).json({ err });
      });
  },
  show: (req, res) => {
    console.log("trigger Show", req.userId);
    if (req.userId) {
      db.User.findById(req.userId, (err, foundUser) => {
        res.json(foundUser);
      });
    } else {
      res.json("No user Id provided");
    }
  },
  delete: (req, res) => {
    console.log("hitting delete");
    db.User.deleteOne({ _id: req.params.userId }, (err, result) => {
      if (err) {
        return res.status(500).json({ err });
      }
      res.status(200).json({ result });
    });
  }
};
