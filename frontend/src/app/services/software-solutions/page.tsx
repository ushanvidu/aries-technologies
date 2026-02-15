'use client';

import { ServiceHero } from '@/components/shared/ServiceHero';
import { FeatureGrid } from '@/components/shared/FeatureGrid';
import { ProcessTimeline } from '@/components/shared/ProcessTimeline';
import { TechStack } from '@/components/shared/TechStack';
import { ServiceInquiryForm } from '@/components/shared/ServiceInquiryForm';
import {
    Code,
    Zap,
    Shield,
    Layers,
    Database,
    Cloud,
    Lock,
    Gauge,
    Users,
    RefreshCw,
    CheckCircle,
    Smartphone
} from 'lucide-react';

export default function SoftwareSolutionsPage() {
    const features = [
        {
            icon: Zap,
            title: 'High Performance',
            description: 'Optimized code and architecture for lightning-fast execution and minimal resource usage.',
        },
        {
            icon: Shield,
            title: 'Enterprise Security',
            description: 'Bank-level encryption, secure authentication, and compliance with industry standards.',
        },
        {
            icon: Layers,
            title: 'Scalable Architecture',
            description: 'Built to grow with your business, from startup to enterprise scale.',
        },
        {
            icon: Database,
            title: 'Data Management',
            description: 'Robust database design with efficient querying and data integrity.',
        },
        {
            icon: Cloud,
            title: 'Cloud Native',
            description: 'Deploy anywhere - AWS, Azure, Google Cloud, or on-premise infrastructure.',
        },
        {
            icon: Lock,
            title: 'Secure by Design',
            description: 'Security best practices baked into every layer of your application.',
        },
        {
            icon: Gauge,
            title: 'Real-time Monitoring',
            description: 'Comprehensive logging, analytics, and performance monitoring dashboards.',
        },
        {
            icon: Users,
            title: 'User-Centric Design',
            description: 'Intuitive interfaces that delight users and drive engagement.',
        },
        {
            icon: RefreshCw,
            title: 'Continuous Updates',
            description: 'Regular updates, bug fixes, and feature enhancements post-launch.',
        },
    ];

    const processSteps = [
        {
            number: '01',
            title: 'Discovery & Planning',
            description: 'We dive deep into your business requirements, user needs, and technical constraints. Our team conducts thorough research to create a comprehensive project roadmap and technical specification.',
        },
        {
            number: '02',
            title: 'Architecture Design',
            description: 'Our architects design a robust, scalable system architecture. We select the optimal tech stack, define data models, and create detailed system diagrams to ensure a solid foundation.',
        },
        {
            number: '03',
            title: 'Agile Development',
            description: 'Using agile methodologies, we build your software in iterative sprints. You\'ll see progress every week with regular demos and opportunities for feedback and refinement.',
        },
        {
            number: '04',
            title: 'Quality Assurance',
            description: 'Rigorous testing at every stage - unit tests, integration tests, performance tests, and security audits. We ensure your software is bulletproof before launch.',
        },
        {
            number: '05',
            title: 'Deployment & Support',
            description: 'Smooth deployment to production with zero downtime. We provide comprehensive documentation, training, and ongoing support to ensure long-term success.',
        },
    ];

    const technologies = [
        { name: 'Node.js', category: 'Backend' },
        { name: 'Python', category: 'Backend' },
        { name: 'Java', category: 'Backend' },
        { name: 'Go', category: 'Backend' },
        { name: 'React', category: 'Frontend' },
        { name: 'Next.js', category: 'Frontend' },
        { name: 'Vue.js', category: 'Frontend' },
        { name: 'Angular', category: 'Frontend' },
        { name: 'PostgreSQL', category: 'Database' },
        { name: 'MongoDB', category: 'Database' },
        { name: 'Redis', category: 'Database' },
        { name: 'MySQL', category: 'Database' },
        { name: 'Docker', category: 'DevOps' },
        { name: 'Kubernetes', category: 'DevOps' },
        { name: 'AWS', category: 'Cloud' },
        { name: 'Azure', category: 'Cloud' },
        { name: 'Google Cloud', category: 'Cloud' },
        { name: 'GraphQL', category: 'API' },
        { name: 'REST', category: 'API' },
        { name: 'gRPC', category: 'API' },
    ];

    return (
        <main className="min-h-screen bg-black">
            <ServiceHero
                title="Software Solutions"
                subtitle="Enterprise Software Development"
                description="Transform your business with custom software solutions built for scale, security, and performance. From concept to deployment, we engineer software that drives real results."
                icon={<Code size={48} />}
                gradient="from-blue-500/20 to-purple-500/20"
                backgroundImage="/images/hero/software.png"
            />

            {/* Features Section */}
            <section className="py-24 bg-background relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">
                            What We Deliver
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white">
                            Enterprise-Grade Features
                        </h3>
                    </div>
                    <FeatureGrid features={features} columns={3} />
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-black relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[128px]" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">
                            Our Process
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white">
                            From Idea to Production
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
                    <TechStack technologies={technologies} />
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-24 bg-black relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">
                            Use Cases
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Solutions for Every Industry
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                icon: Smartphone,
                                title: 'SaaS Platforms',
                                description: 'Multi-tenant applications with subscription management, analytics, and seamless integrations.',
                            },
                            {
                                icon: Database,
                                title: 'Enterprise Systems',
                                description: 'ERP, CRM, and custom business management systems that streamline operations.',
                            },
                            {
                                icon: Cloud,
                                title: 'Cloud Applications',
                                description: 'Scalable cloud-native applications with microservices architecture.',
                            },
                            {
                                icon: CheckCircle,
                                title: 'Automation Tools',
                                description: 'Workflow automation, data processing, and integration platforms.',
                            },
                        ].map((useCase, index) => (
                            <div
                                key={useCase.title}
                                className="group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
                            >
                                <div className="mb-4 p-3 bg-white/10 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                                    <useCase.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                    {useCase.title}
                                </h4>
                                <p className="text-white/60 leading-relaxed">
                                    {useCase.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Inquiry Form */}
            <ServiceInquiryForm serviceType="software" serviceName="Software Solutions" />
        </main>
    );
}
