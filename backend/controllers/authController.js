const authService = require('../services/authService');

exports.registerUser = async (req, res, next) => {
  console.log('Register endpoint hit', req.body); // Debug
  console.log('Received request body:', req.body); // Debugging
  try {
    const data = await authService.register(req.body);
    res.status(201).json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

exports.loginUser = async (req, res, next) => {
  try {
    const data = await authService.login(req.body);
    res.status(200).json({ success: true, data });
  } catch (error) {
    next(error);
  }
};
