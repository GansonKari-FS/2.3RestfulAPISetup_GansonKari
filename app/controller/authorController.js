const Author = require("../model/Author");

const getAllAuthors = (req, res) => {
  res.status(200).json({
    success: true,
    message: `${req.method} - Request made`,
  });
};

const getAuthorById = (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    id,
    success: true,
    message: `${req.method} - Request to Author endpoint`,
  });
};

const createAuthor = (req, res) => {
  const data = req.body;
  console.log("data >>>", data);
  res.status(200).json({
    success: true,
    message: `${req.method} - Request to Author endpoint`,
  });
};

const updateAuthor = (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    id,
    success: true,
    message: `${req.method} - Request to Author endpoint`,
  });
};

const deleteAuthor = (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    id,
    success: true,
    message: `${req.method} - author deleted`,
  });
};

module.exports = {
  createAuthor,
  getAllAuthors,
  getAuthorById,
  updateAuthor,
  deleteAuthor,
};

//can also put exports in front of each function instead of exporting at the end like above
// exports.getAllAuthors = (req, res) => {
//   res.status(200).json({
