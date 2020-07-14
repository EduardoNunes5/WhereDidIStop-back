const Content = require('../models/content.js');

exports.postContent = async(content) => await Content.create(content);
exports.getUserContents = async(userId) => await Content.findAll({where:{user_pk: userId}})
