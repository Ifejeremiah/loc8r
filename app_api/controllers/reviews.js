const mongoose = require('mongoose');
const Loc = mongoose.model('Location');

const doSetAverageRating = (location) => {
  if (location.reviews && location.reviews.length > 0) {
    const count = location.reviews.length;
    const total = location.reviews.reduce((acc, { rating }) => {
      return acc + rating;
    }, 0);

    location.rating = parseInt(total / count, 10);
    location.save(err => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Average rating updated to ${location.rating}`);
      }
    });
  }
};

const updateAverageRating = (locationId) => {
  Loc.findById(locationId)
    .select('rating reviews')
    .exec((err, location) => {
      if (!err) {
        doSetAverageRating(location);
      }
    });
};

const doAddReview = (req, res, location) => {
  if (!location) {
    return res.status(404).json({ message: 'Location Not Found' });
  } else {
    const { author, rating, reviewText } = req.body;
    location.reviews.push({
      author,
      rating,
      reviewText
    });
    location.save((err, location) => {
      if (err) {
        res.status(400).json(err)
      } else {
        updateAverageRating(location._id);
        const thisReview = location.reviews.slice(-1).pop();
        res.status(201).json(thisReview);
      }
    });
  }
};

const reviewsCreate = (req, res) => {
  const locationId = req.params.locationsid;
  if (locationId) {
    Loc
      .findById(locationId)
      .exec((err, location) => {
        if (err) {
          return res.status(400).json(err);
        } else {
          doAddReview(req, res, location);
        }
      });
  } else {
    return res.status(404).json({ message: 'Locationid Is Required' });
  }
};

const reviewsReadOne = (req, res) => {
  Loc
    .findById(req.params.locationsid)
    .select('name reviews')
    .exec((err, location) => {
      if (!location) {
        return res.status(404).json({ message: 'Location Not Found' });
      } else if (err) {
        return console.log(err.message),
          res.status(404).json(error);
      } if (location.reviews && location.reviews.length > 0) {
        const review = location.reviews.id(req.params.reviewsid);
        if (!review) {
          return res.status(404).json({ message: 'Not Found, Valid Reviewsid Required' });
        } else {
          const response = {
            location: {
              name: location.name,
              id: req.params.locationsid
            },
            review
          };
          res.status(200).json(response);
        }
      } else {
        return res.status(404).json({ message: 'No Reviews Found' });
      }
    });
};

const reviewsUpdateOne = (req, res) => {
  if (!req.params.locationsid || !req.params.reviewsid) {
    return res.status(404).json({ message: 'Not Found, Locationsid And Reviewsid Are Both Required' });
  }
  Loc.findById(req.params.locationsid)
    .select('reviews')
    .exec((err, location) => {
      if (!location) {
        return res.status(404).json({ message: 'Location Not Found' });
      } else if (err) {
        return res.status(400).json(err);
      }
      if (location.reviews && location.reviews.length > 0) {
        const thisReview = location.reviews.id(req.params.reviewsid);
        if (!thisReview) {
          res.status(404).json({ message: 'Review Not Found' });
        } else {
          thisReview.author = req.body.author;
          thisReview.rating = req.body.rating;
          thisReview.reviewText = req.body.reviewText;
          location.save((err, location) => {
            if (err) {
              res.status(400).json(err);
            } else {
              updateAverageRating(location._id);
              res.status(200).json(thisReview);
            }
          });
        }
      } else {
        res.status(404).json({ message: 'Reviews Not Exist' });
      }
    });
};

const reviewsDeleteOne = (req, res) => {
  const locationid = req.params.locationsid;
  const reviewid = req.params.reviewsid;
  if (!locationid || !reviewid) {
    return res.status(400).json({ message: 'Not Found, Locationid And Reviewid Are Both Required' });
  }
  Loc
    .findById(locationid)
    .select('reviews')
    .exec((err, location) => {
      if (!location) {
        return res.status(404).json({ message: 'Location Not Found' });
      } else if (err) {
        return res.status(400).json(err);
      }
      if (location.reviews && location.reviews.length > 0) {
        if (!location.reviews.id(reviewid)) {
          return res.status(404).json({ message: 'Review Not Found' });
        } else {
          location.reviews.id(reviewid).remove();
          location.save((err) => {
            if (err) {
              return res.status(400).json(err)
            } else {
              updateAverageRating(location._id);
              res.status(204).json(null);
            }
          });
        }
      } else {
        res.status(404).json({ message: 'No Review To Delete' });
      }
    });
};

module.exports = {
  reviewsCreate,
  reviewsReadOne,
  reviewsUpdateOne,
  reviewsDeleteOne
}