const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

// Register handle
const register = (req, res) => {
  const entry = req.body;
  if (!entry.name || !entry.email || !entry.password) {
    return res.status(400).json({ msg: 'All fields required' });
  }
  const user = new User();
  user.name = entry.name;
  user.email = entry.email;
  user.setPassword(entry.password);
  user.save(err => {
    if (err) {
      if (err.code === 11000) {
        return res.status(400).json({ msg: 'Email is already registered.' })
      } else return res.status(400).json(err);
    } else {
      const token = user.generateJwt();
      res.status(200).json({ token });
    }
  });
};

// Login handle
const login = (req, res) => {
  const entry = req.body;
  if (!entry.email || !entry.password) {
    return req.status(400).json({ msg: 'All fields required' });
  }
  passport.authenticate('local', (err, user, info) => {
    let token;
    if (err) {
      return res.status(404).json(err);
    }
    if (user) {
      token = user.generateJwt();
      res.status(200).json({ token });
    } else {
      res.status(401).json(info);
    }
  })(req, res);
};

module.exports = {
  register,
  login
}