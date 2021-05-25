const router = require('express').Router();
const PembeliController = require('../controllers/PembeliController');
const extractFile = require("../middleware/file");

router.post('/:idqrcode', extractFile, PembeliController.update)
router.get('/', PembeliController.findall)

module.exports = router