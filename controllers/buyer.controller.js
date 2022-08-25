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

const creatOrder = async (req, res) => {
  const { buyerId, sellerId, products } = req.body;
  const newOrder = new Order({ buyerId, sellerId, products });
  return newOrder;
}