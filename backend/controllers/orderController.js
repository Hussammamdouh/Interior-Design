const Order = require('../models/Order');

// Create a new order
exports.createOrder = async (req, res, next) => {
  try {
    const { items, total } = req.body;

    const order = await Order.create({
      userId: req.user._id,
      items,
      total,
    });

    res.status(201).json({ success: true, data: order });
  } catch (error) {
    next(error);
  }
};

// Get all orders for the logged-in user
exports.getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({ userId: req.user._id }).populate('items.itemId');
    res.status(200).json({ success: true, data: orders });
  } catch (error) {
    next(error);
  }
};
