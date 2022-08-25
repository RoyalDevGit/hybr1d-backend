const router = require('express').Router();
const { login, register } = require('../controllers/auth.controller');

router.route('/api/auth/login').post(login);
router.route('/api/auth/register').post(register);

module.exports = router;