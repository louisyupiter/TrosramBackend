const router = require("express").Router();
const PembeliController = require("../controllers/PembeliController");
const { images, videos } = require("../middleware/file");

router.post("/:idqrcode", PembeliController.update);
router.post("/image/:idqrcode", images, PembeliController.updateimage);
router.post("/video/:idqrcode", videos, PembeliController.updatevideo);
router.get("/", PembeliController.findall);
router.get("/:idqrcode", PembeliController.findone);

module.exports = router;
