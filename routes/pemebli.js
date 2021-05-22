const router = require('express').Router();
const pembeli = require('../controllers/PembeliController')
router.post('/create', pembeli.post )
router.get('/', pembeli.get)

module.exports = router