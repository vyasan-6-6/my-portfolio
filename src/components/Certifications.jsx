import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';

export default function Certifications() {
    const certifications = portfolioData.certifications;

    const containerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.1 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
    };

    return (
        <section id="certifications" className="py-24 bg-slate-950/50 relative">
            <div className="max-w-6xl mx-auto px-6">
                
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white">
                        07. <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Certifications</span>
                    </h2>
                    <div className="h-[1px] bg-slate-800 flex-grow" />
                </div>

                {/* Certificates Grid */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {certifications.map((cert, i) => (
                        <motion.div 
                            key={i}
                            variants={cardVariants}
                            whileHover={{ scale: 1.02 }}
                            className="glass-card p-6 flex gap-6 relative group hover:border-indigo-500/30 transition-all duration-300"
                        >
                            {/* Award Badge Icon */}
                            <div className="p-4 rounded-xl bg-slate-900 border border-white/5 text-3xl text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 flex-shrink-0 h-14 w-14 flex items-center justify-center">
                                <FaAward />
                            </div>

                            {/* Details & Credential URL link */}
                            <div className="flex flex-col gap-2 flex-grow justify-between">
                                <div>
                                    <h3 className="font-heading text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                                        {cert.name}
                                    </h3>
                                    <h4 className="text-sm font-semibold text-slate-400">
                                        {cert.issuer} &bull; <span className="text-xs text-slate-500 font-normal">{cert.date}</span>
                                    </h4>
                                </div>
                                
                                <div className="mt-4">
                                    <a 
                                        href={cert.credentialLink} 
                                        target="_blank" 
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 font-semibold transition-colors"
                                    >
                                        View Certificate <FaExternalLinkAlt size={10} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
