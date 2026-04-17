const express = require("express");
const router = express.Router();

// GET ALL authors
// URL: http://localhost:3000/api/v1/authors
router.get("/", (req, res) => {
  const authors = [
    { id: 1, name: "J.K. Rowling" },
    { id: 2, name: "Stephen King" },
    { id: 3, name: "Agatha Christie" },
  ];

  res.status(200).json({
    success: true,
    count: authors.length,
    data: authors,
  });
});

// GET author by ID
// URL: http://localhost:3000/api/v1/authors/1
router.get("/:id", (req, res) => {
  const authors = [
    { id: 1, name: "J.K. Rowling" },
    { id: 2, name: "Stephen King" },
    { id: 3, name: "Agatha Christie" },
  ];

  const id = parseInt(req.params.id);
  const author = authors.find((a) => a.id === id);

  if (!author) {
    return res.status(404).json({
      success: false,
      message: "Author not found",
    });
  }

  res.status(200).json({
    success: true,
    data: author,
  });
});

// POST create new author
// URL: http://localhost:3000/api/v1/authors
router.post("/", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      success: false,
      message: "Please provide a name",
    });
  }

  const newAuthor = {
    id: Date.now(),
    name,
  };

  res.status(201).json({
    success: true,
    data: newAuthor,
  });
});

// PUT update author
// URL: http://localhost:3000/api/v1/authors/1
router.put("/:id", (req, res) => {
  const { name } = req.body;
  const id = parseInt(req.params.id);

  if (!name) {
    return res.status(400).json({
      success: false,
      message: "Please provide a name",
    });
  }

  res.status(200).json({
    success: true,
    message: `Author with id ${id} updated`,
    updatedName: name,
  });
});

// DELETE author
// URL: http://localhost:3000/api/v1/authors/1
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  res.status(200).json({
    success: true,
    message: `Author with id ${id} deleted`,
  });
});

module.exports = router;
