const express = require('express');
const auth = require('../middleware/isAuth')
const contentController = require('../controllers/content');
const routes = express.Router();


routes.post('/contents', auth.isAuthorized, contentController.postContent);
routes.get('/contents', auth.isAuthorized, contentController.getContents);

module.exports = routes;
