const express = require('express');
const router = express.Router();



  router.use('/alojamento',require('./alojamento').router);

  router.get('/',(req,res)=>{
    res.send('HElLO');
  });


module.exports.router = router;
