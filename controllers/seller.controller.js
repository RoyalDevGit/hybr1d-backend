const { Catalog } = require('../models/catalog.model');

const createCatalog = async (req, res) => {
  const { products, sellerId } = req.body;
  const newCatalog = new Catalog({ products, sellerId });
  try {
    await newCatalog.save();
    return res.json()
  } catch (error) {
    return res.status(401).json({
      message: error.message
    });
  }
}

const getOrders = async (req, res) => {
  const { sellerId } = req.body;
  const orders = await Catalog.find({ sellerId });
  return res.json(orders);
}

module.exports = { createCatalog, getOrders };