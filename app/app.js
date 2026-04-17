const express = require("express");
const app = express();
const routeHandler = require("./routes/index");

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "API is running" });
});

app.use("/api/v1/authors", routeHandler);

module.exports = app;
