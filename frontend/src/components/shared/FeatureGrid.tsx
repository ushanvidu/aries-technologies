'use client';

'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
}

interface FeatureGridProps {
    features: Feature[];
    columns?: 2 | 3 | 4;
}

export function FeatureGrid({ features, columns = 3 }: FeatureGridProps) {
    const gridCols = {
        2: 'md:grid-cols-2',
        3: 'md:grid-cols-3',
        4: 'md:grid-cols-4',
    };

    return (
        <div className={cn('grid grid-cols-1 gap-6', gridCols[columns])}>
            {features.map((feature, index) => (
                <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all duration-300"
                >
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                    <div className="relative z-10">
                        <div className="mb-4 p-3 bg-white/10 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                            <feature.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                            {feature.title}
                        </h3>
                        <p className="text-white/60 text-sm leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
