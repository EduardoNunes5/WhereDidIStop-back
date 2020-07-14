const Content = require('../models/content.js');

exports.postContent = async(content) => await Content.create(content);
