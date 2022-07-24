const mongoose = require("mongoose");

module.exports= connectDb = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS = {
      dbName: "DevComm",
    };
    await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    console.log("Connected Succesfully");
  } catch (error) {
    console.log(error);
  }
};

