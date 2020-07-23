const contentRepository = require('../repository/content.js');


exports.postContent = async (req, res, next)=>{
    try{
        const user_pk = req.user.userId;

        const content = await contentRepository.postContent({req.body, user_pk});
        if(content){
            return res.status(201).json({content})
        }
    }catch(err){
        console.log('errr', err);
        res.status(500).json({msg:'internal error', err});
    }
}

exports.getContents = async (req, res, next)=>{
    const contents = await contentRepository.getUserContents(req.user.userId);
    if(contents[0]){
        return res.status(200).json(contents);
    }
    res.status(204).json(contents);
}


exports.putContent = async (req, res, next) =>{
    try{
        const contentId = req.params.id;
        const updatedContent = req.body;
        const result = await contentRepository.updateContent(contentId, updatedContent, req.user.userId);
        if(result){
            return res.status(200).json(result);
        }
        res.status(404).json('content not found');
    }catch(err){
        res.status(500).json(err);
    }

}

exports.deleteById = async (req, res, next) =>{
    try{
        const contentId = req.params.id;
        const deletedContent = await contentRepository.deleteById(contentId, req.user.userId);
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

exports.deleteAll = async (req, res, next) =>{
    try{
        const deletedContents = await contentRepository.deleteAll(req.user.userId);
        res.status(200).json({msg: `${deletedContents[0]} content(s) deleted`});
    }catch(err){
        res.status(500).json(err);
    }
}
