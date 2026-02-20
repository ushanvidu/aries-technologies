const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Contact = require('../models/Contact');
const { sendContactNotification } = require('../services/emailService');
const authMiddleware = require('../middleware/auth');

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
    body('phone')
        .trim()
        .notEmpty().withMessage('Phone number is required'),
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

        const { name, email, phone, message, serviceInterest } = req.body;

        // Create new contact
        const contact = new Contact({
            name,
            email,
            phone,
            message,
            serviceInterest: serviceInterest || null
        });

        await contact.save();

        // Send email notification (non-blocking)
        sendContactNotification({
            name: contact.name,
            email: contact.email,
            phone: contact.phone,
            message: contact.message,
            createdAt: contact.createdAt
        }).catch(err => {
            console.error('Failed to send email notification:', err);
            // Don't fail the request if email fails
        });

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

// GET /api/contact - Get all contacts (admin only)
router.get('/', authMiddleware, async (req, res) => {
    try {
        const { status, limit = 50, page = 1, search } = req.query;

        const query = {};
        if (status) query.status = status;
        if (search) {
            query.$or = [
                { name: { $regex: search, $options: 'i' } },
                { email: { $regex: search, $options: 'i' } },
                { message: { $regex: search, $options: 'i' } }
            ];
        }

        const skip = (page - 1) * limit;

        const contacts = await Contact.find(query)
            .sort({ createdAt: -1 })
            .limit(parseInt(limit))
            .skip(skip)
            .select('-__v');

        const total = await Contact.countDocuments(query);
        const unreadCount = await Contact.countDocuments({ isRead: false });

        res.json({
            success: true,
            data: contacts,
            stats: {
                total,
                unread: unreadCount
            },
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

// PATCH /api/contact/:id/read - Mark contact as read/unread (admin only)
router.patch('/:id/read', authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;
        const { isRead } = req.body;

        const contact = await Contact.findByIdAndUpdate(
            id,
            { isRead: isRead !== undefined ? isRead : true },
            { new: true }
        );

        if (!contact) {
            return res.status(404).json({
                success: false,
                message: 'Contact not found'
            });
        }

        res.json({
            success: true,
            message: `Contact marked as ${contact.isRead ? 'read' : 'unread'}`,
            data: contact
        });

    } catch (error) {
        console.error('Error updating contact:', error);
        res.status(500).json({
            success: false,
            message: 'An error occurred while updating contact'
        });
    }
});

// DELETE /api/contact/:id - Delete contact (admin only)
router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;

        const contact = await Contact.findByIdAndDelete(id);

        if (!contact) {
            return res.status(404).json({
                success: false,
                message: 'Contact not found'
            });
        }

        res.json({
            success: true,
            message: 'Contact deleted successfully'
        });

    } catch (error) {
        console.error('Error deleting contact:', error);
        res.status(500).json({
            success: false,
            message: 'An error occurred while deleting contact'
        });
    }
});

module.exports = router;
