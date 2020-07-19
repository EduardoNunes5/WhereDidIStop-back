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
        page:{
            type:Sequelize.STRING(5)
        },
        episode:{
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
        }},
        {
            validate:{
                pageOrEpisode: function(){
                    if(!((!this.page && this.episode) || (this.page && !this.episode))){
                        throw new Error('require either episode or page');
                    }
                }
            }
        }
)

Content.prototype.toJSON = function(){
    const obj = Object.assign({}, this.get());
    if(!obj.page){
        delete obj.page
    }
    else{
        delete obj.episode;
    }
    return obj;
}

module.exports = Content;
