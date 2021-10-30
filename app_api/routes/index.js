const express = require('express');
const router = express.Router();

//JWT for routes authentication
const jwt = require('express-jwt');
const auth = jwt({
  secret: process.env.JWT_SECRET,
  algorithms: ['HS256'],
  userProperty: 'payload'
});

const ctrlLocations = require('../controllers/locations');
const ctrlReviews = require('../controllers/reviews');
const ctrlAuth = require('../controllers/authentication');

// Locations
router
  .route('/locations')
  .get(ctrlLocations.locationsListByDistance)
  .post(ctrlLocations.locationsCreate);

router
  .route('/locations/:locationsid')
  .get(ctrlLocations.locationsReadOne)
  .put(ctrlLocations.locationsUpdateOne)
  .delete(ctrlLocations.locationsDeleteOne);

// Reviews
router
  .route('/locations/:locationsid/reviews')
  .post(auth, ctrlReviews.reviewsCreate);

router
  .route('/locations/:locationsid/reviews/:reviewsid')
  .get(ctrlReviews.reviewsReadOne)
  .put(auth, ctrlReviews.reviewsUpdateOne)
  .delete(auth, ctrlReviews.reviewsDeleteOne);

router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;