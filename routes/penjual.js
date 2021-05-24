const router = require("express").Router();
const PenjualController = require("../controllers/PenjualController");

router.post("/create", PenjualController.create);
router.get("/", PenjualController.findall);

module.exports = router;
