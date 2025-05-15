const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: String,
  description: String,
  duration: Number,
  price: Number
});

module.exports = mongoose.model('Service', serviceSchema);
