const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
exports.hashPassword = async (password)=>{
    return await bcrypt.hash(password, 10);
}

exports.checkPassword = async(plainPassword, hashedPassword)=>{
    return await bcrypt.compare(plainPassword, hashedPassword);
}

exports.genToken = async (userId)=>{
    return await jwt.sign({userId}, process.env.ACCESS_TOKEN_SECRET);
}

exports.verifyToken = async(token)=>{
    return await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
}
