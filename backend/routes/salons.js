const router = require('express').Router();
const Salon = require('../models/Salon');
const Staff = require('../models/Staff');

// GET /api/salons?area=...&service=...
router.get('/', async (req, res) => {
  try {
    const { area, service, rating } = req.query;
    let query = { isActive: true };

    if (area) query.area = new RegExp(area, 'i');
    if (service) query['services.name'] = new RegExp(service, 'i');
    if (rating) query.rating = { $gte: Number(rating) };

    const salons = await Salon.find(query);
    res.json(salons);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/salons/:id/staff?date=...
router.get('/:id/staff', async (req, res) => {
  try {
    const staff = await Staff.find({ salonId: req.params.id });
    res.json(staff);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;