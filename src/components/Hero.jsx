import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="greeting">Hi, I'm</span>
                    <h1 className="name">{personalDetails.name}</h1>
                    <h2 className="title">{personalDetails.title}</h2>
                    <p className="tagline">{personalDetails.tagline}</p>

                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-primary">
                            View Projects <ArrowRight size={18} />
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            Contact Me
                        </a>
                    </div>
                </motion.div>

                {/* Abstract background elements could go here or in CSS */}
                <div className="hero-background-glow"></div>
            </div>
        </section>
    );
};

export default Hero;
