const router = require("express").Router();
const PenjualController = require("../controllers/PenjualController");

router.post("/:idqrcode", PenjualController.update);
router.get("/", PenjualController.findall);

module.exports = router;
