const contentRepository = require('../repository/content.js');


exports.postContent = async (req, res, next)=>{
    try{
        const {title, platform, page, episode, finished} = req.body;
        const user_pk = req.user.user;

        const content = await contentRepository.postContent({title,platform,page,episode,finished, user_pk});
        if(content){
            return res.status(201).json({content})
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


exports.putContent = async (req, res, next) =>{
    try{
        const contentId = req.params.id;
        console.log('Content id:::: ', contentId);
        const updatedContent = req.body;
        updatedContent.ownerId = req.user.user;
        const result = await contentRepository.updateContent(contentId, updatedContent);
        if(result){
            return res.status(200).json(result);
        }
        res.status(404).json('content not found');
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }

}

exports.deleteById = async (req, res, next) =>{
    try{
        const contentId = req.params.id;
        const userId = req.user.user;
        const deletedContent = await contentRepository.deleteById(contentId, userId);
        if(deletedContent){
            res.status(200).json(deletedContent);
        }
        else{
            res.status(404).json('Content not found');
        }
    }catch(err){
        res.status(500).json(err);
    }
}
