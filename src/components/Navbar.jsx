import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Detect active section
            const sections = ['about', 'skills', 'projects', 'experience', 'contact'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    const menuVariants = {
        closed: {
            x: '100%',
            transition: {
                type: 'spring',
                stiffness: 400,
                damping: 40,
            },
        },
        open: {
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 400,
                damping: 40,
            },
        },
    };

    const linkVariants = {
        closed: { opacity: 0, x: 20 },
        open: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.1,
            },
        }),
    };

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="nav-container">
                    <motion.a
                        href="#"
                        className="logo"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        SO<span>.</span>
                    </motion.a>

                    {/* Desktop Menu */}
                    <ul className="nav-menu desktop">
                        {navLinks.map((link, index) => (
                            <li key={link.name}>
                                <motion.a
                                    href={link.href}
                                    className={`nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ y: 0 }}
                                >
                                    <span className="link-number">0{index + 1}.</span>
                                    {link.name}
                                </motion.a>
                            </li>
                        ))}
                        <li>
                            <motion.a
                                href="#contact"
                                className="resume-btn"
                                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)' }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get In Touch
                            </motion.a>
                        </li>
                    </ul>

                    {/* Mobile Toggle */}
                    <motion.button
                        className="mobile-toggle"
                        onClick={() => setIsOpen(!isOpen)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Toggle menu"
                    >
                        <Menu size={24} />
                    </motion.button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            className="mobile-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            className="mobile-menu"
                            variants={menuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                        >
                            <div className="mobile-menu-header">
                                <motion.button
                                    className="close-btn"
                                    onClick={() => setIsOpen(false)}
                                    whileHover={{ scale: 1.1, rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                    aria-label="Close menu"
                                >
                                    <X size={28} />
                                </motion.button>
                            </div>
                            <ul className="mobile-menu-links">
                                {navLinks.map((link, index) => (
                                    <motion.li
                                        key={link.name}
                                        custom={index}
                                        variants={linkVariants}
                                        initial="closed"
                                        animate="open"
                                    >
                                        <a
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className={activeSection === link.href.slice(1) ? 'active' : ''}
                                        >
                                            <span className="link-number">0{index + 1}.</span>
                                            {link.name}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                            <motion.div
                                className="mobile-menu-footer"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                <a href="mailto:samotooessilfie@gmail.com" className="mobile-contact-btn">
                                    Get In Touch
                                </a>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
