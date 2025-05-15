const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  service: String,
  date: Date,
  notes: String
});

module.exports = mongoose.model('Appointment', appointmentSchema);
