// Entry point for Tutorverse backend
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/api/parent', require('./routes/parentRoutes'));

// Routes

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/parent', require('./routes/parentRoutes'));

// DB Connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
