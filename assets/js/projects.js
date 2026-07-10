/**
 * Projects Component
 * Easy to customize: Simply add or remove objects from the projectsList array.
 */

const projectsList = [
    {
        title: "ShopEase Analytics Dashboard",
        image: "assets/images/projects/project1.png",
        tech: ["React", "Chart.js", "Node.js", "MongoDB"],
        desc: "A premium admin dashboard built to monitor e-commerce activity, offering charts, real-time analytics, inventory details, and automated summaries of store sales performance.",
        codeLink: "https://github.com/vyasan-6-6/shopease-dashboard",
        demoLink: "https://shopease-dashboard.demo"
    },
    {
        title: "TaskFlow Kanban Board",
        image: "assets/images/projects/project2.png",
        tech: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
        desc: "A visually stunning task management interface with drag-and-drop mechanics. Enables categories, priorities, due dates, and seamless client-side storage persistency.",
        codeLink: "https://github.com/vyasan-6-6/taskflow-kanban",
        demoLink: "https://taskflow.demo"
    },
    {
        title: "SmartURL Shortener Pro",
        image: "assets/images/projects/project1.png",
        tech: ["React", "Node.js", "MongoDB", "Redis"],
        desc: "A professional link-shortening web application designed to track clicks, referrers, locations, and manage custom user aliases with highly secure auth routes.",
        codeLink: "https://github.com/vyasan-6-6/smarturl-pro",
        demoLink: "https://smarturl-pro.demo"
    },
    {
        title: "DevConnect Social Platform",
        image: "assets/images/projects/project2.png",
        tech: ["React", "Tailwind", "Firebase", "WebRTC"],
        desc: "A specialized collaboration network for developers. Features real-time discussion boards, private messaging, code snippet sharing boards, and audio/video chat room instances.",
        codeLink: "https://github.com/vyasan-6-6/devconnect",
        demoLink: "https://devconnect.demo"
    }
];

function initProjectsComponent() {
    const projectsGrid = document.getElementById('projectsGrid');
    const showMoreBtn = document.getElementById('showMoreProjectsBtn');
    if (!projectsGrid || !showMoreBtn) return;

    // Clear static HTML placeholder grids
    projectsGrid.innerHTML = '';

    // Generate project cards
    projectsList.forEach((project, index) => {
        const isHidden = index >= 2;
        const cardHTML = `
            <article class="project-card glass-panel ${isHidden ? 'hidden-project' : ''}" data-index="${index}">
                <div class="project-img-wrapper">
                    <img src="${project.image}" alt="${project.title} Mockup">
                </div>
                <div class="project-info">
                    <h4 class="project-title">${project.title}</h4>
                    <div class="project-tech">
                        ${project.tech.map(t => `<span class="project-tech-tag">${t}</span>`).join('')}
                    </div>
                    <p class="project-desc">${project.desc}</p>
                    <div class="project-links">
                        <a href="${project.codeLink}" target="_blank" class="project-link">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                            Code
                        </a>
                        <a href="${project.demoLink}" target="_blank" class="project-link">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                            Live Demo
                        </a>
                    </div>
                </div>
            </article>
        `;
        projectsGrid.insertAdjacentHTML('beforeend', cardHTML);
    });

    // Handle show more / show less click toggle behavior
    showMoreBtn.addEventListener('click', () => {
        const extraProjects = document.querySelectorAll('.project-card.hidden-project');
        const allProjects = document.querySelectorAll('.project-card');
        
        // Check if projects are currently collapsed (we see hidden projects in DOM)
        const isCollapsed = extraProjects.length > 0;

        if (isCollapsed) {
            // Expand: Remove hidden-project, add fade-in animation
            allProjects.forEach((card, index) => {
                if (index >= 2) {
                    card.classList.remove('hidden-project');
                    card.classList.add('animate-fade');
                }
            });
            showMoreBtn.textContent = 'Show Less Projects';
        } else {
            // Collapse: Re-add hidden-project, remove fade animation, reset scroll
            allProjects.forEach((card, index) => {
                if (index >= 2) {
                    card.classList.add('hidden-project');
                    card.classList.remove('animate-fade');
                }
            });
            showMoreBtn.textContent = 'Show More Projects';
            
            // Smoothly scroll back to the projects section header
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
}

// Load projects on DOMContentLoaded
document.addEventListener('DOMContentLoaded', initProjectsComponent);
