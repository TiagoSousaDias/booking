const express = require('express');
const router = express.Router();
const user =  require('../models/users');
router.get('/',(req,res)=>{
  res.send('Rooms list',user.GetAllUsers());
});
router.get('/:id',(req,res)=>{
  res.send('Rooms nº');
});
module.exports.router = router;
