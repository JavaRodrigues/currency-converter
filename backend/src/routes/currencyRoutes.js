const express = require('express');
const currencyController = require('../controllers/currencyController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/:code', authMiddleware, currencyController.getCurrencyRate);  // Protegida

module.exports = router;

