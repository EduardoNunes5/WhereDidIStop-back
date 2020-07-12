const express = require('express');
const app = express();
const port = process.env.PORT;

const userRouter = require('./routes/user');


app.use('/api/v1/users',userRouter);

app.listen(port, ()=>{
    console.log('listening on port ', port);
})
