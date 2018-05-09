const mongoose = require('mongoose');
const Schema = mongoose.Schema

const WeightSchema = new Schema({
  kg: Number,
  lbs: Number,
});

Weight = mongoose.model('Weight', WeightSchema)

module.exports = Weight
