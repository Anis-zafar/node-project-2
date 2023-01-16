const express = require("express");
const mongoose = require("mongoose");
const UserRouter = require("./Routes/User");
const app = express();
Port = 3000;
app.use(express.json());
mongoose.set("strictQuery", false);
require("./config/db");
const User = require("./model/signups");

app.use("/api", UserRouter);

app.listen(Port);
