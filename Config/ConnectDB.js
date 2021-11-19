const mongoose = require("mongoose");

const URI = process.env.DB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("databse connected");
  } catch (error) {
    console.log("database is not connected", error);
  }
};

module.exports = connectDB;
