const exp = require("express");
const router = exp.Router();
const control = require('../controllers/api_user_controller');

router.get('/', control.get);

module.exports = router;