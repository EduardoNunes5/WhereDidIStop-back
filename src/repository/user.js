const User = require('../models/user');

exports.getUsers = ()=> User.findAll();

exports.getByEmail = (email) => User.findOne({where:{email: email}});

exports.postUser = (user)=> User.create({name: user.name, email: user.email, password:user.hashedPassword});
