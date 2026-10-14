import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolio';
import { FaGithub, FaLinkedin, FaTimes, FaBars } from 'react-icons/fa';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [mobileOpen, setMobileOpen] = useState(false);
    const { name, isAvailable } = portfolioData.personal;

    // Track scroll events to adjust header background and scroll progress bar depth
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);

            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (totalHeight > 0) {
                const progress = (window.scrollY / totalHeight) * 100;
                setScrollProgress(progress);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Services", href: "#services" },
        { label: "Projects", href: "#projects" },
        { label: "Timeline", href: "#experience" }
    ];

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            scrolled ? 'bg-slate-950/85 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-5'
        }`}>
            {/* Scroll Progress Bar */}
            <div 
                className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 transition-all duration-100" 
                style={{ width: `${scrollProgress}%` }}
            />

            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                {/* Logo & Recruiter Availability Badge */}
                <div className="flex items-center gap-3">
                    <a href="#" className="font-heading text-xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        {name}.
                    </a>
                    {isAvailable && (
                        <div className="hidden sm:flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-emerald-400">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            Available for Work
                        </div>
                    )}
                </div>

                {/* Desktop Navigation Links */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, i) => (
                        <a 
                            key={i} 
                            href={link.href}
                            className="text-sm font-medium text-slate-400 hover:text-indigo-400 transition-all duration-300"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a 
                        href="#connect" 
                        className="border border-indigo-500/40 text-indigo-300 hover:bg-indigo-500/10 text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-300"
                    >
                        Let's Connect
                    </a>
                </nav>

                {/* Mobile Menu Toggle Button */}
                <button 
                    className="md:hidden text-slate-200 hover:text-indigo-400 transition-colors"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle Navigation Menu"
                >
                    {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                </button>
            </div>

            {/* Mobile Navigation Dropdown */}
            {mobileOpen && (
                <div className="md:hidden bg-slate-950/95 border-b border-white/5 py-6 px-6 absolute top-full left-0 w-full flex flex-col gap-4 animate-fade-in">
                    {navLinks.map((link, i) => (
                        <a 
                            key={i} 
                            href={link.href}
                            className="text-slate-300 hover:text-indigo-400 text-sm font-medium py-1 transition-colors"
                            onClick={() => setMobileOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a 
                        href="#connect" 
                        className="bg-indigo-600 hover:bg-indigo-700 text-center text-sm font-semibold py-2.5 rounded-lg text-white transition-all"
                        onClick={() => setMobileOpen(false)}
                    >
                        Let's Connect
                    </a>
                </div>
            )}
        </header>
    );
}
