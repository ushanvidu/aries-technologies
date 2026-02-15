const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const ServiceInquiry = require('../models/ServiceInquiry');

// Validation middleware
const validateServiceInquiry = [
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
        .optional()
        .trim(),
    body('company')
        .optional()
        .trim(),
    body('serviceType')
        .notEmpty().withMessage('Service type is required')
        .isIn(['software', 'ai-ml', 'web-dev', 'custom']).withMessage('Invalid service type'),
    body('projectTitle')
        .trim()
        .notEmpty().withMessage('Project title is required')
        .isLength({ max: 200 }).withMessage('Project title cannot exceed 200 characters'),
    body('description')
        .trim()
        .notEmpty().withMessage('Project description is required')
        .isLength({ max: 2000 }).withMessage('Description cannot exceed 2000 characters'),
    body('budget')
        .optional()
        .isIn(['<10k', '10k-50k', '50k-100k', '100k+']).withMessage('Invalid budget range'),
    body('timeline')
        .optional()
        .isIn(['urgent', '1-3months', '3-6months', '6months+']).withMessage('Invalid timeline'),
    body('requirements')
        .optional()
        .isArray().withMessage('Requirements must be an array')
];

// POST /api/services/inquiry - Submit service inquiry
router.post('/inquiry', validateServiceInquiry, async (req, res) => {
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

        const inquiryData = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone || '',
            company: req.body.company || '',
            serviceType: req.body.serviceType,
            projectTitle: req.body.projectTitle,
            description: req.body.description,
            budget: req.body.budget || '',
            timeline: req.body.timeline || '',
            requirements: req.body.requirements || []
        };

        // Create new service inquiry
        const inquiry = new ServiceInquiry(inquiryData);
        await inquiry.save();

        // TODO: Send email notification (optional)
        // await sendInquiryNotification(inquiry);

        res.status(201).json({
            success: true,
            message: 'Service inquiry submitted successfully',
            data: {
                id: inquiry._id,
                serviceType: inquiry.serviceType,
                projectTitle: inquiry.projectTitle
            }
        });

    } catch (error) {
        console.error('Error submitting service inquiry:', error);
        res.status(500).json({
            success: false,
            message: 'An error occurred while processing your request'
        });
    }
});

// GET /api/services/inquiries - Get all service inquiries (for admin dashboard - optional)
router.get('/inquiries', async (req, res) => {
    try {
        const { serviceType, status, limit = 50, page = 1 } = req.query;

        const query = {};
        if (serviceType) query.serviceType = serviceType;
        if (status) query.status = status;

        const skip = (page - 1) * limit;

        const inquiries = await ServiceInquiry.find(query)
            .sort({ createdAt: -1 })
            .limit(parseInt(limit))
            .skip(skip)
            .select('-__v');

        const total = await ServiceInquiry.countDocuments(query);

        res.json({
            success: true,
            data: inquiries,
            pagination: {
                total,
                page: parseInt(page),
                limit: parseInt(limit),
                pages: Math.ceil(total / limit)
            }
        });

    } catch (error) {
        console.error('Error fetching service inquiries:', error);
        res.status(500).json({
            success: false,
            message: 'An error occurred while fetching inquiries'
        });
    }
});

// GET /api/services/inquiries/:id - Get single inquiry by ID (for admin dashboard - optional)
router.get('/inquiries/:id', async (req, res) => {
    try {
        const inquiry = await ServiceInquiry.findById(req.params.id).select('-__v');

        if (!inquiry) {
            return res.status(404).json({
                success: false,
                message: 'Inquiry not found'
            });
        }

        res.json({
            success: true,
            data: inquiry
        });

    } catch (error) {
        console.error('Error fetching inquiry:', error);
        res.status(500).json({
            success: false,
            message: 'An error occurred while fetching the inquiry'
        });
    }
});

module.exports = router;
