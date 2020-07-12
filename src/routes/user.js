const express = require('express');
const routes = express.Router();
const userController = require('../controllers/user');

routes.get('/', userController.getUsers);
routes.get('/:id', userController.getUser);




module.exports = routes;
