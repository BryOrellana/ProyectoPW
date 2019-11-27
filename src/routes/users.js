var express = require('express');
var router = express.Router();
var userController = require('../controllers/UserController');

/* GET users listing. */
router.get('/:carnet:password', userController.getOne);
router.get('/all', userController.getAll);

router.post('/',userController.register);
router.put('/:carnet', userController.update);
router.delete('/:carnet',userController.delete);

module.exports = router;