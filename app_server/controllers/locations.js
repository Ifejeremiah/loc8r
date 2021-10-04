// Get homepage
const homeList = (req, res) => {
    res.render('locations-list', {
        title: 'Loc8r - Find a place to work with wifi', pageHeader: {
            title: 'Loc8r',
            strapline: 'Find places to work with wifi near you!'
        },
        sidebar: 'Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perharps with coffee, cake or a pint? Let Loc8r help you find the place you are looking for.',
        locations: [
            {
                name: 'Starcups',
                address: '125 High Street, Reading, RG6 1PS',
                rating: 3,
                facilities: ['Hot Drinks', 'Food', 'Premium Wifi'],
                distance: '100m'
            },
            {
                name: 'Cafe Hero',
                address: '125 High Street, Reading, RG6 1PS',
                rating: 4,
                facilities: ['Hot Drinks', 'Food', 'Premium Wifi'],
                distance: '200m'
            },
            {
                name: 'Burger Queen',
                address: '125 High Street, Reading, RG6 1PS',
                rating: 2,
                facilities: ['Food', 'Premium Wifi'],
                distance: '250m'
            }
        ]
    });
};
// Get location info page
const locationInfo = (req, res) => {
    res.render('location-info', {
        title: 'Starcups | Loc8r - Find places with wifi',
        pageHeader: { title: 'Starcups' },
        location: {
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot Drinks', 'Food', 'Premium Wifi'],
            coords: { lat: 51.455041, lng: -0.9690884 },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            },
            {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            },
            {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'Ife Jeremiah',
                rating: 4,
                timestamp: '16 February 2021',
                reviewText: 'What a great place.'
            },
            {
                author: 'John Doe',
                rating: 2,
                timestamp: '14 April 2011',
                reviewText: 'It was okay. \nCoffee wasn\'t great'
            }]
        },
        sidebar: {
            content: ' is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you have been, and you like it - or you don\'t, please leave a review to help other people just like you.'
        }
    });
};
// Get add reviews page
const addReview = (req, res) => {
    res.render('location-review-form', {
        title: 'Review Starcups on Loc8r',
        pageHeader: { title: 'Review Starcups' }
    });
};

module.exports = { homeList, locationInfo, addReview };