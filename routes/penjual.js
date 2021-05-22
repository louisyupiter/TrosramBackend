const router = require('express').Router();
const PenjualController = require('../controllers/PenjualController')
const multer = require('multer')
const upload = multer({dest: '/images/'})

router.post('/create', upload.single('image'), PenjualController.post)
router.get('/', PenjualController.get)

module.exports = router;