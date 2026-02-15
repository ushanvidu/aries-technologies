'use client';

import { ServiceHero } from '@/components/shared/ServiceHero';
import { FeatureGrid } from '@/components/shared/FeatureGrid';
import { ProcessTimeline } from '@/components/shared/ProcessTimeline';
import { ServiceInquiryForm } from '@/components/shared/ServiceInquiryForm';
import {
    Cpu,
    Lightbulb,
    Rocket,
    Target,
    Workflow,
    Blocks,
    Sparkles,
    TrendingUp,
    Shield,
    Zap,
    Users,
    Settings
} from 'lucide-react';

export default function CustomSolutionsPage() {
    const features = [
        {
            icon: Lightbulb,
            title: 'Innovation First',
            description: 'Cutting-edge solutions that push the boundaries of what\'s possible.',
        },
        {
            icon: Target,
            title: 'Tailored to You',
            description: 'Every solution is custom-built for your unique requirements and challenges.',
        },
        {
            icon: Workflow,
            title: 'Process Automation',
            description: 'Streamline operations with intelligent automation and workflow optimization.',
        },
        {
            icon: Blocks,
            title: 'System Integration',
            description: 'Seamlessly connect disparate systems and create unified workflows.',
        },
        {
            icon: Sparkles,
            title: 'Emerging Tech',
            description: 'Leverage blockchain, IoT, AR/VR, and other cutting-edge technologies.',
        },
        {
            icon: TrendingUp,
            title: 'Scalable Solutions',
            description: 'Built to grow with your business from startup to enterprise.',
        },
        {
            icon: Shield,
            title: 'Enterprise Security',
            description: 'Military-grade security and compliance with industry regulations.',
        },
        {
            icon: Zap,
            title: 'Rapid Prototyping',
            description: 'Quick proof-of-concepts to validate ideas before full development.',
        },
        {
            icon: Users,
            title: 'Expert Consultation',
            description: 'Strategic guidance from experienced technology consultants.',
        },
    ];

    const processSteps = [
        {
            number: '01',
            title: 'Deep Discovery',
            description: 'We immerse ourselves in your business to understand your challenges, goals, and constraints. Our team conducts stakeholder interviews, process mapping, and competitive analysis.',
        },
        {
            number: '02',
            title: 'Innovation Workshop',
            description: 'Collaborative brainstorming sessions to explore creative solutions. We evaluate emerging technologies and design innovative approaches tailored to your needs.',
        },
        {
            number: '03',
            title: 'Proof of Concept',
            description: 'Rapid prototyping to validate the technical feasibility and business value. We build working demos to test assumptions and gather feedback.',
        },
        {
            number: '04',
            title: 'Custom Development',
            description: 'Full-scale development of your custom solution with agile methodology. Regular sprints, demos, and iterations ensure we stay aligned with your vision.',
        },
        {
            number: '05',
            title: 'Integration & Scale',
            description: 'Seamless integration with existing systems and infrastructure. We ensure your solution scales efficiently as your business grows.',
        },
    ];

    const industries = [
        {
            icon: Settings,
            title: 'Manufacturing',
            description: 'IoT sensors, predictive maintenance, and supply chain optimization.',
        },
        {
            icon: TrendingUp,
            title: 'Finance',
            description: 'Blockchain solutions, algorithmic trading, and risk management systems.',
        },
        {
            icon: Users,
            title: 'Healthcare',
            description: 'Telemedicine platforms, patient management, and medical imaging AI.',
        },
        {
            icon: Rocket,
            title: 'Startups',
            description: 'MVP development, rapid prototyping, and technical co-founding.',
        },
    ];

    const capabilities = [
        'Blockchain & Web3 Development',
        'IoT & Edge Computing',
        'AR/VR Experiences',
        'Chatbots & Conversational AI',
        'Data Pipelines & ETL',
        'API Development & Integration',
        'Legacy System Modernization',
        'Cloud Migration & Optimization',
        'DevOps & CI/CD',
        'Microservices Architecture',
        'Real-time Data Processing',
        'Custom Analytics Dashboards',
    ];

    return (
        <main className="min-h-screen bg-black">
            <ServiceHero
                title="Custom Tech Solutions"
                subtitle="Bespoke Innovation"
                description="When off-the-shelf solutions don't cut it, we build custom technology tailored to your exact needs. From blockchain to IoT, we turn your boldest ideas into reality."
                icon={<Cpu size={48} />}
                gradient="from-pink-500/20 to-rose-500/20"
                backgroundImage="/images/hero/custom.png"
            />

            {/* Features Section */}
            <section className="py-24 bg-background relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">
                            Our Approach
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white">
                            Innovation Without Limits
                        </h3>
                    </div>
                    <FeatureGrid features={features} columns={3} />
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-black relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[128px]" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">
                            Our Process
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white">
                            From Vision to Reality
                        </h3>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <ProcessTimeline steps={processSteps} />
                    </div>
                </div>
            </section>

            {/* Capabilities Grid */}
            <section className="py-24 bg-background relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">
                            Technical Expertise
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white">
                            What We Can Build
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
                        {capabilities.map((capability, index) => (
                            <div
                                key={capability}
                                className="group p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 text-center"
                            >
                                <p className="text-white group-hover:text-primary transition-colors font-medium">
                                    {capability}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section className="py-24 bg-black relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">
                            Industry Solutions
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Expertise Across Sectors
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {industries.map((industry) => (
                            <div
                                key={industry.title}
                                className="group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
                            >
                                <div className="mb-4 p-3 bg-white/10 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                                    <industry.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                    {industry.title}
                                </h4>
                                <p className="text-white/60 leading-relaxed">
                                    {industry.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-background relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-pink-500/10" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">
                            Ready to Innovate?
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Let's Build Something Extraordinary
                        </h3>
                        <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
                            Whether you have a clear vision or just an idea, our team is ready to help you build custom technology that gives you a competitive edge.
                        </p>
                    </div>
                </div>
            </section>

            {/* Inquiry Form */}
            <ServiceInquiryForm serviceType="custom" serviceName="Custom Tech Solutions" />
        </main>
    );
}
