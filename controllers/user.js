const bcrypt = require("bcrypt"),
  db = require("../Models"),
  jwt = require("jsonwebtoken"),
  config = require("../config/config"),
  { OAuth2Client } = require("google-auth-library"),
  keys = require("../config/keys.js");

function errCheck(err) {
  if (err) {
    console.log(err);
    return res.status(500).json({ err });
  }
}

module.exports = {
  verify: (req, res) => {
    try {
      console.log("verifying");
      const bearerHeader = req.headers["authorization"];
      console.log("triggered token check", bearerHeader);

      if (typeof bearerHeader !== "undefined") {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        let verified = jwt.verify(req.token, config.jwtSecret);
        console.log("here is the verified", verified);
        res.json({ token: req.token });
      } else {
        res.sendStatus(403);
      }
    } catch (err) {
      console.log(err);
      res.sendStatus(403);
    }
  },
  //signup route is disabled
  signup: (req, res) => {
    console.log(req.body.email);
    // Check to see if email is already in db
    db.User.findOne({ email: req.body.email })
      .exec()
      .then((user) => {
        console.log("checking if email exists in DB ...");
        // if a user is found with that email
        if (!!user) {
          // send an error and let the user know that the email already exists
          return res.status(409).json({
            message: "email already exists",
          });
          // if we don't have this user's email in our db, lets get them set up!
        } else {
          console.log("hashing password ...");
          console.log(req.body);
          // lets hash our plaintext password
          bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
              console.log("hashing error:", err);
              res.status(200).json({ error: err });
              // we now have a successful hashed password
            } else {
              // we are creating a User object with their email address and OUR hashed password
              console.log(hash);
              db.User.create(
                {
                  email: req.body.email,
                  password: hash,
                },
                (err, newUser) => {
                  console.log("here is the result", newUser);
                  if (err) {
                    return res.status(500).json({ err });
                  }
                  // we send our new data back to user or whatever you want to do.
                  let user = {
                    email: newUser.email,
                    _id: newUser._id,
                  };

                  jwt.sign(
                    user,
                    config.jwtSecret,
                    {
                      // its good practice to have an expiration amount for jwt tokens.
                      expiresIn: "24h",
                    },
                    (err, signedJwt) => {
                      if (err) {
                        return res.status(500).json({ err });
                      }
                      res.status(200).json({
                        message: "User Created",
                        user,
                        signedJwt,
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
      .catch((err) => {
        errCheck(err);
      });
  },

  login: (req, res) => {
    try {
      console.log("LOGIN CALLED");
      // find the user in our user db
      let data = JSON.parse(Buffer.from(req.body.data, "base64").toString());
      // let data = req.body;
      console.log(data.email);
      db.User.find({ email: data.email })
        .select("+password")
        .exec()
        // if we have found a user
        .then((users) => {
          // if there is not email in our db
          console.log("USERS: ", users);
          if (users.length < 1) {
            return res.status(401).json({
              message: "Email/Password incorrect",
            });
          }
          // we have an email in our db that matches what they gave us
          // now we have to compare their hashed password to what we have in our db
          console.log("hash", users[0].password);
          bcrypt.compare(data.password, users[0].password, (err, match) => {
            console.log(match);
            // If the compare function breaks, let them know
            errCheck(err);
            // If match is true (their password matches our db password)
            if (match) {
              console.log("MATCH: ", match);
              // create a json web token

              let user = {
                email: users[0].email,
                _id: users[0]._id,
              };
              jwt.sign(
                user,
                config.jwtSecret,
                {
                  // its good practice to have an expiration amount for jwt tokens.
                  expiresIn: "24h",
                },
                (err, signedJwt) => {
                  if (err) {
                    console.log(err);
                    res.status(403).json({ message: "Auth failed" });
                  } else {
                    res.status(200).json({
                      message: "Auth successful",
                      user,
                      signedJwt,
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
        .catch((err) => {
          errCheck(err);
        });
    } catch (err) {
      errCheck(err);
    }
  },
  googleLogin: (req, res) => {
    try {
      let token = req.body.token;
      const { OAuth2Client } = require("google-auth-library");
      const client = new OAuth2Client(config.google.clientID);
      async function verify() {
        const ticket = await client.verifyIdToken({
          idToken: token,
          audience: config.google.clientID,
        });
        const payload = ticket.getPayload();
        const userid = payload["sub"];
        return payload;
      }
      verify()
        .then((payload) => {
          console.log(payload);
          try {
            db.User.findOne({ email: payload.email }, (err, user) => {
              // console.log(user);
              if (user) {
                let verifiedUser = {
                  email: user.email,
                  _id: user._id,
                };
                jwt.sign(
                  verifiedUser,
                  config.jwtSecret,
                  {
                    // its good practice to have an expiration amount for jwt tokens.
                    expiresIn: "24h",
                  },
                  (err, signedJwt) => {
                    if (err) {
                      console.log(err);
                      res.status(403).json({ message: "Auth failed" });
                    } else {
                      res.status(200).json({
                        message: "Auth successful",
                        user,
                        signedJwt,
                      });
                    }
                  }
                );
              } else {
                res.status(401).json({ message: "Not an authorized user" });
              }
            });
          } catch (err) {
            errCheck(err);
          }
        })
        .catch((err) => {
          errCheck(err);
        });
    } catch (err) {
      errCheck(err);
    }
  },

  delete: (req, res) => {
    console.log("hitting delete");
    db.User.deleteOne({ _id: req.params.userId }, (err, result) => {
      errCheck(err);
      res.status(200).json({ result });
    });
  },
};
