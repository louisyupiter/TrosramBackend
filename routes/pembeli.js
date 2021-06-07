const router = require("express").Router();
const PembeliController = require("../controllers/PembeliController");
const {
  imagesMultiAdd,
  videos,
} = require("../middleware/file");

router.post("/:idqrcode", PembeliController.update);
router.post("/images/:idqrcode", imagesMultiAdd, PembeliController.updateMultiImage);
router.post("/image1/:idqrcode", imagesMultiAdd, PembeliController.updateImage1);
router.post("/image2/:idqrcode", imagesMultiAdd, PembeliController.updateImage2);
router.post("/image3/:idqrcode", imagesMultiAdd, PembeliController.updateImage3);
router.post("/image4/:idqrcode", imagesMultiAdd, PembeliController.updateImage4);
router.post("/image5/:idqrcode", imagesMultiAdd, PembeliController.updateImage5);
router.post("/image6/:idqrcode", imagesMultiAdd, PembeliController.updateImage6);
router.post("/video/:idqrcode", videos, PembeliController.updatevideo);
router.get("/", PembeliController.findall);
router.get("/:idqrcode", PembeliController.findone);

module.exports = router;
