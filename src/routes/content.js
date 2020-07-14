const express = require('express');
const auth = require('../middleware/isAuth')
const contentController = require('../controllers/content');
const routes = express.Router();


routes.post('/content', auth.isAuthorized, contentController.postContent);


module.exports = routes;
