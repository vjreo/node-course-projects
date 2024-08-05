const request = require('postman-request');

const forecast = (location, callback) => {
  const access_key = 'de227e1c24732c3822fe54ea1954d72f'
  const url = `http://api.weatherstack.com/current?access_key=${access_key}&query=${location}&units=f`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to weather service.');
    } else if (response.body.error) {
      console.log('Unable to find location');
    } else {
      const weatherDescription = response.body.current.weather_descriptions[0];
      const currentTemp = response.body.current.temperature;
      const feelsLikeTemp = response.body.current.feelslike;

      callback(undefined, 
        `${weatherDescription}. It is currently ${currentTemp} fahrenheit out. It feels like ${feelsLikeTemp} fahrenheit out.`
      );
    }
  });
}

module.exports = forecast;