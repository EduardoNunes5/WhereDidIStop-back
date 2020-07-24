const Sequelize = require('sequelize');
const sequelize = require('../services/db');

const Content = sequelize.define('Content',{
        id:{
            type:Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title:{
            type:Sequelize.STRING,
            allowNull: false
        },
        platform:{
            type:Sequelize.STRING,
        },
        stopped_point:{
            type:Sequelize.STRING(5)
        },
        finished:{
            type:Sequelize.BOOLEAN
        },
        user_pk:{
            type: Sequelize.INTEGER,
            allowNull:false,
            references:{
                model:'Users', key: 'id'
            },
            ondelete:'CASCADE'
        }}

)


module.exports = Content;
