const path = require('path');
const express = require('express');
const database = require('./config/database');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const app = express();

const connection = mysql.createConnection({
  host     : database.host,
  user     : database.user,
  password :database.password,
  database : database.database,
  port : database.port
});

connection.connect((err)=>{
  if(err){
    console.log(err);
  }
});
