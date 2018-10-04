const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
  res.send('HElLO');
});

  router.use('/alojamento',require('./alojamento').router);

  router.use('/slicer',require('./slicer').router);


module.exports.router = router;
