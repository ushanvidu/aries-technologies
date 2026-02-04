'use client';

import { motion } from 'framer-motion';
import { Code, Bot, Globe, Cpu, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
    {
        title: 'Software Solutions',
        description: 'Scalable, robust, and high-performance software tailored to your enterprise needs.',
        icon: Code,
        colSpan: 'md:col-span-2',
        gradient: 'from-blue-500/20 to-purple-500/20',
    },
    {
        title: 'AI & Machine Learning',
        description: 'Leverage the power of neural networks to automate and optimize your business.',
        icon: Bot,
        colSpan: 'md:col-span-1',
        gradient: 'from-red-500/20 to-orange-500/20',
    },
    {
        title: 'Advanced Web Development',
        description: 'Next-gen web applications built with React, Next.js, and modern best practices.',
        icon: Globe,
        colSpan: 'md:col-span-1',
        gradient: 'from-green-500/20 to-emerald-500/20',
    },
    {
        title: 'Custom Tech Solutions',
        description: 'Bespoke technological innovations designed to solve your most complex challenges.',
        icon: Cpu,
        colSpan: 'md:col-span-2',
        gradient: 'from-pink-500/20 to-rose-500/20',
    },
];

export function Services() {
    return (
        <section id="services" className="py-24 bg-black relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[128px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center lg:text-left"
                >
                    <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Our Expertise</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white">
                        Engineering the <br className="hidden md:block" /> Impossible.
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={cn(
                                "group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:border-white/20 transition-all duration-300",
                                service.colSpan
                            )}
                        >
                            {/* Gradient Blob on Hover */}
                            <div
                                className={cn(
                                    "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                                    service.gradient
                                )}
                            />

                            <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                                <div className="flex justify-between items-start">
                                    <div className="p-3 bg-white/10 rounded-2xl w-fit text-white group-hover:scale-110 transition-transform duration-300">
                                        <service.icon size={28} />
                                    </div>
                                    <ArrowUpRight className="text-white/30 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </div>

                                <div>
                                    <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h4>
                                    <p className="text-white/60 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
