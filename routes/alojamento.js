const express = require('express');
const router = express.Router();
const Alojamento =  require('../models/alojamento');
router.get('/',(req,res)=>{
  Alojamento.GetAllRooms((err,results)=>{
    res.json({
      'alojamentos':results
    });
    console.log(results);
  });
//  res.send('Rooms list');
});
router.get('/:id',(req,res)=>{
  Alojamento.GetRoomById(req.params.id,(err,results)=>{

    res.json({
      'quarto':results
    });
      console.log(results);

  });
});
module.exports.router = router;
