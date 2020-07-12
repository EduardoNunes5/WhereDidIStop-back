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


exports.postUser = async(req, res, next)=>{
    console.log(req.body);
    const name = req.body.name;
    //to treat later
    const password = req.body.password;
    const user = await userRepository.postUser({name, password});
    res.status(201).json(user);
}
