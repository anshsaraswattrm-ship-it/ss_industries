const VideoConsultation = require('../models/VideoConsultation');

const submitVideoConsultation = async (req, res) => {
  try {
    const { fullName, whatsappNumber, preferredDate, timeSlot, interest } = req.body;

    // Basic Validation
    if (!fullName || !whatsappNumber || !preferredDate || !timeSlot) {
      return res.status(400).json({ message: 'Please fill in all required fields (*)' });
    }

    // Create entry in DB
    const newConsultation = await VideoConsultation.create({
      fullName,
      whatsappNumber,
      preferredDate,
      timeSlot,
      interest,
    });

    res.status(201).json({
      message: 'Video Consultation slot requested successfully',
      data: newConsultation,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

module.exports = { submitVideoConsultation };