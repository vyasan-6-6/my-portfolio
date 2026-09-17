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
    ],
    codeSnippets: [
        {
            id: "jwt-auth",
            title: "JWT Authentication Middleware",
            language: "javascript",
            category: "Backend",
            description: "Express.js middleware verifying JSON Web Tokens, extracting user claims, and enforcing role-based access control.",
            filename: "authMiddleware.js",
            code: `import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const verifyToken = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ success: false, message: 'Access denied. Token missing.' });
        }

        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        const user = await User.findById(decoded.id).select('-password');
        if (!user) {
            return res.status(401).json({ success: false, message: 'Invalid session payload.' });
        }

        req.user = user;
        next();
    } catch (error) {
        return res.status(403).json({ success: false, message: 'Invalid or expired token.' });
    }
};`,
            output: "HTTP/1.1 200 OK\nPayload: { userId: 'usr_98f4a', role: 'developer', status: 'authenticated' }"
        },
        {
            id: "use-debounce",
            title: "Custom React Search Debounce Hook",
            language: "javascript",
            category: "Frontend",
            description: "A lightweight React custom hook that delays API requests until the user has stopped typing for a specified interval.",
            filename: "useDebounce.js",
            code: `import { useState, useEffect } from 'react';

export function useDebounce(value, delay = 500) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}`,
            output: "Query updated: 'Full Stack MERN' -> Triggering API search after 500ms delay..."
        },
        {
            id: "socket-handler",
            title: "Real-time Socket.io Broadcast Engine",
            language: "javascript",
            category: "Realtime",
            description: "Node.js WebSocket handler managing room subscriptions, active user states, and instant message distribution.",
            filename: "socketHandler.js",
            code: `import { Server } from 'socket.io';

export const initSocketServer = (server) => {
    const io = new Server(server, { cors: { origin: '*' } });
    const activeUsers = new Map();

    io.on('connection', (socket) => {
        socket.on('join_room', ({ roomId, userId }) => {
            socket.join(roomId);
            activeUsers.set(socket.id, { userId, roomId });
            io.to(roomId).emit('user_joined', { userId, activeCount: activeUsers.size });
        });

        socket.on('send_message', (data) => {
            io.to(data.roomId).emit('receive_message', { ...data, timestamp: new Date() });
        });

        socket.on('disconnect', () => {
            const user = activeUsers.get(socket.id);
            if (user) {
                io.to(user.roomId).emit('user_left', { userId: user.userId });
                activeUsers.delete(socket.id);
            }
        });
    });
};`,
            output: "Connected sockets: 14 | Room: 'dev-lounge' | Packet latency: 12ms"
        },
        {
            id: "mongo-pipeline",
            title: "MongoDB Aggregation Pipeline",
            language: "javascript",
            category: "Database",
            description: "Complex MongoDB aggregation calculating monthly analytics totals, average transaction values, and top revenue products.",
            filename: "salesPipeline.js",
            code: `import Order from '../models/Order.js';

export const getMonthlySalesAnalytics = async (year) => {
    return await Order.aggregate([
        { $match: { status: 'completed', createdAt: { $gte: new Date(\`\${year}-01-01\`) } } },
        {
            $group: {
                _id: { month: { $month: '$createdAt' } },
                totalRevenue: { $sum: '$amount' },
                orderCount: { $sum: 1 },
                avgOrderValue: { $avg: '$amount' }
            }
        },
        { $sort: { '_id.month': 1 } },
        {
            $project: {
                month: '$_id.month',
                totalRevenue: { $round: ['$totalRevenue', 2] },
                orderCount: 1,
                avgOrderValue: { $round: ['$avgOrderValue', 2] },
                _id: 0
            }
        }
    ]);
};`,
            output: "Pipeline Result: [ { month: 1, totalRevenue: 18450.50, orderCount: 142, avgOrderValue: 129.93 }, ... ]"
        }
    ]
};

