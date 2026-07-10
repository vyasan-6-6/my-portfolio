import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import Canvas3D from './Canvas3D';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFileDownload, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
    const { name, title, subtitle, resumeUrl } = portfolioData.personal;
    
    // Typing Animation state & loop logic
    const roles = [
        "MERN Developer",
        "React Developer",
        "Backend Developer",
        "Problem Solver"
    ];
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [typedText, setTypedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    
    useEffect(() => {
        let timer;
        const currentFullText = roles[currentRoleIndex];
        const typingSpeed = isDeleting ? 30 : 80;

        if (!isDeleting && typedText === currentFullText) {
            // Pause at full word before deleting
            timer = setTimeout(() => setIsDeleting(true), 1500);
        } else if (isDeleting && typedText === "") {
            setIsDeleting(false);
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        } else {
            timer = setTimeout(() => {
                setTypedText(
                    isDeleting 
                        ? currentFullText.substring(0, typedText.length - 1)
                        : currentFullText.substring(0, typedText.length + 1)
                );
            }, typingSpeed);
        }

        return () => clearTimeout(timer);
    }, [typedText, isDeleting, currentRoleIndex]);

    // Social icon mapping helper
    const getSocialIcon = (name) => {
        switch (name.toLowerCase()) {
            case 'github': return <FaGithub className="w-5 h-5" />;
            case 'linkedin': return <FaLinkedin className="w-5 h-5" />;
            case 'twitter': return <FaTwitter className="w-5 h-5" />;
            case 'instagram': return <FaInstagram className="w-5 h-5" />;
            default: return null;
        }
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-slate-950">
            {/* Split Grid */}
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full z-10">
                {/* Hero Content Column (Left) */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col gap-6"
                >
                    <div className="flex flex-col gap-2">
                        <span className="text-indigo-400 font-semibold tracking-wider text-sm uppercase">
                            HI THERE, MY NAME IS
                        </span>
                        <h1 className="font-heading text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-none">
                            {name}
                        </h1>
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-slate-300">
                            I'm a <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 border-r-2 border-indigo-400 animate-pulse">{typedText}</span>
                        </h2>
                    </div>

                    <p className="text-slate-400 text-base md:text-lg max-w-lg leading-relaxed">
                        {subtitle}
                    </p>

                    {/* Interactive Contact/Download Buttons */}
                    <div className="flex flex-wrap gap-4 mt-2">
                        <a 
                            href="#connect" 
                            className="px-6 py-3 rounded-lg text-sm font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/35 hover:-translate-y-0.5 hover:scale-105 transition-all duration-300"
                        >
                            Hire Me
                        </a>
                        <a 
                            href={resumeUrl}
                            download="Vyasen_KS_Resume.pdf"
                            className="px-6 py-3 rounded-lg text-sm font-semibold border border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/5 hover:-translate-y-0.5 hover:scale-105 transition-all duration-300 flex items-center gap-2"
                        >
                            <FaFileDownload />
                            Download Resume
                        </a>
                    </div>

                    {/* Social Profiles Grid */}
                    <div className="flex items-center gap-4 mt-4">
                        <span className="text-xs text-slate-500 font-medium tracking-wider uppercase">
                            Connect:
                        </span>
                        <div className="flex items-center gap-3">
                            {portfolioData.socials.map((social, i) => (
                                <a 
                                    key={i}
                                    href={social.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-2 rounded-lg bg-slate-900 border border-white/5 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/20 hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                                    aria-label={social.name}
                                >
                                    {getSocialIcon(social.name)}
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* 3D Globe Column (Right) */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center pointer-events-none"
                >
                    {/* Background Light Halo */}
                    <div className="absolute w-72 h-72 rounded-full bg-indigo-500/10 blur-3xl" />
                    
                    {/* Render the R3F Canvas Container */}
                    <Canvas3D />
                </motion.div>
            </div>
            
            {/* Visual bottom gradient transition */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
        </section>
    );
}
