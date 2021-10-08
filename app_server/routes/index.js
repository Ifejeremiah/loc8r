const express = require('express'),
    router = express.Router(),
    ctrlLocations = require('../controllers/locations'),
    ctrlOthers = require('../controllers/others');

router
    /* Locations Pages */
    .get('/', ctrlLocations.homeList)
    .get('/location/:locationsid', ctrlLocations.locationInfo)

    // Other Pages 
    .get('/about', ctrlOthers.about);

// Add Reviews Pages 
router
    .route('/location/:locationsid/review/new')
    .get(ctrlLocations.addReview)
    .post(ctrlLocations.doAddReview);


module.exports = router;