const Sequelize = require('sequelize');
const sequelize = require('../services/db');

const Content = sequelize.define('Content',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title:{
        type:Sequelize,STRING,
        notNull: true
    },
    platform:{
        type:Sequelize.STRING,

    },
    episode:{
        type:Sequelize.INTEGER
    },
    finished:{
        type:Sequelize.BOOLEAN
    },
    user_pk:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
            model:'User', key: 'id'
        },
        ondelete:'CASCADE'
    }
})


module.exports = Content;
