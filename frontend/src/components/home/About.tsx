'use client';

import { motion } from 'framer-motion';

export function About() {
    return (
        <section id="about" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Who We Are</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Visionaries of the Digital Frontier.
                        </h3>
                        <p className="text-white/60 text-lg leading-relaxed mb-6">
                            At Aries Technologies, we don’t just write code; we architect ecosystems.
                            Our team composed of elite engineers and creative technologists is dedicated
                            to pushing the boundaries of what's possible on the web.
                        </p>
                        <p className="text-white/60 text-lg leading-relaxed">
                            From complex AI algorithms to immersive 3D web experiences, we deliver
                            solutions that are not only functional but also awe-inspiring.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[400px] w-full bg-gradient-to-tr from-white/5 to-white/10 rounded-2xl border border-white/10 backdrop-blur-md flex items-center justify-center overflow-hidden"
                    >
                        {/* Abstract visual */}
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full transform translate-x-1/2 translate-y-1/2" />
                        <div className="text-9xl font-bold text-white/5 select-none">ARIES</div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
