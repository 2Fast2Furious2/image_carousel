require('newrelic');
const express = require('express');
const path = require('path');
const compression = require('compression');
const expressStaticGzip = require('express-static-gzip');
const model = require('../db/model.js');


const app = express();
app.use(compression());

const PORT = 3011;
app.use('/rooms/:room_id', express.static(path.join(__dirname, '../public')));
// app.use('/rooms/:room_id', expressStaticGzip(path.join(__dirname, '../public')));

app.get('/suggestedListings', (req, res) => {
  console.log('get req working!');
  model.getListings((error, listings) => {
    if (error) {
      console.log('server down');
      res.status(400).send(error);
    } else {
      console.log('GET received!');
      res.status(200).send(listings);
    }
  });
});


app.get('/loaderio-4624791132dd078a648b8612f7bf1b05', (req, res) => {
  console.log('get loader io route working!');
  model.getPlaces((error, listings) => {
    if (error) {
      console.log('server down');
      res.status(400).send(error);
    } else {
      console.log('GET received!');
      res.status(200).send(listings);
    }
  });
});

//new
app.get('/suggestedPlaces', (req, res) => {
  console.log('get req working!');
  model.getPlaces((error, listings) => {
    if (error) {
      console.log('server down');
      res.status(400).send(error);
    } else {
      console.log('GET received!');
      res.status(200).send(listings);
    }
  });
});

app.listen(PORT, (error) => {
  if (error) {
    console.log('Failed Server Connection');
  } else {
    console.log(`Server listening on PORT: ${PORT}`);
  }
});
