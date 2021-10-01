const express = require('express'),
    router = express.Router(),
    ctrlLocations = require('../controllers/locations'),
    ctrlOthers = require('../controllers/others');

router
    /* Locations Pages */
    .get('/', ctrlLocations.homeList)
    .get('/location', ctrlLocations.locationInfo)
    .get('/location/review/new', ctrlLocations.addReview)

    // Other Pages 
    .get('/about', ctrlOthers.about);

module.exports = router;