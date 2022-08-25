const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jwt');

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email) return res.status('401').json({
    error: 'Email is required',
  });

  if (!password) return res.status('401').json({
    error: 'Password is required',
  });

  const user = await User.findOne({ email });
  if (!user) {
    return res.status('401').json({
      error: 'User not found',
    });
  };

  if (!bcrypt.compareSync(password, user.password)) {
    return res.status('401').json({
      error: 'Password incorrect',
    });
  }

  const payload = { email, password };
  const token = await jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 31556926 });
  res.json({ token });
}

const register = async (req, res) => {
  const { email, password } = req.body;

  if (!email) return res.status('401').json({
    error: 'Email is required',
  });

  if (!password) return res.status('401').json({
    error: 'Password is required',
  });

  const user = await User.findOne({ email });
  if (user) {
    return res.status('401').json({
      error: 'User already exists',
    });
  }

  const newUser = new User({
    email,
    password: bcrypt.hashSync(password, 10),
  });

  return res.json({ user: newUser });
}

module.exports = { login, register };

