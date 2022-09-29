const { Router } = require('express');
const BrandController = require('../controllers/brandController');
const CheckRole = require('../middeleware/CheckRoleHandling');
const router = new Router();

router.post('/', CheckRole('ADMIN'), BrandController.create);
router.get('/', BrandController.getAll);

module.exports = router;