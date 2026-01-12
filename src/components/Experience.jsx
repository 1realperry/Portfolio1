import { motion } from 'framer-motion';
import { experience, education } from '../data/portfolioData';
import './Experience.css';

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <div className="container experience-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <h2 className="section-title"><span>04.</span> Experience & Education</h2>
                </motion.div>

                <div className="experience-content">
                    <div className="timeline-group">
                        <h3 className="group-title">Experience</h3>
                        {experience.map((job, index) => (
                            <motion.div
                                key={index}
                                className="timeline-item"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <h4 className="role">{job.role}</h4>
                                    <div className="company-info">
                                        <span className="company">{job.company}</span>
                                        <span className="duration">{job.duration}</span>
                                    </div>
                                    <p className="description">{job.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="timeline-group">
                        <h3 className="group-title">Education</h3>
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                className="timeline-item"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <h4 className="role">{edu.degree}</h4>
                                    <div className="company-info">
                                        <span className="company">{edu.school}</span>
                                        <span className="duration">{edu.year}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
