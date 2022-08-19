const mongoose= require('mongoose');

// extract schema & model for mongoose packege
const {Schema, model } = mongoose;


const tryoutschema = new Schema({

//   if cant excape this format
    Name:{
        type: String,
        required: true

    },
    email:{
        type: String,
        required: true

    },

    Number:{
        type: String,
        required: true

    },

    age:{
        type: String,
        required: false

    },


})
//  create a model for our schema
exports.Tryout = model('Tryout, tryoutschema');
