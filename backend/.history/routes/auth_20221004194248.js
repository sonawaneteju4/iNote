const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
  
    console.log(req.body);
    req.setEncoding("hello")
    res
})



module.exports = router