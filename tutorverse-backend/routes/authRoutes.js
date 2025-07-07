// Auth routes placeholder
const express = require('express');
const { registerTutor, loginTutor } = require('../controllers/authController');
const router = express.Router();

router.post('/register', registerTutor);
router.post('/login', loginTutor);

module.exports = router;
