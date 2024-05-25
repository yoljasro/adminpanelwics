const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
  image: {
    type: String,
  },
 title:{
  type: String,
 },
 description:{
  type: String,
 },
 date: {
  type: String,
 }

});

const News = mongoose.model('News', NewsSchema);

module.exports = { NewsSchema, News };