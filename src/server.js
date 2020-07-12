const express = require('express');
const app = express();
const port = process.env.PORT;
const sequelize = require('./services/db');

const userRouter = require('./routes/user');

app.use(express.json());
app.use('/api/v1/users',userRouter);

sequelize.sync()
.then(result=>{
    app.listen(port, ()=>{
        console.log('listening on port ', port);
    })
})
.catch(err =>{
    console.log('err: ', err)
})
