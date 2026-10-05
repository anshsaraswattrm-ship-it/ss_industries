const mongoose = require('mongoose');

const videoConsultationSchema = mongoose.Schema(
  {
    fullName: { type: String, required: true },
    whatsappNumber: { type: String, required: true },
    preferredDate: { type: String, required: true },
    timeSlot: { type: String, required: true },
    interest: { type: String }, // Optional field
  },
  {
    timestamps: true, // Adds createdAt and updatedAt
  }
);

module.exports = mongoose.model('VideoConsultation', videoConsultationSchema);