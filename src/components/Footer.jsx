import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolio';
import { FaArrowUp, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    const { name, subtitle } = portfolioData.personal;
    const socials = portfolioData.socials;
    const [showScrollTop, setShowScrollTop] = useState(false);

    // Track scroll events to toggle "Back to Top" button visibility
    useEffect(() => {
        const checkScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };
        window.addEventListener('scroll', checkScroll);
        return () => window.removeEventListener('scroll', checkScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const getSocialIcon = (name) => {
        switch (name.toLowerCase()) {
            case 'github': return <FaGithub />;
            case 'linkedin': return <FaLinkedin />;
            case 'twitter': return <FaTwitter />;
            case 'instagram': return <FaInstagram />;
            default: return null;
        }
    };

    return (
        <footer className="bg-slate-950 border-t border-white/5 py-12 relative z-10">
            <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-8 text-center">
                
                {/* Brand Name & Tagline */}
                <div className="flex flex-col gap-2 max-w-md">
                    <a href="#" className="font-heading text-2xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                        {name}.
                    </a>
                    <p className="text-slate-400 text-xs leading-relaxed font-light">
                        {subtitle}
                    </p>
                </div>

                {/* Footer Navigation Links */}
                <div className="flex flex-wrap justify-center gap-6">
                    <a href="#about" className="text-xs font-semibold text-slate-400 hover:text-indigo-400 transition-colors">About</a>
                    <a href="#skills" className="text-xs font-semibold text-slate-400 hover:text-indigo-400 transition-colors">Skills</a>
                    <a href="#services" className="text-xs font-semibold text-slate-400 hover:text-indigo-400 transition-colors">Services</a>
                    <a href="#projects" className="text-xs font-semibold text-slate-400 hover:text-indigo-400 transition-colors">Projects</a>
                    <a href="#experience" className="text-xs font-semibold text-slate-400 hover:text-indigo-400 transition-colors">Timeline</a>
                </div>

                {/* Social links row */}
                <div className="flex items-center gap-4">
                    {socials.map((social, i) => (
                        <a 
                            key={i}
                            href={social.url}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2.5 rounded-full bg-slate-900 border border-white/5 text-slate-400 hover:text-indigo-400 hover:scale-110 hover:-translate-y-0.5 transition-all duration-300"
                            aria-label={social.name}
                        >
                            {getSocialIcon(social.name)}
                        </a>
                    ))}
                </div>

                {/* Copyright info block */}
                <div className="text-[11px] text-slate-600 font-medium select-none">
                    &copy; 2026 {name}. All rights reserved.
                </div>
            </div>

            {/* Back to Top floating button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 p-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/35 hover:-translate-y-1 transition-all duration-300 z-50 cursor-pointer animate-fade-in border border-indigo-500/20"
                    aria-label="Scroll to top of page"
                >
                    <FaArrowUp size={14} />
                </button>
            )}
        </footer>
    );
}
