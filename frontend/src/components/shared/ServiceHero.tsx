'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface ServiceHeroProps {
    title: string;
    subtitle: string;
    description: string;
    icon: ReactNode;
    gradient: string;
    backgroundImage?: string;
}

export function ServiceHero({ title, subtitle, description, icon, gradient, backgroundImage }: ServiceHeroProps) {
    return (
        <section className="relative min-h-[70vh] w-full overflow-hidden flex flex-col justify-center pt-20">
            {/* Background Image or Animated Background */}
            {backgroundImage ? (
                <div className="absolute inset-0">
                    <Image
                        src={backgroundImage}
                        alt={title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>
            ) : (
                <div className="absolute inset-0 bg-black">
                    <div className={`absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br ${gradient} rounded-full blur-[128px] opacity-30 animate-pulse`} />
                    <div className={`absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br ${gradient} rounded-full blur-[128px] opacity-20 animate-pulse`} style={{ animationDelay: '1s' }} />
                </div>
            )}

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

            <div className="container relative z-20 px-6 mx-auto">
                <Link
                    href="/#services"
                    className="inline-flex items-center gap-2 text-white/60 hover:text-primary transition-colors mb-8 group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Services
                </Link>

                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8 inline-block"
                    >
                        <div className={`p-6 bg-gradient-to-br ${gradient} rounded-3xl text-white`}>
                            {icon}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-4">
                            {subtitle}
                        </h2>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                        className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-8"
                    >
                        {title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                        className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed"
                    >
                        {description}
                    </motion.p>
                </div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
        </section>
    );
}
