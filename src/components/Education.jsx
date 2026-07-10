import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

export default function Education() {
    const education = portfolioData.education;

    return (
        <section id="education" className="py-24 bg-slate-950 relative">
            <div className="max-w-4xl mx-auto px-6">
                
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white">
                        06. <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Academic History</span>
                    </h2>
                    <div className="h-[1px] bg-slate-800 flex-grow" />
                </div>

                {/* Timeline wrapper */}
                <div className="relative timeline-line pl-8 md:pl-0">
                    
                    {education.map((edu, i) => (
                        <div key={i} className="relative mb-12 flex flex-col md:flex-row items-start md:items-center">
                            
                            {/* Desktop Timeline Date Column (Left side of timeline dot) */}
                            <div className="hidden md:block w-1/2 pr-8 text-right">
                                <span className="text-sm font-semibold text-indigo-400 tracking-wider">
                                    {edu.duration}
                                </span>
                            </div>

                            {/* Timeline Node Dot */}
                            <div className="absolute left-[20px] md:left-1/2 -ml-[5px] top-1.5 md:top-auto w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-md shadow-indigo-500/80 z-10" />

                            {/* Timeline Card Column (Right side of timeline dot) */}
                            <motion.div 
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className="w-full md:w-1/2 md:pl-8"
                            >
                                <div className="glass-card p-6 relative group hover:border-indigo-500/25 transition-all">
                                    
                                    {/* Date inside card for mobile screen view */}
                                    <span className="md:hidden text-xs font-semibold text-indigo-400 block mb-1">
                                        {edu.duration}
                                    </span>
                                    
                                    <h3 className="font-heading text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                                        {edu.degree}
                                    </h3>
                                    <h4 className="text-sm font-medium text-slate-400 mt-0.5">
                                        {edu.school}
                                    </h4>
                                    
                                    <p className="text-slate-400 text-sm mt-4 leading-relaxed font-light">
                                        {edu.desc}
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                    
                </div>

            </div>
        </section>
    );
}
