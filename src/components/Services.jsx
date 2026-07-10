import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { FiLayout, FiServer, FiCpu, FiTrendingUp } from 'react-icons/fi';

// Icon Map for compile safety
const iconMap = {
    FiLayout: <FiLayout />,
    FiServer: <FiServer />,
    FiCpu: <FiCpu />,
    FiTrendingUp: <FiTrendingUp />
};

export default function Services() {
    const services = portfolioData.services;

    const containerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.1 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="services" className="py-24 bg-slate-950/40 relative">
            <div className="max-w-6xl mx-auto px-6">
                
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white">
                        03. <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Professional Services</span>
                    </h2>
                    <div className="h-[1px] bg-slate-800 flex-grow" />
                </div>

                {/* Services Cards Grid */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {services.map((service, i) => (
                        <motion.div 
                            key={i}
                            variants={cardVariants}
                            whileHover={{ scale: 1.02 }}
                            className="glass-card p-8 flex gap-6 relative group hover:border-indigo-500/30 transition-all duration-300"
                        >
                            {/* Glowing effect inside card */}
                            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-indigo-500/5 group-hover:bg-indigo-500/10 blur-2xl pointer-events-none" />
                            
                            {/* Service Icon */}
                            <div className="p-4 rounded-xl bg-slate-900 border border-white/5 text-3xl text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 flex-shrink-0 h-16 w-16 flex items-center justify-center">
                                {iconMap[service.icon]}
                            </div>

                            {/* Service Details */}
                            <div className="flex flex-col gap-2">
                                <h3 className="font-heading text-xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
