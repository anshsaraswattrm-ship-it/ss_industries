const express = require('express');
const router = express.Router();
const { submitQuote } = require('../controllers/quoteController');

// POST /api/quote
router.post('/', submitQuote);

module.exports = router;