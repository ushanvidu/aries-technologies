'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

interface Project {
    title: string;
    description: string;
    category: string;
    image: string;
    tags: string[];
    link?: string;
}

interface PortfolioProps {
    projects: Project[];
}

export function Portfolio({ projects }: PortfolioProps) {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[128px]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">
                        Our Work
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Featured Projects
                    </h3>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Transforming ideas into reality. See how we\'ve helped businesses achieve their goals.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
                        >
                            {/* Project Image */}
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                            </div>

                            {/* Project Info */}
                            <div className="p-6">
                                <div className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
                                    {project.category}
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h4>
                                <p className="text-white/60 mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-xs rounded-full bg-white/10 text-white/80"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Link */}
                                {project.link && (
                                    <a
                                        href={project.link}
                                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                                    >
                                        View Project
                                        <ExternalLink size={16} />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
