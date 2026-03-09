import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Download, CheckCircle, Code, Database, Wrench } from 'lucide-react';
import { experience, education } from '../data/portfolioData';
import './Experience.css';

const Experience = () => {
    const getIcon = (category) => {
        switch (category) {
            case 'Frontend': return <Code size={14} />;
            case 'Data': return <Database size={14} />;
            default: return <Wrench size={14} />;
        }
    };

    return (
        <section id="experience" className="experience-section">
            <div className="container experience-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <h2 className="section-title"><span>05.</span> Experience & Education</h2>
                </motion.div>

                <div className="experience-layout">
                    <div className="experience-main">
                        <motion.div
                            className="experience-group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="group-title">
                                <Briefcase size={20} />
                                Work Experience
                            </h3>
                            <div className="timeline">
                                {experience.map((job, index) => (
                                    <motion.div
                                        key={index}
                                        className="timeline-item"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <div className="timeline-marker">
                                            <div className="marker-dot"></div>
                                            {index < experience.length - 1 && <div className="marker-line"></div>}
                                        </div>
                                        <div className="timeline-content">
                                            <div className="timeline-header">
                                                <div className="role-company">
                                                    <h4 className="role">{job.role}</h4>
                                                    <span className="at-symbol">@</span>
                                                    <span className="company">{job.company}</span>
                                                </div>
                                                <div className="role-meta">
                                                    <span className="duration">{job.duration}</span>
                                                    {job.location && (
                                                        <span className="location">
                                                            <MapPin size={12} /> {job.location}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <p className="summary">{job.summary}</p>
                                            <ul className="achievements">
                                                {job.achievements.map((achievement, i) => (
                                                    <li key={i}>
                                                        <CheckCircle size={14} className="check-icon" />
                                                        {achievement}
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="tech-stack">
                                                {job.tech.map((tech) => (
                                                    <span key={tech} className="tech-badge">{tech}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="education-group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h3 className="group-title">
                                <GraduationCap size={20} />
                                Education
                            </h3>
                            <div className="education-cards">
                                {education.map((edu, index) => (
                                    <motion.div
                                        key={index}
                                        className="education-card"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <div className="edu-header">
                                            <h4 className="degree">{edu.degree}</h4>
                                            <span className="edu-year">{edu.year}</span>
                                        </div>
                                        <p className="edu-school">{edu.school}</p>
                                        {edu.focus && <p className="edu-focus">{edu.focus}</p>}
                                        {edu.relevant && (
                                            <div className="edu-relevant">
                                                {edu.relevant.map((item) => (
                                                    <span key={item} className="relevant-tag">{item}</span>
                                                ))}
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <aside className="experience-sidebar">
                        <motion.div
                            className="sidebar-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <h4 className="sidebar-title">Key Strengths</h4>
                            <ul className="strengths-list">
                                <li>Responsive Web Development</li>
                                <li>Data Visualization</li>
                                <li>Frontend Frameworks</li>
                                <li>Problem Solving</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            className="sidebar-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <h4 className="sidebar-title">Tech I Use Daily</h4>
                            <div className="daily-tools">
                                <span>React</span>
                                <span>JavaScript</span>
                                <span>Power BI</span>
                                <span>Git</span>
                                <span>VS Code</span>
                                <span>Excel</span>
                            </div>
                        </motion.div>

                        <motion.div
                            className="sidebar-card availability-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            <div className="availability-status">
                                <span className="status-dot"></span>
                                <span>Open to opportunities</span>
                            </div>
                            <p className="availability-text">
                                Looking for internships, junior roles, or freelance projects in frontend development or data analytics.
                            </p>
                            <a href="#contact" className="contact-cta">
                                Let's Connect
                            </a>
                        </motion.div>

                        <motion.div
                            className="sidebar-card download-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                        >
                            <Download size={24} />
                            <div>
                                <h4>Download CV</h4>
                                <p>Get my full resume</p>
                            </div>
                        </motion.div>
                    </aside>
                </div>
            </div>
        </section>
    );
};

export default Experience;
