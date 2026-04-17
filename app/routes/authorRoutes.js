const express = require("express");
const router = express.Router();
const {
  reateAuthor,
  getAllAuthors,
  getAuthorById,
  updateAuthor,
  deleteAuthor,
} = require("../controllers/authorController.js");

// GET /api/v1/authors
router.get("/", getAllAuthors);
router.get("/:id", getAuthorById);
router.post("/", createAuthor);
router.put("/:id", updateAuthor);
router.delete("/:id", deleteAuthor);

module.exports = router;
