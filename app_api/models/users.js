const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true    //Email is the unique identifier
  },
  name: {
    type: String,
    required: true
  },
  hash: String,
  salt: String
});

userSchema.methods.setPassword = function (password) {
  // Salt to generate a strong data to combine with passwords as a hash
  this.salt = crypto.randomBytes(16).toString('hex');
  // Combining salt and password to give hash
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
    .toString('hex');
};

userSchema.methods.validPassword = function (password) {
  const hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
    .toString('hex');
  return this.hash === hash;
};

userSchema.methods.generateJwt = function () {
  const expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);
  return jwt.sign({
    _id: this._id,
    name: this.name,
    email: this.email,
    exp: parseInt(expiry.getTime() / 1000, 10),
  }, process.env.JWT_SECRET); 
};

mongoose.model('User', userSchema);