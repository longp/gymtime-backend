const Models = require('../models')


exports.test = (req,res) => {
  res.json('test')
}

exports.testCreate = (req,res) => {
  res.json(Models)
}
