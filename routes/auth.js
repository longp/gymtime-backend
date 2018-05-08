const express = require('express');
const router = express.Router();
const controllers = require('../controllers')



router.get('/test', controllers.auth.test)

module.exports = router
