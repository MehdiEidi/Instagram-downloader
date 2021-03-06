const express = require('express')

const controller = require('../controllers/controller')

const router = express.Router()

router.get('/', controller.getIndex)

router.post('/', controller.postLink)

module.exports = router