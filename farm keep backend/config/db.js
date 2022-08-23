const mongoose =require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const db =process.env.DB_URL;

exports.connectToDatabase=function(){
    mongoose.connect(db)
    .then(()=>(
        console.log('Database connected sucessfully')

        
    ))
    .catch(error =>{
        console.log('cooldn\'t connect to database error')
    })
}