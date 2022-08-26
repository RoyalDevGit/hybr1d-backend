const User = require('../models/user.model');
const { Catalog, Order, Product } = require('../models/catalog.model');

const getSellerList = async (req, res) => {
  const users = await User.find({ isBuyer: false });
  return res.json(users);
}

const getCatalog = async (req, res) => {
  const sellerId = req.params.seller_id;
  const catalog = await Catalog.findOne({ sellerId });
  return res.json(catalog);
}

const createOrder = async (req, res) => {
  const { buyerId, products } = req.body;
  const sellerId = req.params.seller_id;
  const newOrder = new Order({ buyerId, sellerId, products });
  try {
    await newOrder.save();
    return res.json(newOrder);
  } catch (error) {
    return res.status(401).json({
      message: error.message
    });
  }
}

module.exports = { getSellerList, getCatalog, createOrder };