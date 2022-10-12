const express = require('express');
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator');


// Create a User Using: Post "/api/auth/" . Doesn't Req auth

router.post('/', [
    body('email', 'Enter Valid Email').isEmail(),
    body('userName','Enter Your Name').isLength({min : 3}),
    body('password' ,'PassWord Must be 5 Lenght').isLength({min : 5}),

] ,(req, res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        username: req.body.userName,
        password: req.body.email,
      }).then(user => res.json(user));
    res.send(req.body)
    
})



module.exports = router