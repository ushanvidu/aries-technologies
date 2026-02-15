const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Contact = require('../models/Contact');

// Validation middleware
const validateContact = [
    body('name')
        .trim()
        .notEmpty().withMessage('Name is required')
        .isLength({ max: 100 }).withMessage('Name cannot exceed 100 characters'),
    body('email')
        .trim()
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Please provide a valid email address')
        .normalizeEmail(),
    body('message')
        .trim()
        .notEmpty().withMessage('Message is required')
        .isLength({ max: 1000 }).withMessage('Message cannot exceed 1000 characters'),
    body('serviceInterest')
        .optional()
        .isIn(['software', 'ai-ml', 'web-dev', 'custom']).withMessage('Invalid service type')
];

// POST /api/contact - Submit contact form
router.post('/', validateContact, async (req, res) => {
    try {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: 'Validation failed',
                errors: errors.array()
            });
        }

        const { name, email, message, serviceInterest } = req.body;

        // Create new contact
        const contact = new Contact({
            name,
            email,
            message,
            serviceInterest: serviceInterest || null
        });

        await contact.save();

        // TODO: Send email notification (optional)
        // await sendContactNotification(contact);

        res.status(201).json({
            success: true,
            message: 'Contact form submitted successfully',
            data: {
                id: contact._id,
                name: contact.name,
                email: contact.email
            }
        });

    } catch (error) {
        console.error('Error submitting contact form:', error);
        res.status(500).json({
            success: false,
            message: 'An error occurred while processing your request'
        });
    }
});

// GET /api/contact - Get all contacts (for admin dashboard - optional)
router.get('/', async (req, res) => {
    try {
        const { status, limit = 50, page = 1 } = req.query;

        const query = status ? { status } : {};
        const skip = (page - 1) * limit;

        const contacts = await Contact.find(query)
            .sort({ createdAt: -1 })
            .limit(parseInt(limit))
            .skip(skip)
            .select('-__v');

        const total = await Contact.countDocuments(query);

        res.json({
            success: true,
            data: contacts,
            pagination: {
                total,
                page: parseInt(page),
                limit: parseInt(limit),
                pages: Math.ceil(total / limit)
            }
        });

    } catch (error) {
        console.error('Error fetching contacts:', error);
        res.status(500).json({
            success: false,
            message: 'An error occurred while fetching contacts'
        });
    }
});

module.exports = router;
