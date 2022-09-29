const { Router } = require('express');
const TypeController = require('../controllers/typeController');
const CheckRole = require('../middeleware/CheckRoleHandling');
const router = new Router();

router.post('/', CheckRole('ADMIN'), TypeController.create);
router.get('/', TypeController.getAll);

module.exports = router;