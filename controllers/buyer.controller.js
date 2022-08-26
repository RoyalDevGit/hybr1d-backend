const User = require('../models/user.model');
const { Catalog, Order, Product } = require('../models/catalog.model');

const getSellerList = async (req, res) => {
  const users = await User.find({ isBuyer: false });
  return users;
}

const getCatalog = async (req, res) => {
  const sellerId = req.params.seller_id;
  const catalog = await Catalog.findOne({ sellerId });
  return catalog;
}

const createOrder = async (req, res) => {
  const { buyerId, products } = req.body;
  const sellerId = req.params.seller_id;
  const newOrder = new Order({ buyerId, sellerId, products });
  return newOrder;
}

module.exports = { getSellerList, getCatalog, createOrder };