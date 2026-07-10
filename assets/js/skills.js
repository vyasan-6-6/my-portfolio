/**
 * Skills Component
 * Easy to customize: Simply add or remove objects from the coreSkills array.
 */

const coreSkills = [
    {
        name: "HTML5",
        icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22l10-4 10 4z"/></svg>`
    },
    {
        name: "CSS3 / SASS",
        icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`
    },
    {
        name: "JavaScript (ES6+)",
        icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>`
    },
    {
        name: "React.js",
        icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)"/><circle cx="12" cy="12" r="1"/></svg>`
    },
    {
        name: "Next.js",
        icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16v16H4zM4 20L20 4"/></svg>`
    },
    {
        name: "Redux",
        icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/></svg>`
    },
    {
        name: "Node.js",
        icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`
    },
    {
        name: "Express.js",
        icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`
    },
    {
        name: "MongoDB",
        icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-13-7-13S5 10.7 5 15a7 7 0 0 0 7 7z"/></svg>`
    },
    {
        name: "PostgreSQL",
        icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`
    },
    {
        name: "RESTful APIs",
        icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M9 10.5l6-3.5M9 13.5l6 3.5"/></svg>`
    },
    {
        name: "Git / GitHub",
        icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M6 9v6M9 6h5a3 3 0 0 1 3 3v6"/></svg>`
    },
    {
        name: "Docker",
        icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/></svg>`
    },
    {
        name: "Vercel",
        icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 22h20L12 2z"/></svg>`
    },
    {
        name: "VS Code",
        icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2zM14 2v6h6"/></svg>`
    }
];

function initSkillsMarquee() {
    const marqueeInner = document.getElementById('skillsMarqueeInner');
    if (!marqueeInner) return;

    // Generate tags markup
    const tagsHTML = coreSkills.map(skill => `
        <span class="skill-tag">
            ${skill.icon}
            ${skill.name}
        </span>
    `).join('');

    // Duplicate tags to ensure a perfectly seamless infinite scrolling marquee loop
    marqueeInner.innerHTML = tagsHTML + tagsHTML;
}

// Initialize marquee when DOM content has loaded
document.addEventListener('DOMContentLoaded', initSkillsMarquee);
