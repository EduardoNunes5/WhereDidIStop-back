const Content = require('../models/content.js');

exports.postContent = async(content) => await Content.create(content);

exports.getUserContents = async(userId) => await Content.findAll({where:{user_pk: userId}});

exports.getById = async(contentId) => await Content.findOne({where:{id: contentId}});

exports.updateContent = async(contentId, payload) => {
    const content = await this.getById(contentId);
    if(content){
        return content.update(payload,{
            where:{
                user_pk: payload.ownerId,
                id: contentId
                }
            })
    }
    else{
        return content;
    }
}
