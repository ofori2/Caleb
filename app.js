// const http = require('http')

// const port = 4500;

// const server = http.createServer((request, response)=>{
//     response.setHeader(
//         'content-type','text/html'
//     )
//     response.statusCode = 200;
//     response.end("<h1>Hello World</h1>");
// })

// server.listen(port, ()=>{
//     console. log('server is running on port: '+ port);
// } )



const express = require('express')
const mongoose =require('mongoose');
const dotenv = require('dotenv')

const app = express()
const port = process.env.PORT|| 4000;


app.get('/', function (req, res) {
  res.send('Hello World')
})
app.listen(port,()=>{
    console.log(`server is runing on port ${port}`)
})




// dotenv.config();

// const db = process.env.DB_URL;

// connetTodatabase();














