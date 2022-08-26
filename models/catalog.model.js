const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  }
});

const catalogSchema = new mongoose.Schema({
  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  products: [productSchema]
});

const orderSchema = new mongoose.Schema({
  buyerId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  products: [productSchema]
})

const Product = mongoose.model('Product', productSchema);
const Catalog = mongoose.model('Catalog', catalogSchema);
const Order = mongoose.model('Order', orderSchema);

module.exports = { Product, Catalog, Order }; 