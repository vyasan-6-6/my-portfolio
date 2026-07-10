import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { 
    SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiRedux, SiTailwindcss,
    SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiRedis, SiNginx, SiDocker, SiGit,
    SiJsonwebtokens, SiSocketdotio
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

// Static Icon Map for simple, reliable compiling
const iconMap = {
    SiHtml5: <SiHtml5 />,
    SiCss: <SiCss />,
    SiJavascript: <SiJavascript />,
    SiTypescript: <SiTypescript />,
    SiReact: <SiReact />,
    SiNextdotjs: <SiNextdotjs />,
    SiRedux: <SiRedux />,
    SiTailwindcss: <SiTailwindcss />,
    SiNodedotjs: <SiNodedotjs />,
    SiExpress: <SiExpress />,
    SiMongodb: <SiMongodb />,
    SiPostgresql: <SiPostgresql />,
    SiRedis: <SiRedis />,
    FaAws: <FaAws />,
    SiNginx: <SiNginx />,
    SiDocker: <SiDocker />,
    SiGit: <SiGit />,
    SiJsonwebtokens: <SiJsonwebtokens />,
    SiSocketdotio: <SiSocketdotio />
};

export default function Skills() {
    const skills = portfolioData.skills;

    // Filter skills by category
    const categories = [
        { id: "frontend", title: "Frontend Frameworks" },
        { id: "backend", title: "Backend Systems" },
        { id: "database", title: "Database Layers" },
        { id: "cloud", title: "Cloud & DevOps Tools" }
    ];

    // Animation presets
    const containerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.08 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
    };

    return (
        <section id="skills" className="py-24 bg-slate-950 relative">
            
            {/* 1. Infinite Scrolling Marquee Belt (Right to Left) */}
            <div className="skills-marquee-section mb-16 py-4 bg-slate-900/40 border-y border-white/5">
                <div className="skills-marquee-container">
                    <div className="skills-marquee-inner">
                        {/* Loop 1 */}
                        {skills.map((skill, index) => (
                            <span key={`loop1-${index}`} className="skill-tag flex items-center gap-2 px-5 py-2.5 bg-slate-900 border border-white/5 rounded-full text-slate-300 font-medium text-sm">
                                <span className="text-indigo-400 text-lg">{iconMap[skill.icon]}</span>
                                {skill.name}
                            </span>
                        ))}
                        {/* Loop 2 (duplication for infinite scrolling) */}
                        {skills.map((skill, index) => (
                            <span key={`loop2-${index}`} className="skill-tag flex items-center gap-2 px-5 py-2.5 bg-slate-900 border border-white/5 rounded-full text-slate-300 font-medium text-sm">
                                <span className="text-indigo-400 text-lg">{iconMap[skill.icon]}</span>
                                {skill.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6">
                
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white">
                        02. <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Core Technologies</span>
                    </h2>
                    <div className="h-[1px] bg-slate-800 flex-grow" />
                </div>

                {/* Categorized Skills Grids */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {categories.map((cat, i) => (
                        <div key={i} className="glass-card p-6 flex flex-col gap-6 relative">
                            <h3 className="font-heading text-lg font-bold text-indigo-400 tracking-wide">
                                {cat.title}
                            </h3>
                            
                            <motion.div 
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                            >
                                {skills
                                    .filter(s => s.category === cat.id)
                                    .map((skill, idx) => (
                                        <motion.div 
                                            key={idx}
                                            variants={itemVariants}
                                            whileHover={{ scale: 1.05, rotate: 2 }}
                                            className="flex flex-col gap-3 items-center justify-center p-4 bg-slate-950/60 border border-white/5 rounded-xl cursor-pointer hover:border-indigo-500/40 hover:bg-slate-900/60 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 group"
                                        >
                                            {/* Tech Icon with Glow on hover */}
                                            <span className="text-3xl text-slate-400 group-hover:text-indigo-400 group-hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.5)] transition-all duration-300">
                                                {iconMap[skill.icon]}
                                            </span>
                                            <span className="text-xs text-slate-300 font-medium tracking-wide">
                                                {skill.name}
                                            </span>
                                        </motion.div>
                                    ))
                                }
                            </motion.div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
