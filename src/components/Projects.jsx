import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, BarChart3 } from 'lucide-react';
import { projects } from '../data/portfolioData';
import './Projects.css';

const Projects = () => {
    const featuredProjects = projects.filter(p => p.featured);
    const otherProjects = projects.filter(p => !p.featured);

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
                    <p className="section-intro">
                        A selection of applications and interfaces I've built, showcasing frontend development and data analytics work.
                    </p>
                </motion.div>

                <div className="projects-featured">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card featured-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -8 }}
                        >
                            <div className="card-preview">
                                <div className="preview-placeholder">
                                    {project.category === 'Data Analytics' ? (
                                        <BarChart3 size={48} />
                                    ) : (
                                        <Code size={48} />
                                    )}
                                    <span>{project.category}</span>
                                </div>
                            </div>
                            <div className="card-content">
                                <div className="card-meta">
                                    <span className="category-badge">{project.category}</span>
                                    <span className="status-badge completed">Completed</span>
                                </div>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <ul className="project-tech-list">
                                    {project.tech.map((tech) => (
                                        <li key={tech}>{tech}</li>
                                    ))}
                                </ul>
                                <div className="card-actions">
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="action-btn primary">
                                            <ExternalLink size={16} />
                                            Live Demo
                                        </a>
                                    )}
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="action-btn secondary">
                                            <Github size={16} />
                                            View Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {otherProjects.length > 0 && (
                    <motion.div
                        className="projects-other"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <h3 className="other-title">Other Projects</h3>
                        <div className="projects-grid">
                            {otherProjects.map((project, index) => (
                                <motion.div
                                    key={index}
                                    className="project-card small-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="card-header-row">
                                        <div className="card-icon-small">
                                            {project.category === 'Data Analytics' ? (
                                                <BarChart3 size={20} />
                                            ) : (
                                                <Code size={20} />
                                            )}
                                        </div>
                                        <span className="category-tag">{project.category}</span>
                                    </div>
                                    <h4 className="project-title">{project.title}</h4>
                                    <p className="project-description">{project.description}</p>
                                    <ul className="project-tech-list compact">
                                        {project.tech.slice(0, 3).map((tech) => (
                                            <li key={tech}>{tech}</li>
                                        ))}
                                    </ul>
                                    <div className="card-actions compact">
                                        {project.link && (
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="action-btn tiny">
                                                <ExternalLink size={14} />
                                            </a>
                                        )}
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="action-btn tiny">
                                                <Github size={14} />
                                            </a>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Projects;
