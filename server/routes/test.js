const express = require('express')
const router = express.Router()

// importing controller
const {getTest} = require('../controllers/test')
// import middlewares

// api routes
router.get('/test', getTest)

module.exports = router