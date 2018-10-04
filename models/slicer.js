const db = require('../config/dbconnection');

function getSlider(id,callback){
  db.query('Select * from sliderimages where FKSlider = ? ',id,(error,results,fields)=>{
    return callback(results);
  });
}
module.exports = {
  getSlider:getSlider
}
