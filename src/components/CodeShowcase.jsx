import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { FaCode, FaCopy, FaCheck, FaPlay, FaTerminal, FaFileCode } from 'react-icons/fa';

export default function CodeShowcase() {
    const snippets = portfolioData.codeSnippets || [];
    const [activeId, setActiveId] = useState(snippets[0]?.id || '');
    const [copied, setCopied] = useState(false);
    const [simulating, setSimulating] = useState(false);
    const [simulationOutput, setSimulationOutput] = useState<string | null>(null);

    const activeSnippet = snippets.find((s) => s.id === activeId) || snippets[0];

    const handleCopy = () => {
        if (!activeSnippet) return;
        navigator.clipboard.writeText(activeSnippet.code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleSimulate = () => {
        if (!activeSnippet) return;
        setSimulating(true);
        setSimulationOutput(null);
        setTimeout(() => {
            setSimulating(false);
            setSimulationOutput(activeSnippet.output);
        }, 600);
    };

    if (!snippets.length) return null;

    return (
        <section id="code" className="py-24 bg-slate-950/90 relative overflow-hidden border-t border-white/5">
            {/* Background Glow Accents */}
            <div className="absolute top-1/3 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-4">
                        <FaCode className="text-indigo-400" /> Signature Code & Architecture
                    </div>
                    <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                        Production-Ready <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Code Snippets</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto mt-4 text-sm md:text-base">
                        Explore real-world technical implementation patterns, clean backend algorithms, custom hooks, and database aggregation pipelines.
                    </p>
                </motion.div>

                {/* Tabs Navigator */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
                    {snippets.map((snippet) => {
                        const isActive = snippet.id === activeSnippet.id;
                        return (
                            <button
                                key={snippet.id}
                                onClick={() => {
                                    setActiveId(snippet.id);
                                    setSimulationOutput(null);
                                }}
                                className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-medium transition-all duration-300 flex items-center gap-2 border ${
                                    isActive
                                        ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/25 scale-105'
                                        : 'bg-slate-900/80 border-white/5 text-slate-400 hover:text-white hover:border-slate-700'
                                }`}
                            >
                                <FaFileCode className={isActive ? 'text-indigo-200' : 'text-slate-500'} />
                                <span>{snippet.title}</span>
                                <span className={`text-[10px] px-2 py-0.5 rounded-md ${
                                    isActive ? 'bg-indigo-700/80 text-indigo-100' : 'bg-slate-800 text-slate-400'
                                }`}>
                                    {snippet.category}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Main Code Viewer Window */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeSnippet.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.3 }}
                        className="glass-card border border-white/10 rounded-2xl overflow-hidden shadow-2xl bg-slate-900/90"
                    >
                        {/* IDE Header Bar */}
                        <div className="bg-slate-950/80 px-6 py-4 border-b border-white/5 flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                {/* Window Control Dots */}
                                <div className="flex items-center gap-1.5">
                                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                                </div>
                                <span className="text-slate-600 text-sm">|</span>
                                <span className="font-mono text-xs md:text-sm font-semibold text-indigo-300 flex items-center gap-2">
                                    <FaFileCode className="text-indigo-400" />
                                    {activeSnippet.filename}
                                </span>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={handleSimulate}
                                    disabled={simulating}
                                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 transition-all flex items-center gap-1.5 active:scale-95 disabled:opacity-50"
                                >
                                    <FaPlay className={`text-[10px] ${simulating ? 'animate-spin' : ''}`} />
                                    {simulating ? 'Running...' : 'Simulate Execution'}
                                </button>
                                <button
                                    onClick={handleCopy}
                                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-all flex items-center gap-1.5 active:scale-95"
                                >
                                    {copied ? (
                                        <>
                                            <FaCheck className="text-emerald-400" />
                                            <span className="text-emerald-400">Copied!</span>
                                        </>
                                    ) : (
                                        <>
                                            <FaCopy />
                                            <span>Copy Code</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Code Description */}
                        <div className="px-6 py-3 bg-slate-950/40 border-b border-white/5 text-xs md:text-sm text-slate-400">
                            {activeSnippet.description}
                        </div>

                        {/* Code Display Area */}
                        <div className="p-6 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto bg-slate-950/90 text-slate-200">
                            <pre className="whitespace-pre">
                                {activeSnippet.code.split('\n').map((line, idx) => (
                                    <div key={idx} className="table-row">
                                        <span className="table-cell pr-4 select-none text-slate-600 text-right w-8 text-[11px]">
                                            {idx + 1}
                                        </span>
                                        <span className="table-cell">{line}</span>
                                    </div>
                                ))}
                            </pre>
                        </div>

                        {/* Execution Simulation Output Terminal */}
                        {(simulating || simulationOutput) && (
                            <div className="border-t border-slate-800 bg-black/90 p-4 font-mono text-xs">
                                <div className="flex items-center gap-2 text-slate-400 mb-2 border-b border-slate-800/80 pb-1.5">
                                    <FaTerminal className="text-emerald-400" />
                                    <span className="text-emerald-400 font-semibold uppercase tracking-wider text-[10px]">
                                        Output Stream
                                    </span>
                                </div>
                                {simulating ? (
                                    <div className="text-indigo-400 animate-pulse flex items-center gap-2">
                                        <span>[COMPILING]</span> Executing runtime simulation...
                                    </div>
                                ) : (
                                    <div className="text-emerald-300 bg-slate-950/80 p-3 rounded border border-emerald-500/20 whitespace-pre-wrap leading-relaxed">
                                        {simulationOutput}
                                    </div>
                                )}
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
