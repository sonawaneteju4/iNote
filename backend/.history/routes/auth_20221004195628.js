const express = require('express');
const router = express.Router();


// Create a User Using: Post
router.get('/', (req, res)=>{
  
    console.log(req.body);
    res.send("hello")
})



module.exports = router