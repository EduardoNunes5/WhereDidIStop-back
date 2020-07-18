const express = require('express');
const auth = require('../middleware/isAuth')
const contentController = require('../controllers/content');
const routes = express.Router();


routes.post('/contents', auth.isAuthorized, contentController.postContent);
routes.get('/contents', auth.isAuthorized, contentController.getContents);
routes.put('/contents/:id', auth.isAuthorized, contentController.putContent);

module.exports = routes;
