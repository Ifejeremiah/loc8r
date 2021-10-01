// Get homepage
const homeList = (req, res) => {
    res.render('locations-list', { title: 'Home' });
};
// Get location info page
const locationInfo = (req, res) => {
    res.render('location-info', { title: 'Location Info' });
};
// Get add reviews page
const addReview = (req, res) => {
    res.render('location-review-form', { title: 'Add Review' });
};

module.exports = { homeList, locationInfo, addReview };