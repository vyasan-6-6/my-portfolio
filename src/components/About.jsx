import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

// Count-up counter helper component
function Counter({ value, duration = 1.5, suffix = "" }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime = null;
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            setCount(Math.floor(progress * value));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }, [value, duration]);

    return <span>{count}{suffix}</span>;
}

export default function About() {
    const { bio, avatar } = portfolioData.personal;
    const stats = portfolioData.stats;

    // Highlights bullets for recruiters
    const highlights = [
        "Specialized in full-stack MERN environments.",
        "Experienced in RESTful API development and databases.",
        "Strong focus on responsive design, performance, and SEO.",
        "Committed to writing clean, modular, and maintainable codebases."
    ];

    return (
        <section id="about" className="py-24 bg-slate-950/50 relative">
            <div className="max-w-6xl mx-auto px-6">
                
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white">
                        01. <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">About Me</span>
                    </h2>
                    <div className="h-[1px] bg-slate-800 flex-grow" />
                </div>

                {/* About Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    
                    {/* Portrait Photo (with 3D-Tilt Style Float border) */}
                    <div className="relative justify-self-center md:justify-self-start">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-indigo-500/20 shadow-2xl z-10 group hover:border-indigo-500/55 transition-colors duration-500">
                            <img 
                                src={avatar} 
                                alt="Vyasen K S Professional Photo" 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Neon Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                        </div>
                        {/* Glowing Background Decorative Card */}
                        <div className="absolute -inset-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-xl opacity-15 z-0" />
                    </div>

                    {/* Objective & Highlights */}
                    <div className="flex flex-col gap-6 text-slate-300">
                        <p className="text-base md:text-lg leading-relaxed font-light">
                            {bio}
                        </p>
                        
                        <div className="h-[1px] bg-slate-900 w-full" />
                        
                        <h4 className="font-heading text-lg font-bold text-white tracking-wide">
                            Core Capabilities & Focus:
                        </h4>
                        
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {highlights.map((item, i) => (
                                <li key={i} className="flex gap-2 text-sm text-slate-400 items-start">
                                    <span className="text-indigo-400 font-bold mt-0.5">&bull;</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Animated Statistics Cards Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                        <div key={i} className="glass-card glass-card-hover p-6 text-center flex flex-col gap-2 relative overflow-hidden group">
                            {/* Decorative Neon Glow */}
                            <div className="absolute -top-12 -left-12 w-24 h-24 rounded-full bg-indigo-500/5 group-hover:bg-indigo-500/10 blur-xl transition-all" />
                            
                            <h3 className="font-heading text-4xl md:text-5xl font-extrabold text-white">
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </h3>
                            <span className="text-xs md:text-sm text-slate-400 font-medium tracking-wide uppercase">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
