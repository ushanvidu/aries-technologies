const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/database');

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(helmet({
    crossOriginResourcePolicy: false, // Allow Postman & external API clients
    crossOriginEmbedderPolicy: false,
})); // Security headers
app.use(morgan('dev')); // Request logging
app.use(cors({
    origin: '*', // Allow all origins for API access (restrict in production if needed)
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: false
}));
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Routes
app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Aries Technologies API',
        version: '1.0.0',
        endpoints: {
            admin: '/api/admin/login',
            contact: '/api/contact',
            serviceInquiry: '/api/services/inquiry',
            serviceInquiries: '/api/services/inquiries',
            health: '/api/health'
        }
    });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        success: true,
        status: 'healthy',
        timestamp: new Date().toISOString(),
        database: 'connected'
    });
});

// API Routes
app.use('/api/admin', require('./routes/admin'));
app.use('/api/contact', require('./routes/contact'));
app.use('/api/services', require('./routes/services'));

// 404 Handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found'
    });
});

// Error Handler
app.use((err, req, res, next) => {
    console.error('Error:', err);

    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal server error',
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`CORS enabled for: ${process.env.CORS_ORIGIN || 'all origins'}`);

    // Warn about missing optional config
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
        console.warn('⚠️  EMAIL_USER / EMAIL_PASSWORD not set — email notifications disabled.');
    }
    if (!process.env.JWT_SECRET) {
        console.error('❌ CRITICAL: JWT_SECRET is not set. Admin auth will fail.');
    }
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
    console.error(' Unhandled Promise Rejection:', err);
    // Close server & exit process
    process.exit(1);
});
