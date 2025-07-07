// Tutor model placeholder
const mongoose = require('mongoose');

const tutorSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  subjects: [String],
  bio: String,
  availability: [String],
  isApproved: { type: Boolean, default: false }
});

module.exports = mongoose.model('Tutor', tutorSchema);
