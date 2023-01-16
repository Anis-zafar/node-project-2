const mongoose = require("mongoose");


const newschema1 = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
  },
});

const Users = mongoose.model("signups", newschema1);
module.exports = Users;


