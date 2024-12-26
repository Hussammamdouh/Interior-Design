const User = require('../models/User');
const Design = require('../models/Design'); // If designs are stored separately
const Order = require('../models/Order');   // If orders are stored separately

// Fetch user profile
exports.getUserProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    next(error);
  }
};

// Update user profile
exports.updateUserProfile = async (req, res, next) => {
  try {
    const { name, email, phone } = req.body;

    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update fields
    user.name = name || user.name;
    user.email = email || user.email;
    user.phone = phone || user.phone;

    const updatedUser = await user.save();
    res.status(200).json({ success: true, data: updatedUser });
  } catch (error) {
    next(error);
  }
};

// Fetch user designs
exports.getUserDesigns = async (req, res, next) => {
  try {
    const designs = await Design.find({ userId: req.user._id });
    res.status(200).json({ success: true, data: designs });
  } catch (error) {
    next(error);
  }
};

// Fetch user purchase history
exports.getUserPurchases = async (req, res, next) => {
  try {
    const purchases = await Order.find({ userId: req.user._id });
    res.status(200).json({ success: true, data: purchases });
  } catch (error) {
    next(error);
  }
};
