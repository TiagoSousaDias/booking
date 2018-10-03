const mysql = require('mysql');
const database = require('./database');

const connection = mysql.createPool({
  host     : database.host,
  user     : database.user,
  password : database.pass,
  database : database.database,
  port : database.port
});

module.exports = connection;
