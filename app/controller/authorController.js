const Author = require("../model/Author");

const getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find();

    res.status(200).json({
      success: true,
      message: `${req.method} - Request made`,
      data: authors,
    });
  } catch (error) {
    console.error("Get All Authors Error >>>", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error,
    });
  }
};

const getAuthorById = async (req, res) => {
  try {
    const { id } = req.params;
    const author = await Author.findById(id);

    if (!author) {
      return res.status(404).json({
        success: false,
        message: "Author not found",
      });
    }

    res.status(200).json({
      success: true,
      message: `${req.method} - Request to Author endpoint`,
      data: author,
    });
  } catch (error) {
    console.error("Get Author By ID Error >>>", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error,
    });
  }
};

const createAuthor = async (req, res) => {
  try {
    const { author } = req.body;

    const newAuthor = await Author.create(author);
    console.log("newAuthor >>>", newAuthor);

    res.status(201).json({
      success: true,
      message: `${req.method} - Author created`,
      data: newAuthor,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      console.error("Validation Error >>>", error);
      return res.status(422).json({
        success: false,
        message: "Validation error",
        error,
      });
    }

    res.status(500).json({
      success: false,
      message: "Server error",
      error,
    });
  }
};

const updateAuthor = async (req, res) => {
  try {
    const { id } = req.params;

    const author = await Author.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!author) {
      return res.status(404).json({
        success: false,
        message: "Author not found",
      });
    }

    console.log("data >>>", author);

    res.status(200).json({
      data: author,
      success: true,
      message: `${req.method} - Author updated`,
    });
  } catch (error) {
    console.error("Update Author Error >>>", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error,
    });
  }
};

const deleteAuthor = async (req, res) => {
  try {
    const { id } = req.params;

    const author = await Author.findByIdAndDelete(id);

    if (!author) {
      return res.status(404).json({
        success: false,
        message: "Author not found",
      });
    }

    res.status(200).json({
      success: true,
      message: `${req.method} - author deleted`,
      data: author,
    });
  } catch (error) {
    console.error("Delete Author Error >>>", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error,
    });
  }
};

module.exports = {
  createAuthor,
  getAllAuthors,
  getAuthorById,
  updateAuthor,
  deleteAuthor,
};
