'use client';

import { ServiceHero } from '@/components/shared/ServiceHero';
import { FeatureGrid } from '@/components/shared/FeatureGrid';
import { ProcessTimeline } from '@/components/shared/ProcessTimeline';
import { TechStack } from '@/components/shared/TechStack';
import { ServiceInquiryForm } from '@/components/shared/ServiceInquiryForm';
import {
    Globe,
    Smartphone,
    Zap,
    Palette,
    Search,
    Lock,
    Gauge,
    Users,
    ShoppingCart,
    FileText,
    Briefcase,
    MessageSquare
} from 'lucide-react';

export default function WebDevelopmentPage() {
    const features = [
        {
            icon: Zap,
            title: 'Lightning Fast',
            description: 'Optimized for speed with lazy loading, code splitting, and CDN delivery.',
        },
        {
            icon: Smartphone,
            title: 'Fully Responsive',
            description: 'Perfect experience across all devices - mobile, tablet, and desktop.',
        },
        {
            icon: Palette,
            title: 'Modern Design',
            description: 'Beautiful, intuitive interfaces that engage users and drive conversions.',
        },
        {
            icon: Search,
            title: 'SEO Optimized',
            description: 'Built for search engines with semantic HTML, meta tags, and performance.',
        },
        {
            icon: Lock,
            title: 'Secure & Reliable',
            description: 'HTTPS, data encryption, and security best practices throughout.',
        },
        {
            icon: Gauge,
            title: 'High Performance',
            description: 'Lighthouse scores of 90+ for performance, accessibility, and SEO.',
        },
        {
            icon: Users,
            title: 'User-Centric',
            description: 'Designed with your users in mind for maximum engagement and satisfaction.',
        },
        {
            icon: Globe,
            title: 'Progressive Web Apps',
            description: 'Offline support, push notifications, and app-like experiences.',
        },
    ];

    const processSteps = [
        {
            number: '01',
            title: 'Discovery & Strategy',
            description: 'We understand your brand, target audience, and business goals. Our team creates a comprehensive strategy including sitemap, user flows, and feature requirements.',
        },
        {
            number: '02',
            title: 'Design & Prototyping',
            description: 'Our designers create stunning mockups and interactive prototypes. You\'ll see exactly how your website will look and feel before we write a single line of code.',
        },
        {
            number: '03',
            title: 'Development',
            description: 'Using modern frameworks like Next.js and React, we build your website with clean, maintainable code. Regular updates keep you in the loop throughout development.',
        },
        {
            number: '04',
            title: 'Testing & Optimization',
            description: 'Comprehensive testing across browsers and devices. Performance optimization, accessibility audits, and SEO implementation ensure a flawless launch.',
        },
        {
            number: '05',
            title: 'Launch & Growth',
            description: 'Smooth deployment with monitoring and analytics. We provide training, documentation, and ongoing support to help your website succeed.',
        },
    ];

    const technologies = [
        { name: 'Next.js', category: 'Framework' },
        { name: 'React', category: 'Framework' },
        { name: 'Vue.js', category: 'Framework' },
        { name: 'Svelte', category: 'Framework' },
        { name: 'TypeScript', category: 'Language' },
        { name: 'JavaScript', category: 'Language' },
        { name: 'Tailwind CSS', category: 'Styling' },
        { name: 'Sass', category: 'Styling' },
        { name: 'Framer Motion', category: 'Animation' },
        { name: 'GSAP', category: 'Animation' },
        { name: 'Three.js', category: '3D Graphics' },
        { name: 'GraphQL', category: 'API' },
        { name: 'REST API', category: 'API' },
        { name: 'Vercel', category: 'Hosting' },
        { name: 'Netlify', category: 'Hosting' },
        { name: 'AWS', category: 'Cloud' },
        { name: 'Contentful', category: 'CMS' },
        { name: 'Sanity', category: 'CMS' },
        { name: 'Stripe', category: 'Payments' },
        { name: 'Auth0', category: 'Authentication' },
    ];

    const projectTypes = [
        {
            icon: Briefcase,
            title: 'Corporate Websites',
            description: 'Professional websites that establish credibility and showcase your brand.',
        },
        {
            icon: ShoppingCart,
            title: 'E-Commerce',
            description: 'Full-featured online stores with payment processing and inventory management.',
        },
        {
            icon: FileText,
            title: 'Landing Pages',
            description: 'High-converting landing pages optimized for campaigns and lead generation.',
        },
        {
            icon: MessageSquare,
            title: 'Web Applications',
            description: 'Complex web apps with real-time features, dashboards, and user management.',
        },
    ];

    return (
        <main className="min-h-screen bg-black">
            <ServiceHero
                title="Web Development"
                subtitle="Next-Generation Web Experiences"
                description="Build stunning, high-performance websites and web applications that captivate users and drive business growth. From landing pages to complex web apps, we craft digital experiences that matter."
                icon={<Globe size={48} />}
                gradient="from-green-500/20 to-emerald-500/20"
                backgroundImage="/images/hero/web-dev.png"
            />

            {/* Features Section */}
            <section className="py-24 bg-background relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">
                            What You Get
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white">
                            Modern Web Standards
                        </h3>
                    </div>
                    <FeatureGrid features={features} columns={4} />
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-black relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[128px]" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">
                            Our Process
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white">
                            From Concept to Launch
                        </h3>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <ProcessTimeline steps={processSteps} />
                    </div>
                </div>
            </section>

            {/* Technology Stack */}
            <section className="py-24 bg-background relative">
                <div className="container mx-auto px-6">
                    <TechStack technologies={technologies} title="Modern Web Technologies" />
                </div>
            </section>

            {/* Project Types */}
            <section className="py-24 bg-black relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">
                            What We Build
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Websites That Convert
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {projectTypes.map((project) => (
                            <div
                                key={project.title}
                                className="group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
                            >
                                <div className="mb-4 p-3 bg-white/10 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                                    <project.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h4>
                                <p className="text-white/60 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Performance Metrics */}
            <section className="py-24 bg-background relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[128px]" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">
                            Performance Guaranteed
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">
                            Speed Matters
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                            {[
                                { value: '<1s', label: 'Load Time' },
                                { value: '95+', label: 'Lighthouse Score' },
                                { value: '100%', label: 'Mobile Friendly' },
                            ].map((stat) => (
                                <div key={stat.label} className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                                    <div className="text-5xl font-bold text-primary mb-2">{stat.value}</div>
                                    <div className="text-white/60 uppercase tracking-wider text-sm">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Inquiry Form */}
            <ServiceInquiryForm serviceType="web-dev" serviceName="Web Development" />
        </main>
    );
}
