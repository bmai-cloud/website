const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, './')));

// Serve static files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/course-details', (req, res) => {
  res.sendFile(path.join(__dirname, 'course-details.html'));
});

// API endpoint for registration
app.post('/api/register', (req, res) => {
  const { name, email, phone, education, course, price } = req.body;

  // Validate input
  if (!name || !email || !phone || !education || !course) {
    return res.status(400).json({ 
      success: false, 
      message: 'Missing required fields' 
    });
  }

  // Here you can integrate with email service (SendGrid, Mailgun, etc.)
  console.log('Registration received:', { name, email, phone, education, course, price });

  res.json({ 
    success: true, 
    message: 'Registration received. We will contact you soon!',
    data: { name, email, phone, education, course }
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'BMFUTUROMIND AI Server is running' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false, 
    message: 'Internal Server Error' 
  });
});

app.listen(PORT, () => {
  console.log(`BMFUTUROMIND AI Server running on port ${PORT}`);
  console.log(`Domain: bmfuturomindai.com`);
});
