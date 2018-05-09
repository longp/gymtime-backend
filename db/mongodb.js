var mongoose = require('mongoose');
mongoose.connect(MONGODB_ROOT);

var mongodb = mongoose.connection;
module.exports = mongodb;
