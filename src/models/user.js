const Sequelize = require('sequelize');
const sequelize = require('../services/db');


const User = sequelize.define('User',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type:Sequelize.STRING,
        allowNull: false
    },
    password:{
        tyle:Sequelize.STRING,
        allowNull: false
    }
})

module.exports = User;
