const express = require('express');
const {connectToDatabase} =require('./config/db')

const app = express();

const port = 4000;

connectToDatabase();




app.listen(port,() => {
    console. log(`sever is runing on port ${port}`);

})