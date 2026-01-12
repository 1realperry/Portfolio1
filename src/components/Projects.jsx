import { motion } from 'framer-motion';
import { Folder, Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolioData';
import './Projects.css';

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="container projects-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <h2 className="section-title"><span>03.</span> Projects</h2>
                </motion.div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="card-glow"></div>
                            <div className="card-content">
                                <div className="card-header">
                                    <div className="folder-icon-wrapper">
                                        <Folder size={40} className="folder-icon" />
                                    </div>
                                    <div className="project-links">
                                        {project.link && (
                                            <motion.a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.2, y: -2 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="project-link"
                                            >
                                                <ExternalLink size={20} />
                                            </motion.a>
                                        )}
                                    </div>
                                </div>

                                <h3 className="project-title">
                                    {project.title}
                                    <ArrowUpRight className="title-arrow" size={18} />
                                </h3>
                                <p className="project-description">{project.description}</p>

                                <ul className="project-tech-list">
                                    {project.tech.map((tech) => (
                                        <li key={tech}>{tech}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
