const express = require("express");
const router = express.Router();

const userRoutes = require("./userRoutes");
const orderRoutes = require("./orderRoutes");

// Base route: /api/v1/users
router.use("/users", userRoutes);

// Base route: /api/v1/orders
router.use("/orders", orderRoutes);

module.exports = router;
