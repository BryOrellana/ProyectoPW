var express = require('express');
var router = express.Router();
var userController = require('../controllers/UserController');

/* GET users listing. */
router.get('/:carnet', userController.getOne);
router.get('/', userController.getAll);

router.post('/',userController.register);
router.put('/:carnet', userController.update);
router.delete('/:carnet',userController.delete);

module.exports = router;