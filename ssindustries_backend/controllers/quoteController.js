const Quote = require('../models/Quote');

const submitQuote = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, projectType, message } = req.body;

    // Basic validation
    if (!firstName || !lastName || !email || !phone || !projectType || !message) {
      return res.status(400).json({ message: 'Please fill in all required fields' });
    }

    // Create new quote entry
    const newQuote = await Quote.create({
      firstName,
      lastName,
      email,
      phone,
      projectType,
      message,
    });

    res.status(201).json({
      message: 'Quote request sent successfully',
      data: newQuote,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

module.exports = { submitQuote };