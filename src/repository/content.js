const Content = require('../models/content.js');

exports.postContent = async(content) => await Content.create(content);

exports.getUserContents = async(userId) => await Content.findAll({where:{user_pk: userId}});

exports.getById = async(contentId) => await Content.findOne({where:{id: contentId}});

exports.updateContent = async(contentId, payload, userId) => {
    const content = await this.getById(contentId);
    if(content){
        return content.update(payload,{
            where:{
                user_pk: userId,
                id: contentId
                }
            })
    }
    else{
        return content;
    }
}

exports.deleteById = async (contentId, userId) =>{
    const content = await this.getById(contentId);
    if (content){
        content.destroy({where: {user_pk: userId}})
        .then(result => content);
    }
    return content;
}


exports.deleteAll = async (userId)=> await Content.destroy({where:{user_pk: userId}});
