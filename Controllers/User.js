const bcrypt = require("bcryptjs");
const { compileFunction } = require("vm");
const Users = require("../model/signups");
const User = require("../model/students");
const { body, validationResult } = require("express-validator");
const { rmSync } = require("fs");
const jwt = require("jsonwebtoken");
const {signaccesstoken} =  require('../jwt/jwt')
require('dotenv').config()
const {asyncHandler} = require('express-async-handler') 



const GetUser =  async (req, res) => {
  const rollno = req?.params;
  console.log("in student get");
  const data = await User.findOne(rollno);

  return res.json(data);
}

const Postuser = async (req, res) => {
  const { name, rollno, section, school } = req.body;
  const data = await User.create({
    name,
    rollno,
    section,
    school,
  });

  return res.status(200).json(data);
};

const Putuser = async (req, res) => {
  const { school } = req?.body;
  const { id } = req?.params;
  const data = await User.findByIdAndUpdate(
    { _id: id },
    { $set: { school: school } },
    { new: true }
  );
  return res.json(data);
};

const DelUser = async (req, res) => {
  const { id } = req?.params;
  const data = await User.findByIdAndDelete(id);

  return res.send(data.name);
};

//user sign up for signup collection
const signup = async (req, res) => {
  const { email, name, password } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } else {
    var salt = await bcrypt.genSalt(10);
    var hash = await bcrypt.hash(password, salt);
    const user = await Users.findOne({ email });
    if (!user) {
      const data = await Users.create({
        name,
        email,
        password: hash,
      });
      return res.send(data);
    } else {
      return res.send("Email Already Exist!----");
    }
  }
};

// // if (user.email === req.body.email)
// // {
// //     console.log("User Exists")
// // } else
// // {
// //     try {
// //         const data =  user1.create({
// //             name,
// //             email,
// //             password:hash
// //         })
// //         return res.send(data)

// //     } catch (error) {
// //         return res.send('can not create user')

// //     }

// }

// }

const login = async (req, res) => {
  const { email } = req.body;
  const accesstoken = process.env.Access_Token_Secret 
  console.log("in login");
  const data = await Users.findOne({ email });
  if (data) {
    const password = bcrypt.compareSync(req.body.password, data.password);
    if (password) {
      const token = jwt.sign({ id: data._id },"iamsoftwareeng", {
        expiresIn:"2h",
      });
      return res.send(`Login succesfull with email: ${token} `);
    } else {
      return res.send("not valid credentials");
    }
  } else {
    return res.send("Email do not exist!");
  }
};
const deluser = async (req, res) => {
  console.log("in delete");
  const { id } = req.body;
  const data = await user1.findByIdAndDelete(id);

  return res.send(data);
};

const getme = async(req,res)=>{
  console.log('asdfasdf')
}

const Forget_password = 



module.exports = {
  GetUser,
  Postuser,
  DelUser,
  Putuser,
  signup,
  login,
  deluser,
  getme
};
