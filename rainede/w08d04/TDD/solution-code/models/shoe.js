const mongoose = require('mongoose');

const shoeSchema = new mongoose.Schema({
  brand: {type: String, trim: true},
  color: {type: String, trim: true},
  material: {type: String, trim: true},
  sizs: { type: Number}
}, {
  timestamps: true
});

module.exports = mongoose.model('Shoe', shoeSchema);
