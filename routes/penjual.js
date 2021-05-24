const router = require('express').Router();
const PenjualController = require('../controllers/PenjualController')
const multer = require('multer')
const Post = require('../model/Penjual') 

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, new Date().getTime() + "-" + file.originalname);
    },
  });
  const upload = multer({ storage: fileStorage });


router.post('/create',upload.single('image'), PenjualController.create)

router.get('/', PenjualController.get)

module.exports = router;