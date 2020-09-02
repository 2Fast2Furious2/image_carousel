const mongoose = require('mongoose');

mongoose.connect('mongodb://database/suggestedListings', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to database!');
});

const placesSchema = new mongoose.Schema({

  placeID: {
    type: Number,
    required: true
  },
  image: String,
  name: String,
  description: String,
  rate: Number,
  avgRating: Number,
  numberOfRatings:  {
    type: Number,
    default: 0
  },
  avgRating: Number,
  wasLiked: Boolean,
  posted: Date,
  longitude: String,
  latitude: String,
  category: String,
  superhost: {
    type: Boolean,
    default: false
  },
  placeURL: String,
  relatedPlaces: Array

});

//csv with giant stringified array and write a mongo command in javascript that will turn the stringified arrays into actual arrays or directly import to mongo with the driver (quotes in a csv avoid commas)

const likedListSchema = new mongoose.Schema({

  listID: Number,
  name: String,
  image: String,
  rooms: Array,
  date: String
});


const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;