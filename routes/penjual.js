const router = require("express").Router();
const PenjualController = require("../controllers/PenjualController");

router.post("/:idqrcode", PenjualController.update);
router.get("/", PenjualController.findall);
router.get("/:idqrcode", PenjualController.findone);

module.exports = router;
