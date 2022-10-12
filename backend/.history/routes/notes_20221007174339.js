const express = require('express');
const router = express.Router();


// Route 1: Get All The Notes : P
router.get('/', (req, res)=>{
res.json([])
})



module.exports = router