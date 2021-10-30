const passport = require('passport');
const LocalStrategy = require('passport-local');
const mongoose = require('mongoose');
const User = mongoose.model('User');

// Strategy (Local Strategy) Configuration to query for one document with supplied email, and to check for valid password
passport.use(new LocalStrategy(
  { usernameField: 'email' },
  (username, password, done) => {
    User.findOne({ email: username }, (err, user) => {
      if (err) return done(err);
      if (!user) {
        return done(null, false, { message: 'Incorrect Email' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect Password' });
      }
      return done(null, user);
    });
  }
));