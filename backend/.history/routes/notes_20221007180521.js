const express = require('express');
const router = express.Router();
const Notes = require('../models/Notes')
const { body, validationResult } = require("express-validator");
var fetchuser = require("../middleware/fetchuser");

// Route 1: Get All The Notes : GET "/api/auth/fetchallnotes" login Req
router.get('/fetchallnotes', fetchuser, async (req, res)=>{
const notes = await Notes.find({user: req.user.id});
res.json(notes)
})


// Route 2: Add A New Note : Post "/api/auth/addnote" login reqq
router.post('/addnote', fetchuser, [
    body("title", "Enter Your title").isLength({ min: 3 }),
    body("description", "description ").isEmail(),
    body("password", "PassWord Must be 5 Lenght").isLength({ min: 5 }),
] async (req, res)=>{

    res.json(notes)
    })


module.exports = router