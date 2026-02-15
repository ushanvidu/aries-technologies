'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { api, ServiceInquiryData } from '@/lib/api';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

interface ServiceInquiryFormProps {
    serviceType: 'software' | 'ai-ml' | 'web-dev' | 'custom';
    serviceName: string;
}

export function ServiceInquiryForm({ serviceType, serviceName }: ServiceInquiryFormProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectTitle: '',
        description: '',
        budget: '',
        timeline: '',
    });

    const [status, setStatus] = useState < 'idle' | 'loading' | 'success' | 'error' > ('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const inquiryData: ServiceInquiryData = {
                ...formData,
                serviceType,
            };

            await api.submitServiceInquiry(inquiryData);
            setStatus('success');
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                projectTitle: '',
                description: '',
                budget: '',
                timeline: '',
            });

            // Reset success message after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            setStatus('error');
            setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[128px]" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[128px]" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">
                        Start Your Project
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white">
                        Let's Build Something Amazing
                    </h3>
                    <p className="text-white/60 mt-4 max-w-2xl mx-auto">
                        Tell us about your {serviceName} project and we'll get back to you within 24 hours.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="max-w-3xl mx-auto"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Contact Information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-white/80">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-white/80">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                    placeholder="john@company.com"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium text-white/80">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                    placeholder="+1 (555) 000-0000"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="company" className="text-sm font-medium text-white/80">
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                    placeholder="Acme Inc."
                                />
                            </div>
                        </div>

                        {/* Project Details */}
                        <div className="space-y-2">
                            <label htmlFor="projectTitle" className="text-sm font-medium text-white/80">
                                Project Title *
                            </label>
                            <input
                                type="text"
                                id="projectTitle"
                                name="projectTitle"
                                value={formData.projectTitle}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                placeholder="E.g., E-commerce Platform Development"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="description" className="text-sm font-medium text-white/80">
                                Project Description *
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                rows={5}
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                                placeholder="Tell us about your project goals, requirements, and any specific features you need..."
                                required
                            />
                        </div>

                        {/* Budget & Timeline */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="budget" className="text-sm font-medium text-white/80">
                                    Budget Range
                                </label>
                                <select
                                    id="budget"
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                >
                                    <option value="" className="bg-black">Select budget range</option>
                                    <option value="<10k" className="bg-black">Less than $10,000</option>
                                    <option value="10k-50k" className="bg-black">$10,000 - $50,000</option>
                                    <option value="50k-100k" className="bg-black">$50,000 - $100,000</option>
                                    <option value="100k+" className="bg-black">$100,000+</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="timeline" className="text-sm font-medium text-white/80">
                                    Project Timeline
                                </label>
                                <select
                                    id="timeline"
                                    name="timeline"
                                    value={formData.timeline}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                >
                                    <option value="" className="bg-black">Select timeline</option>
                                    <option value="urgent" className="bg-black">Urgent (ASAP)</option>
                                    <option value="1-3months" className="bg-black">1-3 months</option>
                                    <option value="3-6months" className="bg-black">3-6 months</option>
                                    <option value="6months+" className="bg-black">6+ months</option>
                                </select>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={status === 'loading' || status === 'success'}
                            className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-red-600 transition-colors uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                        >
                            {status === 'loading' && (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Sending...
                                </>
                            )}
                            {status === 'success' && (
                                <>
                                    <CheckCircle className="w-5 h-5" />
                                    Inquiry Sent Successfully!
                                </>
                            )}
                            {status === 'idle' && (
                                <>
                                    Send Inquiry
                                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                            {status === 'error' && (
                                <>
                                    Try Again
                                    <Send className="w-5 h-5" />
                                </>
                            )}
                        </button>

                        {/* Error Message */}
                        {status === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-2 text-red-500 bg-red-500/10 border border-red-500/20 rounded-lg p-4"
                            >
                                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                <p className="text-sm">{errorMessage}</p>
                            </motion.div>
                        )}

                        {/* Success Message */}
                        {status === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-center text-white/60 text-sm"
                            >
                                We've received your inquiry and will get back to you within 24 hours.
                            </motion.div>
                        )}
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
