import { motion } from 'framer-motion';
import { personalDetails } from '../data/portfolioData';
import './About.css';

const About = () => {
    const profileImageUrl = "/IMG_2904.JPG";

    return (
        <section id="about" className="about-section">
            <div className="container about-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="section-header"
                >
                    <h2 className="section-title"><span>01.</span> About Me</h2>
                </motion.div>

                <div className="about-content">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <p className="about-lead">
                            I'm a <strong>Frontend Developer & Data Analyst</strong> passionate about building responsive web interfaces and turning data into useful insights.
                        </p>
                        <p>
                            I enjoy creating clean user experiences, working with modern web tools like React and Vue.js, and using analytics to support better decisions. My background combines web development, problem-solving, and hands-on experience with data tools.
                        </p>

                        <div className="about-highlights">
                            <div className="highlight-item">
                                <span className="highlight-number">2+</span>
                                <span className="highlight-label">Years of Learning</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-number">6+</span>
                                <span className="highlight-label">Projects Built</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-number">2</span>
                                <span className="highlight-label">Internship Experiences</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-image-wrapper"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <motion.div
                            className="profile-image-container"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <img
                                src={profileImageUrl}
                                alt="Samuel Otoo Essilfie"
                                className="profile-image"
                            />
                            <div className="image-border"></div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
