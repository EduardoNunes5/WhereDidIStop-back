const User = require('../models/user');

exports.getUsers = ()=> User.findAll();

exports.getById = (id) => User.findByPk(id);