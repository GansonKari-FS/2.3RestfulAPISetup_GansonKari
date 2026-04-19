const Author = require("../model/Author");

const getAllAuthors = async (req, res) => {
  const authors = await Author.find();
  res.status(200).json({
    success: true,
    message: `${req.method} - Request made`,
    data: authors,
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

const createAuthor = async (req, res) => {
  const { author } = req.body;

  const newAuthor = await Authors.create(author);
  console.log("newAuthor >>>", newAuthor);

  res.status(200).json({
    success: true,
    message: `${req.method} - Request to Author endpoint`,
  });
};

const updateAuthor = async (req, res) => {
  const { id } = req.params;
  const { author } = await Author.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  console.log("data >>>", author);
  res.status(200).json({
    data: author,
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
