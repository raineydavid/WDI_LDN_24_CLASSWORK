const mongoose = require('mongoose');

const shoeSchema = new mongoose.Schema({
  brand: { type: String, trim: true, required: true },
  color: { type: String, trim: true, required: true },
  material: { type: String, trim: true, required: true },
  price: { type: Number, required: true },
  laced: { type: Boolean, trim: true, required: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('Shoe', shoeSchema);
