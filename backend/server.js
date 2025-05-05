const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const productRoutes = require('./routes/products');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://E-groots:egroots@e-groots.ctrwk.mongodb.net/?retryWrites=true&w=majority&appName=e-groots', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    tls: true, // Enable TLS explicitly
    tlsAllowInvalidCertificates: false, // Ensure only valid certificates are used
    serverSelectionTimeoutMS: 5000 // Timeout for server selection
}).then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/products', productRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
