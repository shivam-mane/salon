const mongoose = require('mongoose');

const StaffSchema = new mongoose.Schema({
  salonId: { type: mongoose.Schema.Types.ObjectId, ref: 'Salon' },
  name: String,
  specialty: String,
  photo: String,
  availability: [{
    date: String,
    slots: [String]
  }]
});

module.exports = mongoose.model('Staff', StaffSchema);