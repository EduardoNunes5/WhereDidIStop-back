const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT;
const sequelize = require('./services/db');

const authRouter = require('./routes/auth');
const contentRouter = require('./routes/content');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api/v1',authRouter);
app.use('/api/v1',contentRouter);

sequelize.sync()
.then(result=>{
    app.listen(port, ()=>{
        console.log('listening on port ', port);
    })
})
.catch(err =>{
    console.log('err: ', err)
})
