/* eslint-disable array-callback-return */
const Listing = require('./index.js');
const Places = require('./sdc/mongodb-schema.js');

// ./index.js
// ./sdc/mongodb-schema.js


var placeid = Math.floor(Math.random()*10000);

module.exports = {
  getPlaces: (callback) => {
    Places.find( { "id": placeid }, (error, listings) => {
      if (error) {
        console.log('cannot search database');
        callback(error);
      } else {
        console.log('database searched');
        callback(null, listings);
      }
    });
  },

  getListings: (callback) => {
    Listing.find((error, listings) => {
      if (error) {
        console.log('cannot search database');
        callback(error);
      } else {
        console.log('database searched');
        callback(null, listings);
      }
    });
  },
};