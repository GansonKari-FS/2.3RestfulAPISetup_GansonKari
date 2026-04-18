const express = require("express");
const app = express();
const routeHandler = require("./routes");
const morgan = require("morgan");

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).json({ message: "API is running", sucess: true });
});

// 🔥 ADD THIS PART
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/api/v1", routeHandler);

module.exports = app;
