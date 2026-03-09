import {
    Code,
    BarChart,
    Database,
    Layout,
    Terminal,
    Github,
    Linkedin,
    Twitter,
    Mail,
    Phone,
    MapPin
} from 'lucide-react';

export const personalDetails = {
    name: "Samuel Otoo Essilfie",
    title: "Frontend Developer & Data Analyst",
    location: "Accra, Ghana",
    tagline: "Building intuitive web interfaces and transforming data into actionable insights.",
    email: "samotooessilfie@gmail.com",
    phone: "+233 59 2269 600 || +233 53 8727 883",
    about: "I am an aspiring Data Scientist and Full Stack Developer with a strong focus on frontend development and data analytics. I am passionate about bridging modern web development with data-driven decision-making and I am always open to learning new tools and frameworks.",
    socials: [
        {
            platform: "GitHub",
            url: "https://github.com/1realperry",
            icon: Github
        },
        {
            platform: "LinkedIn",
            url: "https://www.linkedin.com/in/samuel-otoo-essilfie-411068250",
            icon: Linkedin
        },
        {
            platform: "X (Twitter)",
            url: "https://x.com/_utdperry",
            icon: Twitter
        }
    ]
};

export const skills = [
    { name: "React", category: "Frontend", level: 85 },
    { name: "Vue.js", category: "Frontend", level: 80 },
    { name: "JavaScript", category: "Frontend", level: 85 },
    { name: "HTML/CSS", category: "Frontend", level: 90 },
    { name: "Bootstrap", category: "Frontend", level: 85 },
    { name: "Power BI", category: "Data", level: 80 },
    { name: "Microsoft Excel", category: "Data", level: 85 },
    { name: "Git/GitHub", category: "Tools", level: 80 },
];

export const projects = [
    {
        title: "Humble Grace Guest House",
        description: "Designed and built a responsive booking-focused landing page for a guest house, featuring inquiry forms, clear service sections, and a mobile-friendly user experience that increased guest inquiries.",
        tech: ["Vue.js", "JavaScript", "HTML", "CSS"],
        link: "https://humblegrace.vercel.app/",
        github: "",
        category: "Frontend",
        featured: true
    },
    {
        title: "USA Crime Data Analysis",
        description: "Cleaned and analyzed four years of US crime data using Power BI to reveal trends by state, crime type, and weapons used. Generated actionable insights that demonstrate data storytelling capabilities.",
        tech: ["Power BI", "Data Cleaning", "Data Visualization"],
        link: "",
        github: "",
        category: "Data Analytics",
        featured: true
    },
    {
        title: "Personal Portfolio",
        description: "Built a modern, responsive portfolio website featuring smooth animations, dark/light theme toggle, and real-time GitHub integration to showcase projects and skills.",
        tech: ["React", "Framer Motion", "CSS", "GitHub API"],
        link: "",
        github: "https://github.com/1realperry/portfolio1",
        category: "Frontend",
        featured: true
    },
    {
        title: "E-Commerce Dashboard",
        description: "Created an interactive admin dashboard for tracking sales, inventory, and customer metrics with responsive charts and data visualization components.",
        tech: ["React", "Chart.js", "JavaScript"],
        link: "",
        github: "",
        category: "Frontend",
        featured: false
    },
    {
        title: "Weather App",
        description: "Developed a weather application that fetches real-time weather data and displays forecasts with intuitive UI and location-based search functionality.",
        tech: ["JavaScript", "Weather API", "CSS"],
        link: "",
        github: "",
        category: "Frontend",
        featured: false
    },
    {
        title: "Sales Analytics Report",
        description: "Designed interactive Power BI reports to track sales performance, identify trends, and provide stakeholders with actionable business insights through visualizations.",
        tech: ["Power BI", "Excel", "DAX"],
        link: "",
        github: "",
        category: "Data Analytics",
        featured: false
    }
];

export const experience = [
    {
        role: "Junior Developer",
        company: "Adroit Bureau",
        duration: "6 months",
        location: "Accra, Ghana",
        summary: "Built and maintained responsive frontend interfaces for client-facing web applications using React.",
        achievements: [
            "Developed reusable UI components for responsive landing pages",
            "Implemented interactive frontend features using JavaScript",
            "Collaborated on code updates and version control with Git/GitHub",
            "Worked closely with designers to translate Figma mockups into code"
        ],
        tech: ["React", "JavaScript", "Git", "HTML/CSS", "Figma"]
    },
    {
        role: "Hardware & Networking Intern",
        company: "Perseus Mining Limited",
        duration: "3 months",
        location: "Ghana",
        summary: "Supported hardware troubleshooting, device setup, and basic network maintenance across internal systems.",
        achievements: [
            "Assisted with troubleshooting and resolving hardware issues",
            "Supported network configuration and basic maintenance tasks",
            "Helped with device setup and system imaging",
            "Documented hardware inventory and maintenance procedures"
        ],
        tech: ["Hardware Maintenance", "Networking", "Windows", "MS Office"]
    }
];

export const education = [
    {
        degree: "BTech Computer Technology",
        school: "Kumasi Technical University",
        year: "2025",
        focus: "Software development, networking, and computing systems",
        relevant: ["Web Development", "Databases", "Networking", "Programming"]
    },
    {
        degree: "Data Analytics with Power BI",
        school: "Ghana-India Kofi Annan Centre of Excellence",
        year: "Certification",
        focus: "Dashboard design, data transformation, and visualization",
        relevant: ["Power BI", "Data Visualization", "Reporting", "Excel"]
    }
];
