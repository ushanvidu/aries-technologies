'use client';

import { motion } from 'framer-motion';
import { ParticleScene } from './ParticleScene';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex flex-col justify-center">
            {/* 3D Background */}
            <ParticleScene />

            {/* Content Overlay */}
            <div className="container relative z-20 px-6 mx-auto">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-4">
                            Innovate. Elevate. Dominate.
                        </h2>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-tight mb-8"
                    >
                        The Future of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
                            Creative Tech
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                        className="text-lg md:text-xl text-white/60 max-w-2xl mb-10 leading-relaxed"
                    >
                        Aries Technologies bridges the gap between imagination and reality.
                        We build ultra-modern software solutions powered by AI and
                        cutting-edge web technologies.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Link
                            href="#contact"
                            className="group flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-red-600 transition-all transform hover:scale-105"
                        >
                            Start Project
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="#services"
                            className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/20 transition-all"
                        >
                            Explore Services
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                >
                    <ChevronDown className="w-8 h-8 text-white/30" />
                </motion.div>
            </motion.div>
        </section>
    );
}
