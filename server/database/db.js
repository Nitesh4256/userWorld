const mongoose = require("mongoose");

require("dotenv").config();

exports.connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to Database");
  } catch (error) {
    console.log("Error While connecting to Database!");
    console.log(error);
    process.exit(1);
  }
};
