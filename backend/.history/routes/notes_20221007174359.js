const express = require('express');
const router = express.Router();


// Route 1: Get All The Notes : GET "/api/no"
router.get('/', (req, res)=>{
res.json([])
})



module.exports = router