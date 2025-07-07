// Booking model placeholder
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  parent: { type: mongoose.Schema.Types.ObjectId, ref: 'Parent' },
  tutor: { type: mongoose.Schema.Types.ObjectId, ref: 'Tutor' },
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  date: Date,
  status: { type: String, enum: ['pending', 'confirmed', 'rejected'], default: 'pending' },
  notes: String
});

module.exports = mongoose.model('Booking', bookingSchema);
