'use client';

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Technology {
    name: string;
    icon?: string;
    category: string;
}

interface TechStackProps {
    technologies: Technology[];
    title?: string;
}

export function TechStack({ technologies, title = "Technologies We Use" }: TechStackProps) {
    // Group technologies by category
    const groupedTech = technologies.reduce((acc, tech) => {
        if (!acc[tech.category]) {
            acc[tech.category] = [];
        }
        acc[tech.category].push(tech);
        return acc;
    }, {} as Record<string, Technology[]>);

    return (
        <div className="space-y-8">
            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-white text-center mb-12"
            >
                {title}
            </motion.h3>

            {Object.entries(groupedTech).map(([category, techs], categoryIndex) => (
                <div key={category} className="space-y-4">
                    <motion.h4
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 }}
                        className="text-sm font-bold text-primary uppercase tracking-widest"
                    >
                        {category}
                    </motion.h4>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {techs.map((tech, index) => (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: (categoryIndex * 0.1) + (index * 0.05) }}
                                className="group relative p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 flex items-center justify-center"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

                                <div className="relative z-10 text-center">
                                    <p className="text-white font-medium text-sm group-hover:text-primary transition-colors">
                                        {tech.name}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
