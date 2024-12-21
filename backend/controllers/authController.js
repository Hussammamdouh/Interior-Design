const authService = require('../services/authService');

exports.registerUser = async (req, res, next) => {
  try {
    const data = await authService.register(req.body);
    await sendEmail(
      data.email,
      'Welcome to Room Designer',
      `Hello ${data.name}, your account has been successfully created!`
    );
    res.status(201).json(data);
  } catch (error) {
    next(error);
  }
};

exports.loginUser = async (req, res, next) => {
  try {
    const data = await authService.login(req.body);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};
