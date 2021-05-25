const router = require('express').Router();
const QrcodeController = require('../controllers/QrcodeController')

router.post('/create', QrcodeController.create);
router.post('/validate', QrcodeController.validate);
router.get('/print', QrcodeController.printSerialNumber);

module.exports = router;