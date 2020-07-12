const User = require('../models/user');

exports.getUsers = ()=> User.findAll();

exports.getById = (id) => User.findByPk(id);

exports.postUser = (user)=> User.create({name: user.name, password:user.password});
