const userRepository = require('../repository/user');
const bcrypt = require('bcrypt');


exports.getUsers = async(req, res, next)=>{
    const users =  await userRepository.getUsers();
    if(users.length > 0){
        return res.status(200).json(users);
    }
    res.status(204).json(users);
}

exports.getUser = async(req, res, next)=>{
    const user = await userRepository.getByEmail(req.params.email);
    if(user){
        return res.status(200).json(user);
    }
    res.status(204).json(user);
}


exports.signUp = async(req, res, next)=>{
    try{
        const {name, email, password} = req.body;
        const hashedPassword = await bcrypt.hash(password,10);
        console.log(hashedPassword);
        let user = await userRepository.getByEmail(email);
        if(user){
            return res.status(409).json({msg: 'User with such email address already exists'})
        }
        user = await userRepository.postUser({name, email, hashedPassword});
        res.status(201).json(user);
    }
    catch(err){
        res.status(500).json({msg: 'Internal error: ' + err});
    }
}
