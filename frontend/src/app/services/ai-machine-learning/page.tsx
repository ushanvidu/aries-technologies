'use client';

import { ServiceHero } from '@/components/shared/ServiceHero';
import { FeatureGrid } from '@/components/shared/FeatureGrid';
import { ProcessTimeline } from '@/components/shared/ProcessTimeline';
import { TechStack } from '@/components/shared/TechStack';
import { ServiceInquiryForm } from '@/components/shared/ServiceInquiryForm';
import {
    Bot,
    Brain,
    TrendingUp,
    Eye,
    Sparkles,
    Target,
    BarChart3,
    Cpu,
    Zap,
    Shield,
    Network,
    LineChart
} from 'lucide-react';

export default function AIMLPage() {
    const features = [
        {
            icon: Brain,
            title: 'Deep Learning Models',
            description: 'Custom neural networks trained on your data for maximum accuracy and performance.',
        },
        {
            icon: TrendingUp,
            title: 'Predictive Analytics',
            description: 'Forecast trends, customer behavior, and business outcomes with advanced ML algorithms.',
        },
        {
            icon: Eye,
            title: 'Computer Vision',
            description: 'Image recognition, object detection, and visual analysis powered by state-of-the-art models.',
        },
        {
            icon: Sparkles,
            title: 'Natural Language Processing',
            description: 'Text analysis, sentiment detection, chatbots, and language understanding systems.',
        },
        {
            icon: Target,
            title: 'Recommendation Engines',
            description: 'Personalized content and product recommendations that drive engagement and sales.',
        },
        {
            icon: BarChart3,
            title: 'Data Mining',
            description: 'Extract valuable insights from massive datasets using advanced ML techniques.',
        },
        {
            icon: Cpu,
            title: 'Model Optimization',
            description: 'Efficient models optimized for production deployment with minimal latency.',
        },
        {
            icon: Zap,
            title: 'Real-time Inference',
            description: 'Lightning-fast predictions and classifications for time-sensitive applications.',
        },
        {
            icon: Shield,
            title: 'Ethical AI',
            description: 'Responsible AI development with bias detection and fairness considerations.',
        },
    ];

    const processSteps = [
        {
            number: '01',
            title: 'Data Assessment',
            description: 'We analyze your existing data sources, quality, and volume. Our team identifies the best ML approaches for your specific use case and determines data requirements.',
        },
        {
            number: '02',
            title: 'Model Development',
            description: 'Our ML engineers design and train custom models using cutting-edge frameworks. We experiment with multiple architectures to find the optimal solution.',
        },
        {
            number: '03',
            title: 'Training & Validation',
            description: 'Rigorous training with cross-validation, hyperparameter tuning, and performance optimization. We ensure models generalize well to real-world data.',
        },
        {
            number: '04',
            title: 'Integration & Deployment',
            description: 'Seamless integration into your existing systems with scalable infrastructure. We deploy models with monitoring, versioning, and automated retraining.',
        },
        {
            number: '05',
            title: 'Continuous Improvement',
            description: 'Ongoing model monitoring, performance tracking, and refinement. We adapt models as your data and business needs evolve.',
        },
    ];

    const technologies = [
        { name: 'TensorFlow', category: 'Framework' },
        { name: 'PyTorch', category: 'Framework' },
        { name: 'Scikit-learn', category: 'Framework' },
        { name: 'Keras', category: 'Framework' },
        { name: 'Python', category: 'Language' },
        { name: 'R', category: 'Language' },
        { name: 'Julia', category: 'Language' },
        { name: 'OpenCV', category: 'Computer Vision' },
        { name: 'YOLO', category: 'Computer Vision' },
        { name: 'Hugging Face', category: 'NLP' },
        { name: 'spaCy', category: 'NLP' },
        { name: 'BERT', category: 'NLP' },
        { name: 'Pandas', category: 'Data Processing' },
        { name: 'NumPy', category: 'Data Processing' },
        { name: 'Apache Spark', category: 'Big Data' },
        { name: 'MLflow', category: 'MLOps' },
        { name: 'Kubeflow', category: 'MLOps' },
        { name: 'AWS SageMaker', category: 'Cloud ML' },
        { name: 'Google AI Platform', category: 'Cloud ML' },
        { name: 'Azure ML', category: 'Cloud ML' },
    ];

    const useCases = [
        {
            icon: LineChart,
            title: 'Demand Forecasting',
            description: 'Predict future demand for inventory optimization and resource planning.',
        },
        {
            icon: Target,
            title: 'Customer Segmentation',
            description: 'Identify customer groups for targeted marketing and personalization.',
        },
        {
            icon: Eye,
            title: 'Quality Control',
            description: 'Automated visual inspection for manufacturing defect detection.',
        },
        {
            icon: Network,
            title: 'Fraud Detection',
            description: 'Real-time anomaly detection to prevent fraudulent transactions.',
        },
    ];

    return (
        <main className="min-h-screen bg-black">
            <ServiceHero
                title="AI & Machine Learning"
                subtitle="Intelligent Automation"
                description="Harness the power of artificial intelligence to automate processes, predict outcomes, and unlock insights hidden in your data. From neural networks to NLP, we build AI that works."
                icon={<Bot size={48} />}
                gradient="from-red-500/20 to-orange-500/20"
                backgroundImage="/images/hero/ai-ml.png"
            />

            {/* Features Section */}
            <section className="py-24 bg-background relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">
                            AI Capabilities
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white">
                            Cutting-Edge Machine Learning
                        </h3>
                    </div>
                    <FeatureGrid features={features} columns={3} />
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-black relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[128px]" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">
                            Our Methodology
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white">
                            Data to Deployment
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
                    <TechStack technologies={technologies} title="AI/ML Technology Stack" />
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-24 bg-black relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">
                            Real-World Applications
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            AI That Drives Business Value
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {useCases.map((useCase) => (
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

            {/* ROI Section */}
            <section className="py-24 bg-background relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[128px]" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">
                            Business Impact
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">
                            Measurable Results
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                            {[
                                { value: '40%', label: 'Cost Reduction' },
                                { value: '3x', label: 'Faster Insights' },
                                { value: '95%', label: 'Accuracy Rate' },
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
            <ServiceInquiryForm serviceType="ai-ml" serviceName="AI & Machine Learning" />
        </main>
    );
}
