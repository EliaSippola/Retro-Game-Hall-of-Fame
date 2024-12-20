const exp = require("express");
const router = exp.Router();
const control = require('../controllers/api_game_controller');

router.get('/:id', control.getOne);

router.get('/', control.get);

router.put('/update', control.updateOne);

module.exports = router;