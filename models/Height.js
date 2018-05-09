const mongoose = require('mongoose');
const Schema = mongoose.Schema

const HeightSchema = new Schema({
  inch: Number,
  cm: Number,
  feet: Number,
});

Height = mongoose.model('Height', HeightSchema)

module.exports = Height
