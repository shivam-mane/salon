const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  phone: { type: String, required: true, unique: true },
  name: String,
  email: String,
  password: { type: String, required: true },
  role: { type: String, enum: ['customer', 'salon-admin'], default: 'customer' },
  bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }],
  membership: { type: String, enum: ['free', 'silver', 'gold'], default: 'free' },
  points: { type: Number, default: 0 }
});

module.exports = mongoose.model('User', UserSchema);