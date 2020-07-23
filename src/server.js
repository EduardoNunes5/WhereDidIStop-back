const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT;
const sequelize = require('./services/db');

const authRouter = require('./routes/auth');
const contentRouter = require('./routes/content');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, authorization');
    res.header('Access-Control-Allow-Methods', 'POST, DELETE, PUT, GET');
    next();
})
app.use('/api/',authRouter);
app.use('/api/',contentRouter);

sequelize.sync()
.then(result=>{
    app.listen(port, ()=>{
        console.log('listening on port ', port);
    })
})
.catch(err =>{
    console.log('err: ', err)
})
