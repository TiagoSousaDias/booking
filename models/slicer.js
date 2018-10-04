const db = require('../config/dbconnection');

module.exports.getSlider= (id,callback)=>{
  db.query('Select * from sliderimages where FKSlider = ? ',id,(error,results,fields)=>{
    var paths=[];
    results.forEach(function(r){
        paths.push(r.path);
        });
    return callback(paths);
  });
}
