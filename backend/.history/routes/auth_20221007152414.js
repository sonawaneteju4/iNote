const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = "Tejas Is Goof Boy"

// Create a User Using: Post "/api/auth/createuser" . Doesn't Req  Login

router.post(
  "/createuser",
  [
    body("email", "Enter Valid Email").isEmail(),
    body("userName", "Enter Your Name").isLength({ min: 3 }),
    body("password", "PassWord Must be 5 Lenght").isLength({ min: 5 }),
  ],
  async (req, res) => {
    //Error Msg
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //Check With same Email exist

    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ errors: "Sorry a User with this email already Exist" });
      }
      const salt = await bcrypt.genSalt(10); 
      const secPass = await bcrypt.hash(req.body.password, salt)

      //Creating New User

      user = await User.create({
        userName: req.body.userName,
        email: req.body.email,
        password:secPass,
      });
      
      //login Token 
      const data  = {
        user:{
          id: user.id
        }
      }
      const authtoken = jwt.sign(data, JWT_SECRET);
     
      // res.json(user);
      res.json({authtoken});

      //Catch User 
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);
//auth User Post "/api/auth/login" . Doesn't Req  Login
router.post(
  "/login",
  [
    body("email", "Enter Valid Email").isEmail(),
    body("password", "Password Cannot Be blank").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {email, password} = req.body;
    try {
      let user = await User.findOne({email});
      if(!user){
        return res.status(400).json({error: "Please Try to Login With Correct Credentials"})
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if(!passwordCompare){
        return res.status(400).json({error: "Please Try to Login With Correct Credentials"})
      }

      const data  = {
        user:{
          id: user.id
        }
      }
      const authtoken = jwt.sign(data, JWT_SECRET);
      res.json({authtoken});

    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }

  }
)

//Get User Details Using : POST "/api/auth/getuser" login required


module.exports = router;
