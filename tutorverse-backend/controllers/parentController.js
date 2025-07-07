const Parent = require('../models/Parent');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.registerParent = async (req, res) => {
  try {
    const { name, email, password, children } = req.body;
    const existing = await Parent.findOne({ email });
    if (existing) return res.status(400).json({ message: 'Email exists' });

    const hash = await bcrypt.hash(password, 10);
    const parent = await Parent.create({ name, email, password: hash, children });
    res.status(201).json(parent);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.loginParent = async (req, res) => {
  try {
    const { email, password } = req.body;
    const parent = await Parent.findOne({ email });
    if (!parent) return res.status(404).json({ message: 'Not found' });

    const match = await bcrypt.compare(password, parent.password);
    if (!match) return res.status(401).json({ message: 'Wrong password' });

    const token = jwt.sign({ id: parent._id, role: 'parent' }, process.env.JWT_SECRET);
    res.json({ token, parent });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
