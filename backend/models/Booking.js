const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  salonId: { type: mongoose.Schema.Types.ObjectId, ref: 'Salon', required: true },
  staffId: { type: mongoose.Schema.Types.ObjectId, ref: 'Staff', required: true },
  service: String,
  date: { type: String, required: true }, // YYYY-MM-DD
  time: { type: String, required: true }, // HH:MM
  status: { type: String, enum: ['confirmed', 'cancelled', 'completed'], default: 'confirmed' },
  amount: Number,
  notes: String,
  createdAt: { type: Date, default: Date.now }
});

// Prevent double booking
BookingSchema.index({ staffId: 1, date: 1, time: 1 }, { unique: true });

module.exports = mongoose.model('Booking', BookingSchema);