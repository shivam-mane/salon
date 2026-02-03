const cron = require('node-cron');
const Booking = require('../models/Booking');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
});

cron.schedule('0 * * * *', async () => {
  console.log('Checking for reminders...');
  // Logic to find bookings in next 24h and send email
});