require("dotenv").config();
const app = require("./app/app");
const routeHandler = require("./app/routes");
const connectDB = require("./app/routes/db/config.js");

const PORT = process.env.PORT || 3000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/api/v1", routeHandler);

module.exports = app;
