const express = require('express');
const router = express.Router();
const User = require('../models/User')


// Create a User Using: Post "/api/auth/" . Doesn't Req auth

router.get('/', (req, res)=>{
  
    console.log(req.body);
    const user = User(re)
    res.send("hello")
})



module.exports = router