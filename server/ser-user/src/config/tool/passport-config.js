const passport = require("passport");
const passportLocal = require("passport-local");
const Course = require("../../app/models/model");

let LocalStrategy = passportLocal.Strategy;

let initPassportLocal = () => {
  passport.use(new LocalStrategy({
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true
  }, async (req, email, password, done)=> {
    try {
      let user = await Course.findByEmail(email);
      if (!user) {
        return done(null, false);
      }

      let checkPassword = await(user.comparePassword(password));

      if (!checkPassword) {
        return done(null, false);
      }

      return done(null, user);
    } catch (error) {
      console.log(error);
      return done(null, false,);
    }
  }));
};

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

module.exports = initPassportLocal;