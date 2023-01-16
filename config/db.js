const mongoose = require("mongoose");

const database = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://aniszafar:153264@cluster0.holcp8f.mongodb.net/anis",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Sucessfully Connected to DATABASE on Cloud");
  } catch (error) {
    console.log("error");
  }
};

database();
