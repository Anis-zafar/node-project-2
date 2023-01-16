const { Router } = require("express");
const express = require("express");
const router = express.Router();
const {
  GetUser,
  Postuser,
  DelUser,
  Putuser,
  signup,
  login,
  deluser,
  getme,
} = require("../Controllers/User");
const { body, validationResult } = require("express-validator");
const is_valid = require("../middleware/middleware");
const authentication = require('../middleware/middleware')
// const auth = require('../middleware/middleware')



router.get("/User/:rollno",authentication, GetUser);
//router.post("/User", authentication,Postuser);
router.put("/User/:id", Putuser);
router.delete("/User/:id", DelUser);
router.post("/signup", is_valid,signup);
router.post("/User/login", login);
router.delete("/deluser", authentication,deluser);
router.get('/getme',authentication,getme)


module.exports = router;
