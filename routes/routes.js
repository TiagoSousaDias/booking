const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
  res.send('HElLO');
});
  router.use('/alojamento',require('./alojamento').router);




module.exports.router = router;
