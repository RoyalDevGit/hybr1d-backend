const { createCatalog, getOrders } = require('../controllers/seller.controller');

const router = require('express').Router();

router.route('/create-catalog').post(createCatalog);
router.route('/getOrders').get(getOrders);

module.exports = router;