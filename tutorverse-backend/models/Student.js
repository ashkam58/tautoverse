// Student model placeholder
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  grade: String,
  parent: { type: mongoose.Schema.Types.ObjectId, ref: 'Parent' },
  enrolledTutors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tutor' }],
  progress: String
});

module.exports = mongoose.model('Student', studentSchema);
