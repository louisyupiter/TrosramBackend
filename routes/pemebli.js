const router = require('express').Router();
const pembeli = require('../controllers/PembeliController')
router.post('/create', pembeli.create )
router.post('/pos', pembeli.post )
router.get('/', pembeli.get)

module.exports = router