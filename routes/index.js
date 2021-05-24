const router = require('express').Router();
const pembeli = require('./pembeli');
const penjual = require('./penjual');
const qrcode = require('./qrcode');
const errorHandler = require('../middleware/err');

router.use('/code', qrcode);
router.use('/penjual', penjual);
router.use('/pembeli', pembeli);
router.use(errorHandler);

module.exports = router