const path = require('path');
const express = require('express');
const database = require('./config/database');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const app = express();
const port = process.env.PORT || 8080;

//cors middleware
app.use(cors());

//Static Folder
app.use(express.static(path.join(__dirname,'public')));

//bodyParser middleware
app.use(bodyParser.json());


//Define all Routes
app.use('/',require('./routes/routes').router);

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'public/index.html'));
});

app.listen(port,(err)=>{
  if(err){
    console.log(err);
  }else{
    console.log('Server connected to port:3000');
  }
})
