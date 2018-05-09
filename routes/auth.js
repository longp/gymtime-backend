const express = require('express');
const router = express.Router();
const controllers = require('../controllers')

router.get('/test', controllers.auth.test)
router.get('/test/create', controllers.auth.testCreate)
module.exports = router
