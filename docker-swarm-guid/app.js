'use strict';
const os = require('os');
const express = require('express');
const uuid = require('uuid');
const logger = require('morgan');

let app = express();

const hostname = os.hostname();

app.use(logger('dev'));

app.get('/guid',(req,res)=> {
    res.json({
    "hostname" : hostname,
    "uuid" : uuid.v4()
    });
});

app.listen(9000,()=>{
    console.log('app running on port 9000');
})
