import { Github, Linkedin, Twitter } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="social-links">
                {personalDetails.socials.map((social) => {
                    const Icon = social.icon;
                    // Note: social.icon is a component, but in JSON it might be hard to store component ref. 
                    // In portfolioData.js I imported components directly so it works.
                    return (
                        <a
                            key={social.platform}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.platform}
                        >
                            <Icon size={20} />
                        </a>
                    );
                })}
            </div>
            <p className="copyright">
                Designed & Built by {personalDetails.name}
            </p>
        </footer>
    );
};

export default Footer;
