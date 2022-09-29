const { Router } = require('express');
const UserController = require('../controllers/userController');
const router = new Router();
const AuthHandling = require('../middeleware/AuthHandling');

router.post('/registration', UserController.registration);
router.post('/login', UserController.login);
router.get('/auth', AuthHandling, UserController.auth);

module.exports = router;