const mongoose = require('mongoose');

mongoose.connect('mongodb://database/suggestedListings', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to database!');
});

const placesSchema = new mongoose.Schema({

  placeID: Number,
  image: String,
  name: String,
  description: String,
  rate: Number,
  avgRating: Number,
  numberOfRatings: Number,
  avgRating: Number,
  wasLiked: Boolean,
  posted: Date,
  longitude: String,
  latitude: String,
  category: String,
  superhost: Boolean,
  placeURL: String,
  relatedPlaces: Array

});

const likedListSchema = new mongoose.Schema({

  listID: Number,
  name: String,
  image: String,
  rooms: Array,
  date: String
});


const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;