const db = require('../config/dbconnection');
const mysql = require('mysql-model');

const User = {

  GetAllUsers(){

    db.query('Select * from users');
  }
}
module.exports = User;
