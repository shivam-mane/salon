const mongoose = require('mongoose');

const SalonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: String,
  area: { type: String, index: true },
  phone: String,
  whatsapp: String,
  rating: { type: Number, default: 0, index: true },
  services: [{ 
    name: String, 
    price: Number, 
    duration: Number 
  }],
  staff: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Staff' }],
  location: { lat: Number, lng: Number },
  photos: [String],
  isActive: { type: Boolean, default: true }
});

module.exports = mongoose.model('Salon', SalonSchema);