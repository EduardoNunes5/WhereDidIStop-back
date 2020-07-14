const contentRepository = require('../repository/content.js');


exports.postContent = async (req, res, next)=>{
    try{
        const {title, platform, page, episode, finished} = req.body;
        const user_pk = req.user.user;

        const content = await contentRepository.postContent({title,platform,page,episode,finished, user_pk});
        if(content){
            return res.status(201).json({msg: 'content saved successfully'})
        }
    }catch(err){
        console.log('errr', err);
        res.status(500).json({msg:'internal error', err});
    }
}

exports.getContents = async (req, res, next)=>{
    const contents = await contentRepository.getUserContents(req.user.user);
    if(contents[0]){
        return res.status(200).json(contents);
    }
    res.status(204).json(contents);
}
