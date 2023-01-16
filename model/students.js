const mongoose = require("mongoose");

const newschema = new mongoose.Schema({
  name: {
    type: String,
    default: true,
  },
  rollno: {
    type: Number,
    default: true,
  },
  section: {
    type: String,
    default: true,
  },
  school: {
    type: String,
    default: true,
  },
});
const User = mongoose.model("students", newschema);
module.exports = User;