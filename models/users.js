const db = require('../config/dbconnection');

const Users = {};
module.exports = Users;
module.exports.getAllUsers = ()=>{

  db.query('SELECT * from users', function (error, results, fields) {
    if (error) throw error;
    // connected!
    console.log(results);
      db.end();
  });
}
module.exports.getUserById = (id,callback)=>{
  db.query('SELECT * from users Where `IdUser` = ?',[id], function (error, results, fields) {
    if (error) throw error;
    // connected!
    console.log(results);
    db.end();
  });
}

module.exports.getUserByUsername = (username,callback)=>{
  db.query('SELECT * from users Where `NomeLog` = ?',[username], function (error, results, fields) {
    if (error) throw error;
    // connected!
    console.log(results);
    db.end();
  });
}
