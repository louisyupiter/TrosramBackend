const router = require('express').Router()
const InputController = require('../controllers/Inputserial')

router.post('/create', InputController.post)

module.exports = router