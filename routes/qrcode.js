const router = require('express').Router();
const qrcode = require('../controllers/QrcodeController')

router.post('/create', qrcode.create);
router.post('/validate', qrcode.validate);

module.exports = router;