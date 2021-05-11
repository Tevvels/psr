const router = require('express').Router();
const houseController = require('../../controllers/houseController');

router.route('/')
    .get(houseController.findAll)


module.exports = router;
