const express = require("express");
const router = express.Router();
const Note = require("../models/Note");
const { body, validationResult } = require("express-validator");
var fetchuser = require("../middleware/fetchuser");

// Route 1: Get All The Notes : GET "/api/auth/fetchallnotes" login Req
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// Route 2: Add A New Note : Post "/api/auth/addnote" login reqq
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0MDIwMGEzZWYzZDQ0MGE1NmJjYmJkIn0sImlhdCI6MTY2NTE0Njg5MH0.HyUc107dJfPkASet3ofoUSHKwvGv5v-AiLzonQhwIO4
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      //If Error
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });

      const saveNote = await note.save();
      res.json(saveNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  })
// Route 3 : Update A New Note Using: Post:"/api/notes/update"


module.exports = router;