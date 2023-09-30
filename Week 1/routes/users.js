var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users');

/* Create user Object. */
router.post('/', usersController.createUser);

/* GET All users listing. */
router.get('/', usersController.getUser);

/* Delete user object. */
router.post('/delete', usersController.deleteUser);

module.exports = router;
