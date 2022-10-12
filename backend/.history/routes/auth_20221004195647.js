const express = require('express');
const router = express.Router();


// Create a User Using: Post "/api/auth/" . Doesn
router.get('/', (req, res)=>{
  
    console.log(req.body);
    res.send("hello")
})



module.exports = router