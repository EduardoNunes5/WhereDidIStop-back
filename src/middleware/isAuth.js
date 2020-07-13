const auth = require('../services/auth');

exports.isAuthorized = async (req, res, next) =>{
    const authHeader = req.headers.authorization
    const token = authHeader && authHeader.split(" ")[1];
    if(!token){
        return res.status(401).json({msg: "oops! no token has been provided"});
    }
    //either err or the decoded token
    const canAccess = await auth.verifyToken(token);
    if(!access)
        return res.status(401).json({msg: "wrong authentication credentials"})
    else{
        req.user = canAccess;
        next()
    }

}
