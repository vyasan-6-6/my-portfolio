import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
    return (
        <div className="bg-slate-950 min-h-screen text-slate-100 selection:bg-indigo-500 selection:text-white relative">
            {/* Global Navigation Header */}
            <Navbar />

            {/* Main Sections */}
            <main>
                {/* Hero section containing the R3F 3D globe and particles */}
                <Hero />

                {/* Professional bio & stats metrics counters */}
                <About />

                {/* Tech stacks grids & infinite scrolling tech marquee */}
                <Skills />

                {/* Professional capabilities services cards */}
                <Services />

                {/* Filterable, searchable Projects Grid (Load More button, Metrics metrics modals) */}
                <Projects />

                {/* Career experience timeline */}
                <Experience />

                {/* Academic history timeline */}
                <Education />

                {/* Certifications credentials display */}
                <Certifications />

                {/* Validated contact panel with mock email & confetti trigger */}
                <Contact />
            </main>

            {/* Global Footer & Back-to-Top scroll controller */}
            <Footer />
        </div>
    );
}
