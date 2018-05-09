require('dotenv').config()
const express = require('express')
const app = express();

const routes = require('./routes')

require('./db/mongodb')

for (var prop in routes) {
  app.use('/v1/' + prop , routes[prop])
}

app.use('/', (req,res) => {
  res.json('hohoh21ooh')
})

module.exports = app
