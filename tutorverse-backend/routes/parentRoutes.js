const express = require('express');
const { registerParent, loginParent } = require('../controllers/parentController');
const router = express.Router();

router.post('/register', registerParent);
router.post('/login', loginParent);

module.exports = router;
