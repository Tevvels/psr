const router = require('express').Router();
const houseRoutes = require('./houses');

router.use('/houses',houseRoutes);

module.exports = router;

