const mongoose = require('mongoose');
const Promise = require('bluebird');
mongoose.Promise = Promise
mongoose.connect(process.env.MONGODB_ROOT);

const mongodb = mongoose.connection;
module.exports = mongodb;
