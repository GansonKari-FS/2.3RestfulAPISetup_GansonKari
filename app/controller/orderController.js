const Order = require("../models/Order");

// GET ALL ORDERS (with advanced query features)
const getAllOrders = async (req, res) => {
  try {
    let query = Order.find();

    // Filtering
    if (req.query.status) {
      query = query.where("status").equals(req.query.status);
    }

    if (req.query.minPrice && req.query.maxPrice) {
      query = query
        .where("price")
        .gte(Number(req.query.minPrice))
        .lte(Number(req.query.maxPrice));
    }

    // Sorting
    query = query.sort("-createdAt");

    // Limit results
    if (req.query.limit) {
      query = query.limit(Number(req.query.limit));
    }

    // Populate user info
    query = query.populate("user", "name email");

    const orders = await query.exec();

    res.status(200).json({
      success: true,
      count: orders.length,
      message: `${req.method} - Orders retrieved`,
      data: orders,
    });
  } catch (error) {
    console.error("Get All Orders Error >>>", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

// GET ORDER BY ID
const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await Order.findById(id).populate("user");

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    res.status(200).json({
      success: true,
      message: `${req.method} - Order retrieved`,
      data: order,
    });
  } catch (error) {
    console.error("Get Order By ID Error >>>", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

// CREATE ORDER
const createOrder = async (req, res) => {
  try {
    const newOrder = await Order.create(req.body);

    res.status(201).json({
      success: true,
      message: `${req.method} - Order created`,
      data: newOrder,
    });
  } catch (error) {
    console.error("Create Order Error >>>", error);

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

// UPDATE ORDER
const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedOrder = await Order.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedOrder) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    res.status(200).json({
      success: true,
      message: `${req.method} - Order updated`,
      data: updatedOrder,
    });
  } catch (error) {
    console.error("Update Order Error >>>", error);

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

// DELETE ORDER
const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedOrder = await Order.findByIdAndDelete(id);

    if (!deletedOrder) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    res.status(200).json({
      success: true,
      message: `${req.method} - Order deleted`,
      data: deletedOrder,
    });
  } catch (error) {
    console.error("Delete Order Error >>>", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
};
