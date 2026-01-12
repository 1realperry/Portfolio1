import { motion } from 'framer-motion';
import { personalDetails } from '../data/portfolioData';
import './About.css';

const About = () => {
    // LinkedIn profile image URL
    const profileImageUrl = "https://media.licdn.com/dms/image/v2/D4D03AQH41c65D_gcnQ/profile-displayphoto-scale_200_200/B4DZs3XeY3GwAY-/0/1766160460808?e=1769644800&v=beta&t=o2fNFeoIaip9t10DqoTdlTejgaXGy-l26zkvrf50Gvk";

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
                        <p>{personalDetails.about}</p>
                        <p>
                            My journey started with a fascination for how things work on the web, which led me to explore frontend technologies.
                            As I delved deeper, I realized the power of data in driving decisions, prompting me to acquire skills in data analytics.
                        </p>
                        <p>
                            Today, I enjoy building seamless user interfaces while also having the ability to crunch numbers and visualize trends.
                        </p>

                        <div className="about-highlights">
                            <div className="highlight-item">
                                <span className="highlight-number">2+</span>
                                <span className="highlight-label">Years Learning</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-number">5+</span>
                                <span className="highlight-label">Projects Built</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-number">1</span>
                                <span className="highlight-label">Internship</span>
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
                            <div className="image-overlay"></div>
                            <div className="image-border"></div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
