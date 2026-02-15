const mongoose = require('mongoose');

const serviceInquirySchema = new mongoose.Schema({
    // Contact Information
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        maxlength: [100, 'Name cannot exceed 100 characters']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address']
    },
    phone: {
        type: String,
        trim: true,
        default: ''
    },
    company: {
        type: String,
        trim: true,
        default: ''
    },

    // Service Details
    serviceType: {
        type: String,
        required: [true, 'Service type is required'],
        enum: ['software', 'ai-ml', 'web-dev', 'custom']
    },
    projectTitle: {
        type: String,
        required: [true, 'Project title is required'],
        trim: true,
        maxlength: [200, 'Project title cannot exceed 200 characters']
    },
    description: {
        type: String,
        required: [true, 'Project description is required'],
        trim: true,
        maxlength: [2000, 'Description cannot exceed 2000 characters']
    },

    // Project Scope
    budget: {
        type: String,
        enum: ['<10k', '10k-50k', '50k-100k', '100k+', ''],
        default: ''
    },
    timeline: {
        type: String,
        enum: ['urgent', '1-3months', '3-6months', '6months+', ''],
        default: ''
    },
    requirements: [{
        type: String
    }],

    // Meta
    status: {
        type: String,
        enum: ['new', 'reviewing', 'quoted', 'accepted', 'rejected'],
        default: 'new'
    },
    notes: {
        type: String,
        default: ''
    }
}, {
    timestamps: true
});

// Indexes for faster queries
serviceInquirySchema.index({ email: 1, createdAt: -1 });
serviceInquirySchema.index({ serviceType: 1, status: 1 });
serviceInquirySchema.index({ status: 1, createdAt: -1 });

module.exports = mongoose.model('ServiceInquiry', serviceInquirySchema);
