const router = require('express').Router();
const PembeliController = require('../controllers/PembeliController');
const extractFile = require("../middleware/file");

router.post('/create', extractFile, PembeliController.create)
router.get('/', PembeliController.findall)

module.exports = router