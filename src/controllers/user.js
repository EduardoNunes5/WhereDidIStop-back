const userRepository = require('../repository/user');
exports.getUsers = async(req, res, next)=>{
    const users =  await userRepository.getUsers();
    if(users.length > 0){
        return res.status(200).json(users);
    }
    res.status(204).json(users);
}

exports.getUser = async(req, res, next)=>{
    const user = await userRepository.getById(req.params.id);
    if(user){
        return res.status(200).json(user);
    }
    res.status(204).json(user);
}
