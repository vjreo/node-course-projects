const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');

// Path definitions
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    message: 'If you are experiencing any issues, reach out here!',
    title: 'Help',
  });
});

app.get('/weather', (req, res) => {
  let address = req.query.address;

  if (!address) {
    return res.send({
      error: 'You must provide a valid address.'
    });
  }
    
  geocode(address, (error, geoData) => {
      if (error) {
        return res.send({ error });
      }
    
      forecast(geoData.location, (error, forecastData) => {
        if (error) {
          return res.send({ error });
        }
    
        res.send({
          address: address,
          location: geoData.location,
          forecast: forecastData,
        })
      });
    });
  });

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    errorMessage: 'Help article not found'
  })
});

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    errorMessage: 'Page Not Found',
  })
});

app.listen(3000, () => {
  console.log('Server is running on port 3000...');
});