const router = require('express').Router();
// const serialcontroller = require('../controllers/SerialnumberController')
const qrcode = require('../controllers/QrcodeController')

router.post('/login', qrcode.create)

module.exports = router;