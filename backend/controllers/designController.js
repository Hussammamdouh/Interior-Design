const designService = require('../services/designService');

exports.getDesigns = async (req, res, next) => {
  try {
    const designs = await designService.getUserDesigns(req.user.id);
    res.status(200).json(designs);
  } catch (error) {
    next(error);
  }
};

exports.createDesign = async (req, res, next) => {
  try {
    const data = {
      ...req.body,
      user: req.user.id,
    };
    const design = await designService.createDesign(data);
    res.status(201).json(design);
  } catch (error) {
    next(error);
  }
};

exports.deleteDesign = async (req, res, next) => {
  try {
    await designService.deleteDesign(req.params.id);
    res.status(200).json({ message: 'Design deleted' });
  } catch (error) {
    next(error);
  }
};
