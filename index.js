const express = require('express');
const bodyParser = require('body-parser');
const InitiateMongoServer = require('./config/db');
const user = require("./routes/user");

InitiateMongoServer();

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send('Hello');
});

app.use('/user',user);

app.listen(port,(req,res)=>{
    console.log("Server runnng.");
});