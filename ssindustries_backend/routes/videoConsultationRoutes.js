const express = require('express');
const router = express.Router();
const { submitVideoConsultation } = require('../controllers/videoConsultationController');

// POST /api/video-consultation
router.post('/', submitVideoConsultation);

module.exports = router;