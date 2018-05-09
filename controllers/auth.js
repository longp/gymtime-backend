const {User, Weight, Height} = require('../models')
const Promise = require('bluebird')
exports.test = (req,res) => {
  res.json('test')
}

exports.testCreate = (req,res) => {
  let userData = {
    userName: 'longp',
    firstName: 'long',
    lastName: 'phan',
    email: 'long@long.com',
    password: 'butt'
  }

  var newUser = new User(userData)
  return newUser.save()
  .then((response) => {
    console.log(response);;
    res.json(response)
  })
  .catch((error) => res.json(error))

}
