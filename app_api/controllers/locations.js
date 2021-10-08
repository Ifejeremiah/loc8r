const mongoose = require('mongoose');
const Loc = mongoose.model('Location');

const locationsListByDistance = async (req, res) => {
  const lng = parseInt(req.query.lng);
  const lat = parseInt(req.query.lat);
  const maxDist = parseInt(req.query.maxdistance);
  if (!maxDist && maxDist !== 0) {
    return res.status(400).json({ message: 'Maximum distance query (maxdistance) is required' });
  };

  const near = {
    type: 'Point',
    coordinates: [lng, lat]
  };
  const geoOptions = {
    distanceField: 'distance.calculated',
    key: 'coords',
    spherical: true,
    maxDistance: maxDist, //Play with this...
    $limit: 10
  };
  if ((!lng && lng !== 0) || (!lat && lat !== 0)) {
    return res.status(404).json({ message: 'lng and lat query queries are required' });
  }
  try {
    const results = await Loc.aggregate([
      {
        $geoNear: {
          near,
          ...geoOptions
        }
      }
    ]);
    const locations = results.map(result => {
      return {
        _id: result._id,
        name: result.name,
        address: result.address,
        rating: result.rating,
        facilities: result.facilities,
        distance: `${result.distance.calculated.toFixed()}`
      }
    });
    res.status(200).json(locations);
  } catch (err) {
    res.status(404).json(err);
  }
};

const locationsCreate = (req, res) => {
  if (!req.body.name || !req.body.facilities) {
    return res.status(400).json({ message: 'Invalid Post Request' });
  }
  else {
    Loc.create({
      name: req.body.name,
      address: req.body.address,
      facilities: req.body.facilities.split(','),
      coords: {
        type: 'Point',
        coordinates: [
          parseFloat(req.body.lng),
          parseFloat(req.body.lat)
        ]
      },
      openingTimes: [
        {
          days: req.body.days1,
          opening: req.body.opening1,
          closing: req.body.closing1,
          closed: req.body.closed1
        },
        {
          days: req.body.days2,
          opening: req.body.opening2,
          closing: req.body.closing2,
          closed: req.body.closed2
        }
      ]
    }, (err, location) => {
      if (err) {
        res.status(404).json(err);
      } else {
        res.status(201).json(location);
      }
    });
  }
};

const locationsReadOne = (req, res) => {
  Loc
    .findById(req.params.locationsid)
    .exec((err, location) => {
      if (!location) {
        return res.status(404).json({ status: 'LocationId Not Found' });
      } else if (err) {
        return console.log(err),
          res.status(400).json(err);
      } res.status(200).json(location);
    });
};

const locationsUpdateOne = (req, res) => {
  if (!req.params.locationsid) {
    return res.json(400).json({ message: 'Not Found, Locationid Is Required' });
  }
  Loc.findById(req.params.locationsid)
    .select('-reviews -rating')
    .exec((err, location) => {
      if (!location) {
        return res.status(404).json({ message: 'Locationid Not Found' });
      } else if (err) {
        return res.status(400).json(err);
      }
      location.name = req.body.name;
      location.address = req.body.address;
      location.facilities = req.body.facilities.split(',');
      location.coords = {
        type: 'Point',
        coordinates: [
          parseFloat(req.body.lng),
          parseFloat(req.body.lat)
        ]
      };
      location.openingTimes = [{
        days: req.body.days1,
        opening: req.body.opening1,
        closing: req.body.closing1,
        closed: req.body.closed1
      },
      {
        days: req.body.days2,
        opening: req.body.opening2,
        closing: req.body.closing2,
        closed: req.body.closed2
      }];
      location.save((err, location) => {
        if (err) {
          res.status(400).json(err);
        } else if (!location) {
          res.status(400).json({ message: 'Could Not Save' })
        } else {
          res.status(200).json(location);
        }
      });
    });
  // }
};

const locationsDeleteOne = (req, res) => {
  const locationid = req.params.locationsid;
  if (locationid) {
    Loc
      .findByIdAndRemove(locationid)
      .exec((err, location) => {
        if (err) {
          return res.status(404).json(err.message);
        }
        res.status(204).json(null);
      });
  } else {
    res.status(404).json({ message: locationid });
  }
};

module.exports = {
  locationsListByDistance,
  locationsCreate,
  locationsReadOne,
  locationsUpdateOne,
  locationsDeleteOne
}