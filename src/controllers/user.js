const userRepository = require('../repository/user');
const auth = require('../services/auth');
const jwt = require('jsonwebtoken');


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
        const hashedPassword = await auth.hashPassword(password,10);
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

exports.login = async (req, res, next)=>{
    try{
        const {email, password} = req.body;
        const user = await userRepository.getByEmail(email);
        if(!user){
            return res.status(404).json({msg: "user not found"});
        }
        const hashedPassword = user.get().password;
        if(await auth.checkPassword(password, hashedPassword)){
            const token = await auth.genToken(user.id);
            return res.status(200).json({token: token});
        }
        res.status(401).json({msg: 'Wrong password!'})
    }
    catch(err){
        res.status(500).json({msg: "erro: " + err})
    }
}
