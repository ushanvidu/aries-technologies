const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Aries Technologies API Running');
});

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    // Logic to save to DB or send email
    console.log('Contact Received:', { name, email, message });

    res.status(200).json({ success: true, message: 'Message received successfully' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
