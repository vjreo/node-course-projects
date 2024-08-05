const request = require('postman-request');

const geocode = (address, callback) => {
  const access_token = 'pk.eyJ1IjoidmpyZW85MSIsImEiOiJjbHc2b3Nuc3cyMW1sMmlucjBqdmRyZ3NhIn0.eda5GqvO5ujgC1Ho3UydHw'
  const url = `https://api.mapbox.com/search/geocode/v6/forward?q=${address}&access_token=${access_token}`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback(`Unable to connect to location services.`, undefined);
    } else if (response.body.features[0] === undefined) {
      callback(`Unable to find the provided location. Try another search.`, undefined)
    } else {
      callback(undefined, {
        latitude: response.body.features[0].properties.coordinates.latitude,
        longitude: response.body.features[0].properties.coordinates.longitude,
        location: response.body.features[0].properties.full_address,
      });
    }
  });
}

module.exports = geocode;