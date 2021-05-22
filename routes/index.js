const router = require('express').Router();
const pembeli = require('./pemebli');
const penjual = require('./penjual');
const qrcode = require('./qrcode');
const input = require('./input');

router.use('/pembeli', pembeli);
router.use('/penjual', penjual);
router.use('/code', qrcode)
router.use('/serialnumber', input)

module.exports = router