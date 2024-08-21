const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');

const address = process.argv[2];

if (!address) {
  console.log('Please provide an address.');
} else {
  geocode(address, (error, geoData) => {
    if (error) {
      return console.log(error);
    }
  
    forecast(geoData.location, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
  
      console.log(geoData.location);
      console.log(forecastData);
    });
  });
}

