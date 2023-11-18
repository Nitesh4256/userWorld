const { connection } = require("../database/db");
const mongoose = require("mongoose");
const Data = require("../models/data");
const data = require("./data.json");
const start = async () => {
  try {
    mongoose
      .connect(
        "mongodb+srv://niteshshivhare321:niteshshivhare@cluster0.ptu7djg.mongodb.net/"
      )
      .then(() => {
        console.log("connected");
      })
      .catch((error) => {
        console.log(error);
      });
    Data.create(data);
    // Data.deleteMany({})
    //   .then(() => {
    //     console.log("Deleted");
    //   })
    //   .catch(() => {
    //     console.log("error");
    //   });
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};

start();
