const mongoose = require("mongoose");

const connectDB = async () => {
  const MONGO_URL = process.env.MONGO_URL;
  try {
    await mongoose.connect(MONGO_URL);
    console.log("DB connected");
  } catch (error) {
    console.log("Error in DB connection", error)
  }
};

module.exports = connectDB;
