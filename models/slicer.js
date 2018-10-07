const db = require('../config/dbconnection');

module.exports.getSlider= (id,callback)=>{
  db.query('Select * from sliderimages Where FKSlider = ? ',id,(error,results,fields)=>{
    if(error) throw error;
    var paths=[];
    results.forEach(function(r){
        paths.push(r.path);
      });
    return callback(paths);
  });
}
