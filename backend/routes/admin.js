const router = require('express').Router();
const Salon = require('../models/Salon');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');

// Admin only middleware applied
router.use(auth('salon-admin'));

// Create Salon
router.post('/salons', upload.array('photos', 5), async (req, res) => {
  try {
    const photos = req.files.map(f => f.path);
    const salon = new Salon({ ...req.body, photos });
    await salon.save();
    res.status(201).json(salon);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Analytics
router.get('/analytics', async (req, res) => {
  // Mock analytics data
  res.json({ revenue: 50000, bookings: 120 });
});

module.exports = router;