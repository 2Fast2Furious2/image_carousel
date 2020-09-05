/* eslint-disable array-callback-return */
const Listing = require('./sdc/mongodb-schema.js');


// ./index.js
// ./sdc/mongodb-schema.js

// module.exports = {
//   getListings: (callback) => {
//     Listing.find((error, places) => {
//       if (error) {
//         console.log('cannot search database');
//         callback(error);
//       } else {
//         console.log('database searched');
//         callback(null, places);
//         console.log(places);
//       }
//     });
//   },
// };


module.exports = {
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