const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const currencyRoutes = require('./routes/currencyRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/currency', currencyRoutes);  // Agora protegida por middleware

module.exports = app;

// module.exports = app;