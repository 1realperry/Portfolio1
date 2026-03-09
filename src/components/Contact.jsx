import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, FileText, ArrowRight } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container contact-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="contact-layout"
                >
                    <div className="contact-main">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="section-header"
                        >
                            <h2 className="section-title"><span>06.</span> Get In Touch</h2>
                        </motion.div>

                        <motion.p 
                            className="contact-intro"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            I'm currently open to <strong>frontend development</strong>, <strong>data analytics</strong>, and <strong>junior software</strong> opportunities. 
                            Whether you need a responsive web interface, a data dashboard, or a reliable collaborator, I'd be glad to connect.
                        </motion.p>

                        <motion.div 
                            className="availability-badge"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 }}
                        >
                            <span className="status-dot"></span>
                            Based in Accra, open to remote opportunities
                        </motion.div>

                        <motion.div
                            className="contact-actions"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <a href={`mailto:${personalDetails.email}`} className="btn btn-primary">
                                <Mail size={18} />
                                Email Me
                            </a>
                            <a 
                                href={personalDetails.socials[1].url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="btn btn-secondary"
                            >
                                <Linkedin size={18} />
                                LinkedIn
                            </a>
                        </motion.div>
                    </div>

                    <div className="contact-info-cards">
                        <motion.a 
                            href={`mailto:${personalDetails.email}`}
                            className="contact-card"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="card-icon">
                                <Mail size={24} />
                            </div>
                            <div className="card-content">
                                <span className="card-label">Email</span>
                                <span className="card-value">{personalDetails.email}</span>
                            </div>
                            <ArrowRight size={18} className="card-arrow" />
                        </motion.a>

                        <motion.div 
                            className="contact-card"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.25 }}
                        >
                            <div className="card-icon">
                                <Phone size={24} />
                            </div>
                            <div className="card-content">
                                <span className="card-label">Phone</span>
                                <span className="card-value">{personalDetails.phone}</span>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="contact-card"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="card-icon">
                                <MapPin size={24} />
                            </div>
                            <div className="card-content">
                                <span className="card-label">Location</span>
                                <span className="card-value">{personalDetails.location}</span>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="contact-card github-card"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.35 }}
                        >
                            <div className="card-icon">
                                <Github size={24} />
                            </div>
                            <div className="card-content">
                                <span className="card-label">GitHub</span>
                                <span className="card-value">@1realperry</span>
                            </div>
                            <a 
                                href={personalDetails.socials[0].url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="card-link"
                            >
                                View Profile <ArrowRight size={14} />
                            </a>
                        </motion.div>
                    </div>
                </motion.div>

                <footer className="contact-footer">
                    <div className="social-links">
                        {personalDetails.socials.map((social, index) => {
                            const Icon = social.icon;
                            return (
                                <motion.a
                                    key={social.platform}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.platform}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                >
                                    <Icon size={20} />
                                </motion.a>
                            );
                        })}
                    </div>
                    <p className="copyright">
                        Designed & Built by Samuel Otoo Essilfie
                    </p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
