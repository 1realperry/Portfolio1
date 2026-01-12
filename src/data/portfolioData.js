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
            url: "https://www.linkedin.com/in/samuel-otoo-essilfie",
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
        title: "Humble Grace Guest House Landing Page",
        description: "A responsive landing page for a guest house with booking functionality and contact forms. Designed to offer a seamless user experience for potential guests.",
        tech: ["Vue.js", "JavaScript", "HTML", "CSS"],
        link: "https://humblegrace.vercel.app/"
    },
    {
        title: "4 Years USA Crime Data Analysis",
        description: "Cleaned and analyzed four years of US crime data to show trends by state, crime type, and weapons used. Provided actionable insights into crime patterns.",
        tech: ["Power BI", "Data Cleaning", "Data Visualization"],
        // link: "#" 
    }
];

export const experience = [
    {
        role: "Hardware & Networking Intern",
        company: "Perseus Mining Limited",
        duration: "3 months",
        description: "Assisted with hardware maintenance and networking tasks."
    },
    {
        role: "Junior Developer",
        company: "Adroit Bureau",
        duration: "6 months",
        description: "Assisted with building frontend interfaces with react."
    }
];

export const education = [
    {
        degree: "BTech Computer Technology",
        school: "Kumasi Technical University",
        year: "2025"
    },
    {
        degree: "Data Analytics with Power BI",
        school: "Ghana-India Kofi Annan Institute",
        year: "Certification"
    }
];
