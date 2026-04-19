const express = require("express");
const app = express();
const routeHandler = require("./routes");
const morgan = require("morgan");

// Middleware
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/v1", routeHandler);

// Root route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "API is running",
    success: true,
  });
});

module.exports = app;
