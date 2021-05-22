const router = require('express').Router();
const serialcontroller = require('../controllers/SerialnumberController')

router.post('/login', serialcontroller.post)

module.exports = router;