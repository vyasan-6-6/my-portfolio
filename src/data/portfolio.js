/**
 * Portfolio Configuration Data
 * Edit this file to customize all content displayed on your website.
 */

export const portfolioData = {
    personal: {
        name: "Vyasen K S",
        title: "Full Stack MERN Developer",
        subtitle: "I build scalable, secure, and modern web applications with exceptional user experiences.",
        bio: "I am a passionate software developer focused on crafting beautiful, highly interactive user interfaces and robust backend APIs. I specialize in the MERN stack (MongoDB, Express, React, Node.js) and enjoy solving complex algorithmic challenges.",
        email: "vyasa.dev@email.com",
        phone: "+91 98765 43210",
        location: "Kerala, India",
        resumeUrl: "/resume.pdf", // Served from the public directory
        avatar: "/images/profile.png", // Served from the public directory
        isAvailable: true // Displays the "Available for Work" badge
    },
    socials: [
        {
            name: "GitHub",
            url: "https://github.com/vyasan-6-6",
            icon: "FaGithub"
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/vyasan-6-6",
            icon: "FaLinkedin"
        },
        {
            name: "Twitter",
            url: "https://twitter.com/vyasan",
            icon: "FaTwitter"
        },
        {
            name: "Instagram",
            url: "https://instagram.com/vyasan",
            icon: "FaInstagram"
        }
    ],
    stats: [
        { label: "Projects Completed", value: 15, suffix: "+" },
        { label: "Technologies Known", value: 15, suffix: "" },
        { label: "Git Repositories", value: 30, suffix: "+" },
        { label: "Happy Clients", value: 5, suffix: "+" }
    ],
    skills: [
        // Frontend
        { name: "HTML5", category: "frontend", icon: "SiHtml5" },
        { name: "CSS3 / SASS", category: "frontend", icon: "SiCss" },
        { name: "JavaScript", category: "frontend", icon: "SiJavascript" },
        { name: "TypeScript", category: "frontend", icon: "SiTypescript" },
        { name: "React.js", category: "frontend", icon: "SiReact" },
        { name: "Next.js", category: "frontend", icon: "SiNextdotjs" },
        { name: "Redux Toolkit", category: "frontend", icon: "SiRedux" },
        { name: "Tailwind CSS", category: "frontend", icon: "SiTailwindcss" },
        
        // Backend
        { name: "Node.js", category: "backend", icon: "SiNodedotjs" },
        { name: "Express.js", category: "backend", icon: "SiExpress" },
        { name: "REST APIs", category: "backend", icon: "SiApi" },
        { name: "JWT Auth", category: "backend", icon: "SiJsonwebtokens" },
        { name: "Socket.io", category: "backend", icon: "SiSocketdotio" },
        
        // Database
        { name: "MongoDB", category: "database", icon: "SiMongodb" },
        { name: "PostgreSQL", category: "database", icon: "SiPostgresql" },
        { name: "Redis", category: "database", icon: "SiRedis" },
        
        // Cloud & DevOps
        { name: "AWS EC2", category: "cloud", icon: "FaAws" },
        { name: "Nginx", category: "cloud", icon: "SiNginx" },
        { name: "Docker", category: "cloud", icon: "SiDocker" },
        { name: "Git", category: "cloud", icon: "SiGit" }
    ],
    services: [
        {
            title: "Web Development",
            desc: "Designing and building interactive, lightning-fast frontend user interfaces using modern React, Next.js, and Tailwind CSS.",
            icon: "FiLayout"
        },
        {
            title: "Backend Development",
            desc: "Developing highly scalable, secure, and performant server infrastructures using Node.js, Express, and REST architectures.",
            icon: "FiServer"
        },
        {
            title: "API Development & Integration",
            desc: "Designing secure RESTful and WebSocket-based APIs with JWT authentication, Socket.io, and complex business logics.",
            icon: "FiCpu"
        },
        {
            title: "Performance Optimization",
            desc: "Optimizing code split, lazy loads, caching with Redis, and rendering speed to score perfect Lighthouse scores.",
            icon: "FiTrendingUp"
        }
    ],
    projects: [
        {
            title: "ShopEase Analytics Dashboard",
            category: "frontend",
            desc: "A premium admin dashboard built to monitor e-commerce activity, offering charts, real-time analytics, inventory details, and automated summaries of store sales performance.",
            tech: ["React", "Chart.js", "Node.js", "MongoDB"],
            codeLink: "https://github.com/vyasan-6-6/shopease-dashboard",
            demoLink: "https://shopease-dashboard.demo",
            image: "/images/projects/project1.png",
            metrics: {
                users: "1.2k+",
                performance: "98%",
                duration: "2 Weeks",
                difficulty: "Medium"
            }
        },
        {
            title: "TaskFlow Kanban Board",
            category: "frontend",
            desc: "A visually stunning task management interface with drag-and-drop mechanics. Enables categories, priorities, due dates, and seamless client-side storage persistency.",
            tech: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
            codeLink: "https://github.com/vyasan-6-6/taskflow-kanban",
            demoLink: "https://taskflow.demo",
            image: "/images/projects/project2.png",
            metrics: {
                users: "500+",
                performance: "100%",
                duration: "1 Week",
                difficulty: "Easy"
            }
        },
        {
            title: "SmartURL Shortener Pro",
            category: "backend",
            desc: "A professional link-shortening web application designed to track clicks, referrers, locations, and manage custom user aliases with highly secure auth routes.",
            tech: ["React", "Node.js", "MongoDB", "Redis"],
            codeLink: "https://github.com/vyasan-6-6/smarturl-pro",
            demoLink: "https://smarturl-pro.demo",
            image: "/images/projects/project1.png",
            metrics: {
                users: "3.5k+",
                performance: "95%",
                duration: "3 Weeks",
                difficulty: "Hard"
            }
        },
        {
            title: "DevConnect Social Platform",
            category: "fullstack",
            desc: "A specialized collaboration network for developers. Features real-time discussion boards, private messaging, code snippet sharing boards, and audio/video chat room instances.",
            tech: ["React", "Tailwind", "Firebase", "WebRTC"],
            codeLink: "https://github.com/vyasan-6-6/devconnect",
            demoLink: "https://devconnect.demo",
            image: "/images/projects/project2.png",
            metrics: {
                users: "800+",
                performance: "92%",
                duration: "4 Weeks",
                difficulty: "Hard"
            }
        }
    ],
    experience: [
        {
            role: "Software Developer",
            company: "InnoTech Solutions",
            type: "Full-Time",
            duration: "2024 - PRESENT",
            desc: "Responsible for developing high-performance RESTful APIs and modern frontend interfaces using React.js. Led migration of legacy applications to dynamic component-based structures, increasing developer velocity by 25%."
        }
    ],
    education: [
        {
            degree: "Higher Secondary Education (Plus Two)",
            school: "St. Thomas Higher Secondary School",
            duration: "2024 - 2026",
            desc: "Specialized in Computer Science, Mathematics, and Physics with high academic performance."
        }
    ],
    certifications: [
        {
            name: "MERN Stack Developer Certificate",
            issuer: "Udemy Academy",
            date: "2025",
            credentialLink: "https://udemy.com/certificate",
            viewLink: "https://udemy.com/certificate"
        },
        {
            name: "AWS Fundamentals Certified",
            issuer: "Amazon Web Services",
            date: "2024",
            credentialLink: "https://aws.com",
            viewLink: "https://aws.com"
        }
    ]
};
