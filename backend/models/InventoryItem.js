const mongoose = require('mongoose');

const InventoryItemSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: Number, required: true },
    size: { type: Number, required: true },
    modelPath: { type: String, required: true },
    filePath: { type: String }, // New field for uploaded file path
    description: { type: String },
    available: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('InventoryItem', InventoryItemSchema);
