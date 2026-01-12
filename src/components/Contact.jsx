import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container contact-container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="contact-card-wrapper"
                >
                    <div className="section-header center">
                        <h2 className="section-title"><span>05.</span> Get In Touch</h2>
                    </div>

                    <p className="contact-intro">
                        I am currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="contact-methods">
                        <a href={`mailto:${personalDetails.email}`} className="contact-method">
                            <Mail className="icon" size={24} />
                            <span>{personalDetails.email}</span>
                        </a>
                        <div className="contact-method">
                            <Phone className="icon" size={24} />
                            <span>{personalDetails.phone}</span>
                        </div>
                        <div className="contact-method">
                            <MapPin className="icon" size={24} />
                            <span>{personalDetails.location}</span>
                        </div>
                    </div>

                    <a href={`mailto:${personalDetails.email}`} className="btn btn-primary big-btn">
                        Say Hello
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
