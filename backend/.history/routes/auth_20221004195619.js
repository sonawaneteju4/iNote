const express = require('express');
const router = express.Router();


// Create a User 
router.get('/', (req, res)=>{
  
    console.log(req.body);
    res.send("hello")
})



module.exports = router