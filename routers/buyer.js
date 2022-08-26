const router = require('express').Router();
const { getSellerList, getCatalog, createOrder } = require('../controllers/buyer.controller');

router.route('/list-of-sellers').get(getSellerList);
router.route('/seller-catalog/:seller_id').get(getCatalog);
router.route('/create-order/:seller_id').post(createOrder);

module.exports = router;
