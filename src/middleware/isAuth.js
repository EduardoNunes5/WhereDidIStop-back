const auth = require('../services/auth');

exports.isAuthorized = async (req, res, next) =>{
    const authHeader = req.headers.authorization
    const token = authHeader && authHeader.split(" ")[1];
    if(!token){
        return res.status(401).json({msg: "oops! no token has been provided"});
    }
    //either err or the decoded token
     auth.verifyToken(token)
     .then(userId =>{
         req.user = userId;
         next()
     })
     .catch(err =>{
         res.status(401).json(err);
     })


}
