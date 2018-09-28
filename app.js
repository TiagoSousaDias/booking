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
  password :database.pass,
  database : database.database,
  port : database.port
});

connection.connect((err)=>{
  if(err){
    console.log(err);
  }
});
connection.query('SELECT * From users', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});
