const express = require('express');
const router = express.Router();
const users =  require('../models/users');
router.get('/',(req,res)=>{
  console.log(users.GetAllUsers());
  res.send('Rooms list');
});
router.get('/:id',(req,res)=>{
  console.log(users.getUserById(req.params.id));
  res.send('Rooms nº');
});
module.exports.router = router;
