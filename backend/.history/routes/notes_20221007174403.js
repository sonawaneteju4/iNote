const express = require('express');
const router = express.Router();


// Route 1: Get All The Notes : GET "/api/notes/get"
router.get('/', (req, res)=>{
res.json([])
})



module.exports = router