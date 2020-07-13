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
    email:{
        type:Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password:{
        type:Sequelize.STRING,
        allowNull: false
    }
});

User.prototype.toJSON = function(){
    const obj = Object.assign({}, this.get());
    delete obj.password;
    return obj;
}

module.exports = User;
