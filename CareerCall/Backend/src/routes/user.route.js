const express = require('express');
const { signup, login } = require('../controlers/user.controler.js')

const User = express.Router();
User.post('/signup', signup);
User.post('/login', login);
 
module.exports = User;
