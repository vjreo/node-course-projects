// Practice
// http requests without a library (core module instead)
  // https is a paid module so not using it
  // using http instead

const http = require('http');

const access_key = '';
const url = `http://api.weatherstack.com/current?access_key=${access_key}&query=45,75&units=f`;

const request = http.request(url, (response) => { 
  let data = '';

  response.on('data', (chunk) => {
    data = data + chunk.toString();
  });

  response.on('end', () => {
    const body = JSON.parse(data);
    console.log(body);
  });

});

request.on('error', (error) => {
  console.log('An error', error);
});

request.end();