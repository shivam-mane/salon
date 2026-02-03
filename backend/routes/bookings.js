const router = require('express').Router();
const Booking = require('../models/Booking');
const auth = require('../middleware/auth');

router.post('/', auth(), async (req, res) => {
  try {
    const { salonId, staffId, date, time } = req.body;
    
    // Check conflict
    const exists = await Booking.findOne({ staffId, date, time, status: 'confirmed' });
    if (exists) return res.status(409).json({ error: 'Slot already booked' });

    const booking = new Booking({ ...req.body, userId: req.user.id });
    await booking.save();

    // Broadcast update
    req.io.to(salonId).emit('slot_update', { staffId, date, time, status: 'booked' });

    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/my', auth(), async (req, res) => {
  const bookings = await Booking.find({ userId: req.user.id }).populate('salonId');
  res.json(bookings);
});

module.exports = router;