const mongoose = require('mongoose');

const RestraurantsSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  certificate:{
    type: String,
  },
  nameuz: {
    type: String,
  },
  siteLink: {
    type: String,
  },
  instagram:{
    type: String,
  },
  facebook:{
    type: String,
  },
  telegram: {
    type: String
  }
});

const Restaurants = mongoose.model('Restaurants', RestraurantsSchema);

module.exports = { RestraurantsSchema, Restaurants };