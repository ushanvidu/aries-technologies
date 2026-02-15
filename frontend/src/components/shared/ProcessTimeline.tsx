'use client';

'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface Step {
    number: string;
    title: string;
    description: string;
}

interface ProcessTimelineProps {
    steps: Step[];
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
    return (
        <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            <div className="space-y-12">
                {steps.map((step, index) => (
                    <motion.div
                        key={step.number}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="relative flex gap-8 items-start"
                    >
                        {/* Number Circle */}
                        <div className="relative z-10 flex-shrink-0">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-red-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/50">
                                {step.number}
                            </div>
                            <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 pt-2">
                            <h3 className="text-2xl font-bold text-white mb-3">
                                {step.title}
                            </h3>
                            <p className="text-white/60 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
