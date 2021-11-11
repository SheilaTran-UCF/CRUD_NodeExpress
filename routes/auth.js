const express = require('express');
const router = express.Router();

const AuthConttroller = require('../controllers/AuthController');

router.post('/register', AuthConttroller.register);
router.post('/login', AuthConttroller.login);

module.exports = router;
