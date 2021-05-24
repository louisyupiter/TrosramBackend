const router = require('express').Router()
const InputController = require('../controllers/Inputserial')

router.post('/create', InputController.post)
router.post('/validate', InputController.validate)

module.exports = router