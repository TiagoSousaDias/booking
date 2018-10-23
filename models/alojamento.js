const db = require('../config/dbconnection');

const Alojamento = {};
module.exports = Alojamento;
module.exports.GetAllRooms = (callback)=>{
db.getConnection(function(err, connection) {
  if (err) throw err; // not connected!

  connection.query('SELECT IdQuarto,Nome,Camas,CamasSolteiro,tipologia,img,quartos.Activo from quartos inner join tipologia on FkTipologia = IdTipologia INNER JOIN tipo_quarto on FKTipoQ = IdTipo_quarto Where quartos.Activo=true', function (error, results, fields) {
    if (error)throw error;
    // connected!
      callback(error,results);
      connection.release();
  });
});
}
module.exports.GetRoomById = (id,callback)=>{
  db.getConnection(function(error, connection) {
    if (error) throw error; // not connected!
  connection.query('SELECT IdQuarto,Nome,Camas,CamasSolteiro,tipologia,img,quartos.Activo  from quartos inner join tipologia on FkTipologia = IdTipologia INNER JOIN tipo_quarto on FKTipoQ = IdTipo_quarto Where `IdQuarto` = ? And quartos.Activo=true',[id], function (error, results, fields) {
    if (error) throw error;
        callback(error,results);
    // connected!
    //console.log(results);
      connection.release();
    });
  });
}
