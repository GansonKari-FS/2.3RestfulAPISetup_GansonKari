const express = require("express");
const router = express.Router();

// GET /api/v1/authors
router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: `${req.method} - Request made`,
  });
});

// GET by id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    id,
    success: true,
    message: `${req.method} - Request made`,
  });
});

// POST by id
router.post("/", (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    id,
    success: true,
    message: `${req.method} - Request made`,
  });
});

// Put by id
router.put("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    id,
    success: true,
    message: `${req.method} - Request made`,
  });
});

// Delete by id
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    id,
    success: true,
    message: `${req.method} - Request made`,
  });
});

module.exports = router;
