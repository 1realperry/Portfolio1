import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';
import './Skills.css';

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
                </motion.div>

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            className="skill-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="skill-info">
                                <span className="skill-name">{skill.name}</span>
                                <span className="skill-category">{skill.category}</span>
                            </div>
                            <div className="skill-bar-bg">
                                <motion.div
                                    className="skill-bar-fill"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
