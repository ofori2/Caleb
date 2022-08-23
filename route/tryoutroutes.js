const express = require('express');
const {readtryout, readAlltryout,createtryout,updatetryout, deletetryout }= require('../controller/tryoutcontroller.js')

const rout = express. Router();

route.route('/').get(readAllTryout).post(createTryout);
route.route('/:id').get(readTryou).patch(updateTryout).delete(deleteTryout)

module.exports=route;