const User = require("../models/User");
const Order = require("../models/Order");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: `${req.method} - Users retrieved successfully`,
      count: users.length,
      data: users,
    });
  } catch (error) {
    console.error("Get All Users Error >>>", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: `${req.method} - User retrieved successfully`,
      data: user,
    });
  } catch (error) {
    console.error("Get User By ID Error >>>", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    res.status(201).json({
      success: true,
      message: `${req.method} - User created successfully`,
      data: newUser,
    });
  } catch (error) {
    console.error("Create User Error >>>", error);

    if (error.name === "ValidationError") {
      return res.status(422).json({
        success: false,
        message: "Validation error",
        error: error.message,
      });
    }

    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Email already exists",
        error: error.message,
      });
    }

    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: `${req.method} - User updated successfully`,
      data: updatedUser,
    });
  } catch (error) {
    console.error("Update User Error >>>", error);

    if (error.name === "ValidationError") {
      return res.status(422).json({
        success: false,
        message: "Validation error",
        error: error.message,
      });
    }

    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    await Order.deleteMany({ user: id });

    res.status(200).json({
      success: true,
      message: `${req.method} - User deleted successfully`,
      data: deletedUser,
    });
  } catch (error) {
    console.error("Delete User Error >>>", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
