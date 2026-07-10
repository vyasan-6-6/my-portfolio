import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import confetti from 'canvas-confetti';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
    const { email, phone, location, isAvailable } = portfolioData.personal;
    
    // Form States
    const [formData, setFormData] = useState({ fullName: "", emailAddress: "", subject: "", message: "" });
    const [status, setStatus] = useState({ text: "", type: "" }); // Types: 'success', 'error', 'loading'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Local Validation checks
        const { fullName, emailAddress, subject, message } = formData;
        if (!fullName || !emailAddress || !subject || !message) {
            setStatus({ text: "Please fill in all fields.", type: "error" });
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailAddress)) {
            setStatus({ text: "Please enter a valid email address.", type: "error" });
            return;
        }

        // Simulate sending mail
        setStatus({ text: "Sending your message...", type: "loading" });

        setTimeout(() => {
            // Trigger Confetti Burst (Premium Detail)
            confetti({
                particleCount: 150,
                spread: 80,
                origin: { y: 0.6 },
                colors: ['#6366f1', '#a855f7', '#06b6d4']
            });

            setStatus({ text: "Message sent successfully! Thank you for connecting.", type: "success" });
            setFormData({ fullName: "", emailAddress: "", subject: "", message: "" });
        }, 1500);
    };

    return (
        <section id="connect" className="py-24 bg-slate-950/40 relative">
            <div className="max-w-6xl mx-auto px-6">
                
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white">
                        08. <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Let's Connect</span>
                    </h2>
                    <div className="h-[1px] bg-slate-800 flex-grow" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    {/* Contact Information Column */}
                    <div className="flex flex-col gap-8 lg:col-span-1">
                        <div className="flex flex-col gap-2">
                            <h3 className="font-heading text-2xl font-bold text-white">
                                Let's collaborate!
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                I am always excited to discuss new projects, full-time opportunities, or tech stack setups.
                            </p>
                        </div>

                        {/* Recruiter availability status badge */}
                        {isAvailable && (
                            <div className="w-fit flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-400">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                                </span>
                                Open to new opportunities
                            </div>
                        )}

                        <div className="flex flex-col gap-6 mt-2">
                            {/* Phone */}
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-slate-900 border border-white/5 rounded-xl text-lg text-indigo-400">
                                    <FaPhoneAlt />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Call Me</span>
                                    <a href={`tel:${phone}`} className="text-sm font-semibold text-slate-200 hover:text-indigo-400 transition-colors">
                                        {phone}
                                    </a>
                                </div>
                            </div>
                            
                            {/* Email */}
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-slate-900 border border-white/5 rounded-xl text-lg text-indigo-400">
                                    <FaEnvelope />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Email Me</span>
                                    <a href={`mailto:${email}`} className="text-sm font-semibold text-slate-200 hover:text-indigo-400 transition-colors">
                                        {email}
                                    </a>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-slate-900 border border-white/5 rounded-xl text-lg text-indigo-400">
                                    <FaMapMarkerAlt />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Location</span>
                                    <span className="text-sm font-semibold text-slate-200">
                                        {location}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Column */}
                    <div className="lg:col-span-2">
                        <div className="glass-card p-8">
                            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="fullName" className="text-xs font-semibold text-slate-400">Full Name *</label>
                                        <input 
                                            type="text" 
                                            id="fullName" 
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="bg-slate-950 border border-white/5 p-3 rounded-lg text-sm text-slate-300 focus:outline-none focus:border-indigo-500/40 focus:bg-slate-900 transition-all duration-300"
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="emailAddress" className="text-xs font-semibold text-slate-400">Email Address *</label>
                                        <input 
                                            type="email" 
                                            id="emailAddress" 
                                            name="emailAddress"
                                            value={formData.emailAddress}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            className="bg-slate-950 border border-white/5 p-3 rounded-lg text-sm text-slate-300 focus:outline-none focus:border-indigo-500/40 focus:bg-slate-900 transition-all duration-300"
                                            required
                                        />
                                    </div>
                                </div>
                                
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="subject" className="text-xs font-semibold text-slate-400">Subject *</label>
                                    <input 
                                        type="text" 
                                        id="subject" 
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Let's collaborate!"
                                        className="bg-slate-950 border border-white/5 p-3 rounded-lg text-sm text-slate-300 focus:outline-none focus:border-indigo-500/40 focus:bg-slate-900 transition-all duration-300"
                                        required
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="message" className="text-xs font-semibold text-slate-400">Message *</label>
                                    <textarea 
                                        id="message" 
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Type your message here..."
                                        className="bg-slate-950 border border-white/5 p-3 rounded-lg text-sm text-slate-300 focus:outline-none focus:border-indigo-500/40 focus:bg-slate-900 min-h-[120px] resize-none transition-all duration-300"
                                        required
                                    />
                                </div>

                                {/* Status message display banner */}
                                {status.text && (
                                    <div className={`p-4 rounded-lg text-xs font-medium ${
                                        status.type === 'success' ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400' :
                                        status.type === 'error' ? 'bg-rose-500/10 border border-rose-500/30 text-rose-400' :
                                        'bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 animate-pulse'
                                    }`}>
                                        {status.text}
                                    </div>
                                )}

                                <button 
                                    type="submit" 
                                    className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold py-3 rounded-lg text-sm shadow-md shadow-indigo-500/10 hover:shadow-indigo-500/20 hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <FaPaperPlane size={12} />
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
