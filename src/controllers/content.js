const contentRepository = require('../repository/content.js');


exports.postContent = async(req, res, next)=>{
    try{
        const {title, platform, page, episode, finished} = req.body;
        const user_pk = req.user.user;

        const content = await contentRepository.postContent({title,platform,page,episode,finished, user_pk});
        console.log('content:::', content)
        if(content){
            return res.status(201).json({msg: 'content saved successfully'})
        }
    }catch(err){
        console.log('errr', err);
        res.status(500).json({msg:'internal error', err});
    }
}
