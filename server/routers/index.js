const { Router } = require('express');
const router = new Router();
const UserRouter = require('./userRouter');
const DeviceRouter = require('./deviceRouter');
const BrandRouter = require('./brandRouter');
const TypeRouter = require('./typeRouter');

router.use('/user', UserRouter);
router.use('/type', TypeRouter);
router.use('/brand', BrandRouter);
router.use('/device', DeviceRouter);

module.exports = router;