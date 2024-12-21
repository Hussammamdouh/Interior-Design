const mongoose = require('mongoose');

const DesignSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    roomType: { type: String, required: true },
    style: { type: String, required: true },
    measurements: { type: Object, required: true },
    notes: { type: String },
    designFile: { type: String }, // Path to the generated design file
  },
  { timestamps: true }
);

module.exports = mongoose.model('Design', DesignSchema);
