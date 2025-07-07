// Auth controller placeholder
const Tutor = require('../models/Tutor');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.registerTutor = async (req, res) => {
  try {
    const { name, email, password, subjects } = req.body;
    const existing = await Tutor.findOne({ email });
    if (existing) return res.status(400).json({ message: 'Email exists' });

    const hash = await bcrypt.hash(password, 10);
    const tutor = await Tutor.create({ name, email, password: hash, subjects });
    res.status(201).json(tutor);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.loginTutor = async (req, res) => {
  try {
    const { email, password } = req.body;
    const tutor = await Tutor.findOne({ email });
    if (!tutor) return res.status(404).json({ message: 'Not found' });

    const match = await bcrypt.compare(password, tutor.password);
    if (!match) return res.status(401).json({ message: 'Wrong password' });

    const token = jwt.sign({ id: tutor._id, role: 'tutor' }, process.env.JWT_SECRET);
    res.json({ token, tutor });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
