const express = require('express');
const router = express.Router();
const Notes = require('../models/n')

// Route 1: Get All The Notes : GET "/api/notes/get"
router.get('/fetchallnotes',fetchuser, async (req, res)=>{
const notes = await Notes.find({user: req.user.id});
res.json(notes)
})



module.exports = router