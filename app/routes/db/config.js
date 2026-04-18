const mongoose = require("mongoose");

//async function to connect to the database
const connectDB = async () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
    });
    console.log(
      "Connected to the MongoDB successfully! ${conn.connection.host}",
    );
  } catch (error) {
    console.log(error);
  }
};
