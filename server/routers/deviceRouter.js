const { Router } = require('express');
const DeviceController = require('../controllers/deviceController');
const CheckRole = require('../middeleware/CheckRoleHandling');
const router = new Router();

router.post('/', CheckRole('ADMIN'), DeviceController.create);
router.get('/', DeviceController.getAll);
router.get('/:id', DeviceController.getOne);

module.exports = router;