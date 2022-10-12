const express = require('express');
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator');


// Create a User Using: Post "/api/auth/createuser" . Doesn't Req  Login

router.post('/createuser', [
    body('email', 'Enter Valid Email').isEmail(),
    body('userName','Enter Your Name').isLength({min : 3}),
    body('password' ,'PassWord Must be 5 Lenght').isLength({min : 5}),

] , async (req, res) =>{
  //Error Msg
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //Check With same Email exist

    try{

      let user = await User.findOne({email: req.body.email});
      if(user){
      return res.status(400).json({errors: "Sorry a User with this email already Exist"})
    }
    user = await User.create({
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
      
    })
    res.json(user)  
  } catch(error){
    console.error(error.message);
    res.status(500)
  }
  })
  


module.exports = router