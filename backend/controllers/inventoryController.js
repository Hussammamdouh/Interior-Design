const inventoryService = require('../services/inventoryService');

exports.getInventory = async (req, res, next) => {
  try {
    const items = await inventoryService.getAllItems();
    res.status(200).json(items);
  } catch (error) {
    next(error);
  }
};

exports.addInventoryItem = async (req, res, next) => {
  try {
    const { name, type, price, description } = req.body;
    const filePath = req.file ? req.file.path : null; // Get file path from multer
    const item = await inventoryService.createItem({ name, type, price, description, filePath });
    res.status(201).json(item);
  } catch (error) {
    next(error);
  }
};

exports.updateInventoryItem = async (req, res, next) => {
  try {
    const item = await inventoryService.updateItem(req.params.id, req.body);
    res.status(200).json(item);
  } catch (error) {
    next(error);
  }
};

exports.deleteInventoryItem = async (req, res, next) => {
  try {
    await inventoryService.deleteItem(req.params.id);
    res.status(200).json({ message: 'Item deleted' });
  } catch (error) {
    next(error);
  }
};
