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
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter Your title").isLength({ min: 3 }),
    body("description", "description atleast 5 characters").isLength({
      min: 5,
    })
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
  }
);
// Route 3 : Update A New Note Using: Post:"/api/notes/updatenote"
router.put(
    "/updatenote/:id",fetchuser,async (req, res) => {
        const { title, description, tag } = req.body;
        //Create new note object
        const newNote = {};
        if(title){newNote.title = title}
        if(description){newNote.description = description}
        if(tag){newNote.tag = tag}

        //Find The node and update 
        const note = Note.findById(req.param.id);
        if(!note){return res.status(4004).send("Not Found")}  
        if(note.user.toString() !== req.user.id){
            return res.status(401).send("Not Allowed");
        }     

        note = await Note.findByIdAndUpdate(req.params.id, {$set: newNote}, {new:true})
        res.json({note});

    }
)

module.exports = router;
