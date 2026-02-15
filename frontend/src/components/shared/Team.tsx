'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin, Twitter, Github } from 'lucide-react';

interface TeamMember {
    name: string;
    role: string;
    bio: string;
    image: string;
    social?: {
        linkedin?: string;
        twitter?: string;
        github?: string;
    };
}

interface TeamProps {
    members: TeamMember[];
}

export function Team({ members }: TeamProps) {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[128px]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">
                        Our Team
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Meet the Experts
                    </h3>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Talented professionals dedicated to bringing your vision to life with cutting-edge technology.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {members.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
                        >
                            {/* Member Image */}
                            <div className="relative h-80 overflow-hidden">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />

                                {/* Social Links Overlay */}
                                {member.social && (
                                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {member.social.linkedin && (
                                            <a
                                                href={member.social.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-primary transition-colors"
                                            >
                                                <Linkedin size={20} className="text-white" />
                                            </a>
                                        )}
                                        {member.social.twitter && (
                                            <a
                                                href={member.social.twitter}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-primary transition-colors"
                                            >
                                                <Twitter size={20} className="text-white" />
                                            </a>
                                        )}
                                        {member.social.github && (
                                            <a
                                                href={member.social.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-primary transition-colors"
                                            >
                                                <Github size={20} className="text-white" />
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Member Info */}
                            <div className="p-6">
                                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                                    {member.name}
                                </h4>
                                <div className="text-sm font-medium text-primary mb-3">
                                    {member.role}
                                </div>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    {member.bio}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
