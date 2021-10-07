const mongoose = require('mongoose');

// ------------     SUBDOCUMENTS
const openingTimeSchema = new mongoose.Schema({
  days: {
    type: String,
    required: true
  },
  opening: String,
  closing: String,
  closed: {
    type: Boolean,
    required: true
  }
});

// ------------     SUBDOCUMENTS
const reviewSchema = new mongoose.Schema({
  author: {
    type: String,
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  },
  createdOn: {
    type: Date,
    'default': Date.now
  },
  reviewText: String
});

// -------------     MAIN DATA STRUCTURE
const locationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: String,
  rating: {
    type: Number,
    'default': 0,
    min: 0,
    max: 5
  },
  facilities: [String],
  coords: {
    type: { type: String },
    coordinates: [Number]
  },
  openingTimes: [openingTimeSchema],
  reviews: [reviewSchema]
});
locationSchema.index({ coords: '2dsphere' });

// Model Compiling
mongoose.model('Location', locationSchema);