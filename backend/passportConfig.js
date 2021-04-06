const User = require("../models/user");
const bcrypt = require("bcryptjs");
const LocalStrategy = require("passport-local").Strategy;

// defining local strategy

module.exports = function (passport) {
  passport.use(
    new LocalStrategy((username, password, done) => {
      User.findOne({ username: username }, (err, user) => {
        if (err) throw err;
        if (!user) return done(null, false);
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) throw err;
          if (result === true) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      });
    })
  );

  // passport requires serialized and deserialized user
  // serialized stores cookie inside browser
  // takes user from localstrategy and creates a cookie with the user id inside of it
  // deserialized user method takes the user cookie and unravvels it and returns a user from it

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });
  passport.deserializeUser((id, cb) => {
    User.findOne({ _id: id }, (err, user) => {
      cb(err, user);
    });
  });
};
