const express = require('express');
const { protect } = require('../middlewares/authMiddleware');
const { createOrder, getOrders } = require('../controllers/orderController');
const validate = require('../middlewares/validateMiddleware');
const { orderSchema } = require('../utils/validationSchemas');

const router = express.Router();

// Create a new order
router.post('/', protect, validate(orderSchema), createOrder);

// Get orders for a user
router.get('/', protect, getOrders);

module.exports = router;
