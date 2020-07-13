const express = require('express');
const routes = express.Router();
const authController = require('../controllers/auth');

routes.post('/signup', authController.signUp);
routes.post('/login', authController.login);




module.exports = routes;
