const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isBuyer: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('User', userSchema);