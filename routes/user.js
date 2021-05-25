const router = require('express').Router();
const UserController = require('../controllers/UserController')

router.post('/create', UserController.create);
router.post('/login', UserController.login);
router.get('/', UserController.findall);

module.exports = router;