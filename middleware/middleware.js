const { verify } = require("crypto");
const { body, validationResult } = require("express-validator");
const createHttpError = require("http-errors");
const Users = require('../model/signups')
const asyncHandler =  require('express-async-handler')
require('dotenv').config()
const jwt = require('jsonwebtoken')

const is_valid = (req,res,next)=>{
  body("email").isEmail().notEmpty(),
  body("password").notEmpty().isLength({ min: 8 }),
  body("name").notEmpty()
  next();
}
 




const authentication = async (req, res, next) => {
  if(!req.headers){
    
    res.send('header required')
  }
  else{
    try {
      const header = req.headers["authorization"].split(" ");
  
      const token = header[1];
  
      const decode = jwt.verify(token, "iamsoftwareeng");
   
      const user = await Users.findOne({ id: decode.id });
  
      req.user = user;
      
     
      //  req.user = decode
    } catch (error) {
      const err = res.send("invalid token");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
  
      next(err);
    }
  
    next();
    }
}
 module.exports= authentication,is_valid





// module.exports = (req, res, next) => {
//   try {
//     const token = req.headers.authorization.split(' ')[1];
//     console.log(token)
//     console.log(process.env.Access_Token_Secret)
//     const decodedToken = jwt.verify(token, process.env.Access_Token_Secret);
//     const userId = decodedToken.userId;
//     if (req.body.userId && req.body.userId !== userId) {
//       throw 'Invalid user ID';
//     } else {
//       next();
//     }
//   } catch {
//     res.status(401).json({
//       error: new Error('Invalid request!')
//     });
//   }
// };