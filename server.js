require("dotenv").config();
const app = require("./app/app"); // adjust if needed
const connectDB = require("./app/db/config");

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server failed to start >>>", error);
    process.exit(1);
  }
};

startServer();
