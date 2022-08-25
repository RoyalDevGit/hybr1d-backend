const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    required: 'Email is required'
  },
  password: {
    type: String,
    required: 'Password is required'
  },
  isBuyer: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model('User', userSchema);