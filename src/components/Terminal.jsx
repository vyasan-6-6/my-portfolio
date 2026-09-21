import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolio';
import { FaTerminal, FaTimes, FaExpandAlt, FaCompressAlt, FaPlay, FaChevronRight, FaRegCopy, FaCheck } from 'react-icons/fa';

export default function Terminal() {
    const [isOpen, setIsOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isMatrixMode, setIsMatrixMode] = useState(false);
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const [copied, setCopied] = useState(false);

    const [logs, setLogs] = useState([
        {
            id: 'init-1',
            command: 'system.init()',
            output: (
                <div className="text-slate-400">
                    <span className="text-emerald-400 font-bold">Vyasen OS v2.4.0 (x86_64-MERN-linux-gnu)</span>
                    <br />
                    Type <span className="text-indigo-400 font-semibold">'help'</span> for available commands or click quick action buttons below. Try <span className="text-amber-400 font-semibold">'sudo hire'</span> for recruiter bonus!
                </div>
            )
        }
    ]);

    const inputRef = useRef(null);
    const logEndRef = useRef(null);

    // Auto scroll terminal output
    useEffect(() => {
        logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [logs, isOpen]);

    // Auto focus input on open
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen]);

    const executeCommand = (cmdStr) => {
        const trimmed = cmdStr.trim();
        if (!trimmed) return;

        // Add to history
        setHistory((prev) => [...prev, trimmed]);
        setHistoryIndex(-1);

        const lower = trimmed.toLowerCase();
        let resultOutput = null;
        let isErr = false;

        switch (lower) {
            case 'help':
                resultOutput = (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs py-1">
                        <div><span className="text-indigo-400 font-bold">help</span> - Display available commands</div>
                        <div><span className="text-indigo-400 font-bold">about</span> - View developer bio & summary</div>
                        <div><span className="text-indigo-400 font-bold">skills</span> - List tech stacks & tools</div>
                        <div><span className="text-indigo-400 font-bold">projects</span> - View highlighted portfolio projects</div>
                        <div><span className="text-indigo-400 font-bold">experience</span> - View career history & timeline</div>
                        <div><span className="text-indigo-400 font-bold">contact</span> - Display contact details</div>
                        <div><span className="text-indigo-400 font-bold">matrix</span> - Toggle matrix theme mode</div>
                        <div><span className="text-indigo-400 font-bold">clear</span> - Clear terminal logs</div>
                        <div><span className="text-amber-400 font-bold">sudo hire</span> - Executive recruiter perk ✨</div>
                    </div>
                );
                break;

            case 'about':
                resultOutput = (
                    <div className="space-y-1 text-slate-300 text-xs">
                        <p className="text-indigo-300 font-bold">{portfolioData.personal.name} - {portfolioData.personal.title}</p>
                        <p>{portfolioData.personal.bio}</p>
                        <p className="text-slate-400">📍 Location: {portfolioData.personal.location} | 📧 {portfolioData.personal.email}</p>
                    </div>
                );
                break;

            case 'skills':
                resultOutput = (
                    <div className="space-y-2 text-xs">
                        <p className="text-purple-300 font-bold">Tech Stacks Known:</p>
                        <div className="flex flex-wrap gap-1.5">
                            {portfolioData.skills.map((s, idx) => (
                                <span key={idx} className="px-2 py-0.5 rounded bg-indigo-950/80 border border-indigo-500/30 text-indigo-300">
                                    {s.name}
                                </span>
                            ))}
                        </div>
                    </div>
                );
                break;

            case 'projects':
                resultOutput = (
                    <div className="space-y-2 text-xs">
                        {portfolioData.projects.map((p, idx) => (
                            <div key={idx} className="border-l-2 border-indigo-500 pl-2 py-1">
                                <span className="text-indigo-300 font-bold">{p.title}</span> ({p.category})
                                <p className="text-slate-400">{p.desc}</p>
                                <div className="text-[10px] text-cyan-400">Tech: {p.tech.join(', ')}</div>
                            </div>
                        ))}
                    </div>
                );
                break;

            case 'experience':
                resultOutput = (
                    <div className="space-y-2 text-xs">
                        {portfolioData.experience.map((exp, idx) => (
                            <div key={idx} className="text-slate-300">
                                <span className="text-emerald-400 font-bold">{exp.role}</span> @ {exp.company} ({exp.duration})
                                <p className="text-slate-400">{exp.desc}</p>
                            </div>
                        ))}
                    </div>
                );
                break;

            case 'contact':
                resultOutput = (
                    <div className="text-xs space-y-1">
                        <p className="text-indigo-300 font-bold">Contact Channel Unlocked:</p>
                        <p>Email: <a href={`mailto:${portfolioData.personal.email}`} className="text-cyan-400 underline">{portfolioData.personal.email}</a></p>
                        <p>Phone: {portfolioData.personal.phone}</p>
                        <p>GitHub: <a href="https://github.com/vyasan-6-6" target="_blank" rel="noreferrer" className="text-indigo-400 underline">https://github.com/vyasan-6-6</a></p>
                    </div>
                );
                break;

            case 'matrix':
                setIsMatrixMode((prev) => !prev);
                resultOutput = (
                    <div className="text-emerald-400 font-mono text-xs">
                        [SYSTEM] Matrix stream protocol {isMatrixMode ? 'DEACTIVATED' : 'ACTIVATED'}. Welcome to the construct.
                    </div>
                );
                break;

            case 'clear':
                setLogs([]);
                setInput('');
                return;

            case 'sudo hire':
                // Confetti explosion
                confetti({
                    particleCount: 120,
                    spread: 80,
                    origin: { y: 0.6 }
                });
                resultOutput = (
                    <div className="bg-emerald-950/80 border border-emerald-500/40 p-3 rounded text-emerald-300 text-xs space-y-1">
                        <p className="font-bold text-sm">🎉 Recruiter Offer Verified!</p>
                        <p>Thank you for expressing interest! Vyasen is available for full-time software engineering roles.</p>
                        <p className="text-white font-semibold">Redirecting to contact form...</p>
                    </div>
                );
                setTimeout(() => {
                    const el = document.getElementById('connect');
                    el?.scrollIntoView({ behavior: 'smooth' });
                }, 1200);
                break;

            default:
                isErr = true;
                resultOutput = (
                    <div className="text-rose-400 text-xs">
                        Command not found: '{trimmed}'. Type <span className="underline font-bold text-slate-200">help</span> for command directory.
                    </div>
                );
                break;
        }

        setLogs((prev) => [
            ...prev,
            {
                id: `cmd-${Date.now()}`,
                command: trimmed,
                output: resultOutput,
                isError: isErr
            }
        ]);

        setInput('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            executeCommand(input);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (history.length > 0) {
                const nextIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
                setHistoryIndex(nextIndex);
                setInput(history[nextIndex]);
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex >= 0) {
                const nextIndex = historyIndex + 1;
                if (nextIndex >= history.length) {
                    setHistoryIndex(-1);
                    setInput('');
                } else {
                    setHistoryIndex(nextIndex);
                    setInput(history[nextIndex]);
                }
            }
        }
    };

    const copyLogs = () => {
        const text = logs.map((l) => `$ ${l.command}`).join('\n');
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const quickCmds = ['help', 'about', 'skills', 'projects', 'contact', 'sudo hire', 'matrix', 'clear'];

    return (
        <>
            {/* Inline Terminal Section in page */}
            <section id="terminal" className="py-20 bg-slate-950 relative overflow-hidden border-t border-white/5">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-2">
                                <FaTerminal /> Interactive Shell
                            </div>
                            <h2 className="font-heading text-2xl md:text-4xl font-extrabold text-white">
                                Developer <span className="text-cyan-400">Terminal CLI</span>
                            </h2>
                        </div>
                        <button
                            onClick={() => setIsOpen(true)}
                            className="px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold text-xs md:text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/20 transition-all hover:scale-105"
                        >
                            <FaTerminal /> Open Floating Terminal Window
                        </button>
                    </div>

                    {/* Inline Terminal Console */}
                    <div className={`rounded-2xl border ${
                        isMatrixMode ? 'border-emerald-500/50 bg-black' : 'border-slate-800 bg-slate-950/95'
                    } overflow-hidden shadow-2xl`}>
                        {/* Terminal Header Bar */}
                        <div className="bg-slate-900/90 px-4 py-3 border-b border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-amber-500" />
                                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                                <span className="ml-2 font-mono text-xs text-slate-400 font-semibold">vyasa@dev-portfolio:~</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={copyLogs}
                                    className="text-slate-400 hover:text-white p-1 text-xs"
                                    title="Copy terminal commands"
                                >
                                    {copied ? <FaCheck className="text-emerald-400" /> : <FaRegCopy />}
                                </button>
                            </div>
                        </div>

                        {/* Quick Command Chips */}
                        <div className="px-4 py-2 bg-slate-900/50 border-b border-white/5 flex flex-wrap items-center gap-1.5 text-xs">
                            <span className="text-slate-500 font-mono text-[11px] mr-1">Quick Run:</span>
                            {quickCmds.map((cmd) => (
                                <button
                                    key={cmd}
                                    onClick={() => executeCommand(cmd)}
                                    className="px-2.5 py-1 rounded bg-slate-800 hover:bg-indigo-600 hover:text-white text-slate-300 text-[11px] font-mono transition-all border border-slate-700/50"
                                >
                                    {cmd}
                                </button>
                            ))}
                        </div>

                        {/* Terminal Output Area */}
                        <div className={`p-5 font-mono text-xs md:text-sm h-72 overflow-y-auto space-y-4 ${
                            isMatrixMode ? 'text-emerald-400 bg-black' : 'text-slate-200'
                        }`}>
                            {logs.map((log) => (
                                <div key={log.id} className="space-y-1">
                                    <div className="flex items-center gap-2 text-indigo-400 font-semibold">
                                        <FaChevronRight className="text-[10px] text-cyan-400" />
                                        <span>$ {log.command}</span>
                                    </div>
                                    <div className="pl-4">{log.output}</div>
                                </div>
                            ))}
                            <div ref={logEndRef} />
                        </div>

                        {/* Command Prompt Line */}
                        <div className="px-4 py-3 bg-slate-900/90 border-t border-white/5 flex items-center gap-2 font-mono text-xs md:text-sm">
                            <span className="text-cyan-400 font-bold">vyasa@portfolio:~$</span>
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Type command (e.g. 'help', 'skills', 'sudo hire')..."
                                className="w-full bg-transparent text-white focus:outline-none placeholder-slate-600"
                            />
                            <button
                                onClick={() => executeCommand(input)}
                                className="p-1.5 rounded bg-indigo-600 text-white hover:bg-indigo-500 text-xs"
                            >
                                <FaPlay className="text-[10px]" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Floating Terminal Widget Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 50 }}
                        className={`fixed z-50 transition-all ${
                            isExpanded
                                ? 'inset-4 md:inset-10'
                                : 'bottom-6 right-6 w-full max-w-lg h-[460px]'
                        } bg-slate-950/95 border border-cyan-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl`}
                    >
                        {/* Modal Top Bar */}
                        <div className="bg-slate-900 px-4 py-3 border-b border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <FaTerminal className="text-cyan-400 text-sm" />
                                <span className="font-mono text-xs font-bold text-white">Vyasen CLI Terminal</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => setIsExpanded(!isExpanded)}
                                    className="text-slate-400 hover:text-white transition-colors"
                                >
                                    {isExpanded ? <FaCompressAlt size={12} /> : <FaExpandAlt size={12} />}
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-slate-400 hover:text-rose-400 transition-colors"
                                >
                                    <FaTimes size={14} />
                                </button>
                            </div>
                        </div>

                        {/* Modal Quick Bar */}
                        <div className="px-3 py-1.5 bg-slate-900/60 border-b border-white/5 flex flex-wrap items-center gap-1">
                            {quickCmds.slice(0, 6).map((cmd) => (
                                <button
                                    key={cmd}
                                    onClick={() => executeCommand(cmd)}
                                    className="px-2 py-0.5 rounded bg-slate-800 hover:bg-cyan-600 hover:text-slate-950 text-slate-300 text-[10px] font-mono"
                                >
                                    {cmd}
                                </button>
                            ))}
                        </div>

                        {/* Modal Terminal Log Area */}
                        <div className={`p-4 flex-1 overflow-y-auto font-mono text-xs space-y-3 ${
                            isMatrixMode ? 'bg-black text-emerald-400' : 'text-slate-200'
                        }`}>
                            {logs.map((log) => (
                                <div key={log.id} className="space-y-1">
                                    <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                                        <span>$ {log.command}</span>
                                    </div>
                                    <div className="pl-3">{log.output}</div>
                                </div>
                            ))}
                            <div ref={logEndRef} />
                        </div>

                        {/* Modal Input Prompt */}
                        <div className="p-3 bg-slate-900 border-t border-white/10 flex items-center gap-2 font-mono text-xs">
                            <span className="text-cyan-400 font-bold">$</span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Enter command..."
                                className="w-full bg-transparent text-white focus:outline-none placeholder-slate-600"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Bottom Floating Terminal Trigger Button */}
            {!isOpen && (
                <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 font-bold shadow-2xl shadow-cyan-500/30 flex items-center justify-center border border-cyan-300/40 group"
                    title="Open Developer Terminal (CLI)"
                >
                    <FaTerminal className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </motion.button>
            )}
        </>
    );
}
