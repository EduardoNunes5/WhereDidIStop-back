
exports.getUsers = (req, res, next)=>{
    res.send('users');
}

exports.getUser = (req, res, next)=>{
    res.send(req.params.id);
}
