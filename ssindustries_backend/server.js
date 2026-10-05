const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Route files
const contactRoutes = require('./routes/contactRoutes');
const quoteRoutes = require('./routes/quoteRoutes');
const videoConsultationRoutes = require('./routes/videoConsultationRoutes');

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// ========================================
// CORS CONFIGURATION
// ========================================
const allowedOrigins = [
  'https://ssindustriesgroup.in',
  'https://www.ssindustriesgroup.in',
  'http://localhost:5173', // For Vite Local Development
  'http://localhost:3000'  // Fallback for React/Next.js Local
];

const corsOptions = {
  origin: function (origin, callback) {
    // Agar request postman, curl ya mobile app se aa rahi hai jiska origin nahi hota
    if (!origin) return callback(null, true);
    
    // Check karo ki origin allowed list mein hai ya nahi
    if (allowedOrigins.includes(origin)) {
      callback(null, true); // Allowed
    } else {
      callback(new Error('Not allowed by CORS')); // Blocked
    }
  },
  credentials: true, // Agar aage chalkar cookies ya tokens bhejne ho
  optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions)); // Ab sirf specific origins hi allow honge
app.use(express.json()); // Allow parsing of JSON body data

// Mount routers
app.use('/api/contact', contactRoutes);
app.use('/api/quote', quoteRoutes);
app.use('/api/video-consultation', videoConsultationRoutes);

// Basic route for testing server
app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});