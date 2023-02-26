const request = require('request');
const apiOptions = {
    server: 'http://localhost:8000'
};
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://loc8r-s47v.onrender.com/'
};

const formatDistance = (distance) => {
    let thisDistance = 0,
        unit = 'm';
    if (distance > 1000) {
        thisDistance = parseFloat(distance / 1000).toFixed(1);
        unit = 'km';
    } else {
        thisDistance = Math.floor(distance);
    }
    return thisDistance + unit;
};

const renderHomepage = (req, res, responseBody) => {
    let message = null;
    if (!(responseBody instanceof Array)) {
        message = 'API lookup error';
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = 'No places found nearby';
        }
    }
    res.render('locations-list', {
        title: 'Loc8r - Find a place to work with wifi', pageHeader: {
            title: 'Loc8r',
            strapline: 'Find places to work with wifi near you!'
        },
        sidebar: 'Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perharps with coffee, cake or a pint? Let Loc8r help you find the place you are looking for.',
        locations: responseBody,
        message
    });
};

// Get homepage
const homeList = (req, res) => {
    const path = '/api/locations';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
        qs: {
            lng: 0,
            lat: 0,
            maxdistance: 2000000000
        }
    };
    request(
        requestOptions,
        (err, { statusCode }, body) => {
            let data = [];
            if (statusCode === 200 && body.length) {
                data = body.map(item => {
                    item.distance = formatDistance(item.distance);
                    return item;
                });
            }
            renderHomepage(req, res, body);
        }
    );
};

const renderDetailPage = (req, res, location) => {
    res.render('location-info', {
        title: `${location.name} | Loc8r - Find places with wifi`,
        pageHeader: { title: location.name },
        location,
        sidebar: {
            content: ' is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you have been, and you like it - or you don\'t, please leave a review to help other people just like you.'
        }
    });
};

const showError = (req, res, status) => {
    let title = '';
    let content = '';
    if (status === 404) {
        title = '404, Page not found';
        content = 'Oh dear, Looks like you can\'t find this page. Sorry.';
    } else {
        title = `${status}, something\s gone wrong.`;
        content = 'Something, somewhere, has gone just a little bit wrong.'
    }
    res.status(status);
    res.render('generic-text', {
        title,
        content
    });
};

const getLocationInfo = (req, res, callback) => {
    const path = `/api/locations/${req.params.locationsid}`
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {}
    };
    request(requestOptions, (err, { statusCode }, body) => {
        let data = body;
        if (statusCode === 200) {
            data.coords = {
                lng: body.coords.coordinates[0],
                lat: body.coords.coordinates[1]
            }
            callback(req, res, data)
        } else {
            showError(req, res, statusCode)
        }
    });
};

// Get location info page
const locationInfo = (req, res) => {
    getLocationInfo(req, res,
        (req, res, responseData) => {
            renderDetailPage(req, res, responseData);
        }
    );
};

const renderReviewForm = (req, res, { name }) => {
    res.render('location-review-form', {
        title: `Review ${name} on Loc8r`,
        pageHeader: { title: `Review ${name}` },
        error: req.query.err
    });
}

// Get add reviews page
const addReview = (req, res) => {
    getLocationInfo(req, res,
        (req, res, responseData) => {
            renderReviewForm(req, res, responseData);
        }
    );
};

// Post review
const doAddReview = (req, res) => {
    const locationid = req.params.locationsid;
    const path = `/api/locations/${locationid}/reviews`;
    const postdata = {
        author: req.body.name,
        rating: parseInt(req.body.rating, 10),
        reviewText: req.body.review
    };
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'POST',
        json: postdata
    };
    if (!postdata.author || !postdata.reviewText || !postdata.rating) {
        res.redirect(`/location/${locationid}/review/new?err=val`)
    } else {
        request(requestOptions,
            (err, { statusCode }, { name }) => {
                if (statusCode === 201) {
                    res.redirect(`/location/${locationid}`);
                } else if (statusCode === 400 && name && name === 'ValidationError') {
                    res.redirect(`/location/${locationid}/review/new?err=val`);
                } else {
                    showError(req, res, statusCode);
                }
            }
        );
    }
};

module.exports = { homeList, locationInfo, addReview, doAddReview };