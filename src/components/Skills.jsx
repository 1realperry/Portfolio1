import { motion } from 'framer-motion';
import { Code, Database, Wrench, Sparkles } from 'lucide-react';
import './Skills.css';

const skillGroups = [
    {
        title: "Frontend Development",
        icon: <Code size={24} />,
        description: "Building responsive and interactive user interfaces",
        proficiency: "Advanced",
        skills: [
            { name: "React", projects: "Portfolio, Dashboard apps" },
            { name: "Vue.js", projects: "Landing pages, Web apps" },
            { name: "JavaScript", projects: "Interactive features" },
            { name: "HTML/CSS", projects: "Clean semantic markup" },
            { name: "Bootstrap", projects: "Responsive layouts" }
        ]
    },
    {
        title: "Data Analytics",
        icon: <Database size={24} />,
        description: "Transforming data into actionable insights",
        proficiency: "Intermediate",
        skills: [
            { name: "Power BI", projects: "Dashboards & Reporting" },
            { name: "Excel", projects: "Data cleaning & Analysis" },
            { name: "SQL", projects: "Query optimization" }
        ]
    },
    {
        title: "Tools & Workflow",
        icon: <Wrench size={24} />,
        description: "Development workflow and collaboration",
        proficiency: "Working Knowledge",
        skills: [
            { name: "Git/GitHub", projects: "Version control" },
            { name: "Figma", projects: "UI/Prototyping" },
            { name: "VS Code", projects: "Daily development" }
        ]
    }
];

const currentlyLearning = [
    { name: "TypeScript", progress: "Learning" },
    { name: "Node.js", progress: "Exploring" },
    { name: "Python", progress: "Basics" }
];

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="container skills-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <h2 className="section-title"><span>02.</span> Skills</h2>
                    <p className="section-intro">
                        Technologies and tools I use to build interfaces and work with data.
                    </p>
                </motion.div>

                <div className="skills-content">
                    <div className="skill-groups-grid">
                        {skillGroups.map((group, groupIndex) => (
                            <motion.div
                                key={group.title}
                                className="skill-group-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: groupIndex * 0.1 }}
                            >
                                <div className="group-header">
                                    <div className="group-icon">{group.icon}</div>
                                    <div className="group-info">
                                        <h3 className="group-title">{group.title}</h3>
                                        <span className="proficiency-badge">{group.proficiency}</span>
                                    </div>
                                </div>
                                <p className="group-description">{group.description}</p>
                                <div className="group-skills">
                                    {group.skills.map((skill, skillIndex) => (
                                        <motion.div
                                            key={skill.name}
                                            className="skill-item"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: groupIndex * 0.1 + skillIndex * 0.05 }}
                                        >
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-context">{skill.projects}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="learning-panel"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="learning-header">
                            <Sparkles size={20} className="learning-icon" />
                            <h3>Currently Learning</h3>
                        </div>
                        <div className="learning-list">
                            {currentlyLearning.map((item, index) => (
                                <div key={item.name} className="learning-item">
                                    <span className="learning-name">{item.name}</span>
                                    <span className="learning-progress">{item.progress}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
