const express = require('express');
// const(readtryout, readalltryout,createtryout,updatetryout,deletetryout);

const rout = express. Router();

rout. rout('/').get(readalltryout).post(createtryout);
rout.rout('/:id').get(readtryou).post(updatetryout)