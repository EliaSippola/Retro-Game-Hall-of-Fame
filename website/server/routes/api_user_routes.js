const exp = require("express");
const router = exp.Router();
const control = require('../controllers/api_user_controller');

router.post('/login', control.login);

router.post('/', control.getAll);

router.post('/create', control.createUser);

router.put('/changepass', control.updatePass);

router.put('/update', control.updateUser);

router.delete('/delete', control.deleteUser);

module.exports = router;