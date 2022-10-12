const express = require('express');
const router = express.Router();
const Notes = require('../models/')

// Route 1: Get All The Notes : GET "/api/notes/get"
router.get('/fetchallnotes',fetchuser, (req, res)=>{


res.json([])
})



module.exports = router