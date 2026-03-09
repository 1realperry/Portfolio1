import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Github, Linkedin, Mail } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';
import './Hero.css';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section id="home" className="hero-section">
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.span className="greeting" variants={itemVariants}>
                        Hi, I'm
                    </motion.span>
                    
                    <motion.h1 className="name" variants={itemVariants}>
                        Samuel Otoo<br />Essilfie
                    </motion.h1>
                    
                    <motion.h2 className="title" variants={itemVariants}>
                        Frontend Developer<br />
                        <span className="title-accent">&</span> Data Analyst
                    </motion.h2>
                    
                    <motion.p className="tagline" variants={itemVariants}>
                        I build responsive web applications and data-driven dashboards that turn ideas and information into clear, usable experiences.
                    </motion.p>

                    <motion.div className="hero-meta" variants={itemVariants}>
                        <span className="meta-item">
                            <MapPin size={14} /> Based in Ghana
                        </span>
                        <span className="meta-item">
                            Open to opportunities
                        </span>
                        <div className="skill-tags">
                            <span>React</span>
                            <span>Vue</span>
                            <span>JavaScript</span>
                            <span>Data Analytics</span>
                        </div>
                    </motion.div>

                    <motion.div className="hero-actions" variants={itemVariants}>
                        <a href="#projects" className="btn btn-primary">
                            View Projects <ArrowRight size={18} />
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            Let's Talk
                        </a>
                    </motion.div>

                    <motion.div className="hero-socials" variants={itemVariants}>
                        <a href={personalDetails.socials[0].url} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                            <Github size={20} />
                        </a>
                        <a href={personalDetails.socials[1].url} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                            <Linkedin size={20} />
                        </a>
                        <a href={`mailto:${personalDetails.email}`} className="social-link" aria-label="Email">
                            <Mail size={20} />
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div 
                    className="hero-visual"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className="profile-card">
                        <div className="profile-image-wrapper">
                            <img 
                                src="/IMG_2904.JPG" 
                                alt="Samuel Otoo Essilfie" 
                                className="profile-image"
                            />
                            <div className="profile-image-border"></div>
                        </div>
                        <div className="profile-stats">
                            <div className="stat-item">
                                <span className="stat-value">2+</span>
                                <span className="stat-label">Years Learning</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-value">5+</span>
                                <span className="stat-label">Projects Built</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-value">2</span>
                                <span className="stat-label">Internships</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="floating-badge badge-1">
                        <span className="badge-icon">⚛️</span>
                        <span>React</span>
                    </div>
                    <div className="floating-badge badge-2">
                        <span className="badge-icon">📊</span>
                        <span>Data Viz</span>
                    </div>
                </motion.div>

                <motion.a 
                    href="#about"
                    className="scroll-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <span className="scroll-text">Scroll Down</span>
                    <div className="scroll-arrow">
                        <motion.div 
                            animate={{ y: [0, 6, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            ↓
                        </motion.div>
                    </div>
                </motion.a>
            </div>
        </section>
    );
};

export default Hero;
