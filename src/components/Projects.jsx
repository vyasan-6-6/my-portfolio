import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { FaGithub, FaExternalLinkAlt, FaBookOpen, FaTimes, FaSearch } from 'react-icons/fa';

export default function Projects() {
    const allProjects = portfolioData.projects;
    
    // States for Filtering and Search
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [showAll, setShowAll] = useState(false);
    
    // Case Study Modal states
    const [activeModalProject, setActiveModalProject] = useState(null);

    const categories = ["all", "frontend", "backend", "fullstack"];

    // Filter projects based on both category and search query
    const filteredProjects = allProjects.filter(project => {
        const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
        const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    // Handle "Show More / Less" limits (show 2 initially, click to expand)
    const initialShowCount = 2;
    const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, initialShowCount);

    return (
        <section id="projects" className="py-24 bg-slate-950/50 relative">
            <div className="max-w-6xl mx-auto px-6">
                
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white">
                        04. <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Featured Projects</span>
                    </h2>
                    <div className="h-[1px] bg-slate-800 flex-grow" />
                </div>

                {/* Filter Controls (Search + Categories) */}
                <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12">
                    {/* Search Bar */}
                    <div className="relative w-full md:max-w-xs">
                        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-500">
                            <FaSearch />
                        </span>
                        <input 
                            type="text" 
                            placeholder="Search by title or tech..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-slate-900 border border-white/5 pl-10 pr-4 py-2.5 rounded-lg text-sm text-slate-300 focus:outline-none focus:border-indigo-500/40 focus:bg-slate-950 transition-all duration-300"
                        />
                    </div>

                    {/* Category Filter Tabs */}
                    <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
                        {categories.map((cat, i) => (
                            <button
                                key={i}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                                    selectedCategory === cat 
                                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20' 
                                        : 'bg-slate-900 text-slate-400 hover:text-indigo-400 border border-white/5'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Cards Grid */}
                <motion.div 
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {visibleProjects.map((project, idx) => (
                            <motion.article 
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                key={project.title}
                                className="project-card glass-card flex flex-col overflow-hidden relative group hover:border-indigo-500/30 transition-colors duration-300"
                            >
                                {/* Screenshot Wrapper */}
                                <div className="relative h-48 sm:h-56 overflow-hidden border-b border-white/5">
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Glass gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-65" />
                                </div>

                                {/* Project Card Content */}
                                <div className="p-6 flex flex-col flex-grow gap-4">
                                    <h3 className="font-heading text-xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300">
                                        {project.title}
                                    </h3>

                                    {/* Tech Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t, idx) => (
                                            <span key={idx} className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                                        {project.desc}
                                    </p>

                                    {/* Interactive Links Row */}
                                    <div className="flex justify-between items-center mt-4">
                                        <div className="flex items-center gap-4">
                                            <a 
                                                href={project.codeLink} 
                                                target="_blank" 
                                                rel="noreferrer"
                                                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-indigo-400 transition-colors"
                                            >
                                                <FaGithub /> Code
                                            </a>
                                            <a 
                                                href={project.demoLink} 
                                                target="_blank" 
                                                rel="noreferrer"
                                                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-indigo-400 transition-colors"
                                            >
                                                <FaExternalLinkAlt /> Live Demo
                                            </a>
                                        </div>

                                        {/* Case Study Details Trigger Button */}
                                        <button
                                            onClick={() => setActiveModalProject(project)}
                                            className="flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 font-semibold transition-colors cursor-pointer"
                                        >
                                            <FaBookOpen /> Case Study
                                        </button>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Show More / Show Less Toggle Controls */}
                {filteredProjects.length > initialShowCount && (
                    <div className="flex justify-center mt-12">
                        <button
                            onClick={() => {
                                if (showAll) {
                                    setShowAll(false);
                                    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
                                } else {
                                    setShowAll(true);
                                }
                            }}
                            className="px-6 py-3 rounded-lg text-sm font-semibold border border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/10 hover:border-indigo-500/50 hover:scale-105 transition-all duration-300 cursor-pointer"
                        >
                            {showAll ? "Show Less Projects" : "Show More Projects"}
                        </button>
                    </div>
                )}
            </div>

            {/* Case Study Modal Overlay */}
            <AnimatePresence>
                {activeModalProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-sm">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-slate-900 border border-white/5 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl relative"
                        >
                            {/* Close Modal Button */}
                            <button 
                                onClick={() => setActiveModalProject(null)}
                                className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full hover:bg-white/5 transition-colors cursor-pointer"
                                aria-label="Close Modal"
                            >
                                <FaTimes size={18} />
                            </button>

                            {/* Modal Header */}
                            <div className="p-6 border-b border-white/5 bg-slate-950/40">
                                <h3 className="font-heading text-2xl font-bold text-white pr-8">
                                    {activeModalProject.title}
                                </h3>
                                <span className="text-xs text-indigo-400 font-semibold uppercase tracking-wider mt-1 inline-block">
                                    {activeModalProject.category} Project
                                </span>
                            </div>

                            {/* Modal Content */}
                            <div className="p-6 flex flex-col gap-6">
                                <div className="flex flex-col gap-2">
                                    <h4 className="font-heading text-sm font-bold text-slate-300 uppercase tracking-wider">
                                        Project Overview
                                    </h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {activeModalProject.desc}
                                    </p>
                                </div>

                                {/* Dynamic Recruiter-Friendly Metrics Grid */}
                                <div className="flex flex-col gap-3">
                                    <h4 className="font-heading text-sm font-bold text-slate-300 uppercase tracking-wider">
                                        Key Metrics & Details
                                    </h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-4 bg-slate-950/40 rounded-xl border border-white/5">
                                            <span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">Users</span>
                                            <p className="text-lg font-bold text-white">{activeModalProject.metrics.users}</p>
                                        </div>
                                        <div className="p-4 bg-slate-950/40 rounded-xl border border-white/5">
                                            <span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">Perf Rating</span>
                                            <p className="text-lg font-bold text-emerald-400">{activeModalProject.metrics.performance}</p>
                                        </div>
                                        <div className="p-4 bg-slate-950/40 rounded-xl border border-white/5">
                                            <span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">Duration</span>
                                            <p className="text-lg font-bold text-white">{activeModalProject.metrics.duration}</p>
                                        </div>
                                        <div className="p-4 bg-slate-950/40 rounded-xl border border-white/5">
                                            <span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">Difficulty</span>
                                            <p className="text-lg font-bold text-indigo-400">{activeModalProject.metrics.difficulty}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
