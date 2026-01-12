import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            <motion.div
                className="cursor-dot"
                style={{
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    width: '8px',
                    height: '8px',
                    backgroundColor: 'var(--accent-primary)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    mixBlendMode: 'difference',
                }}
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                    scale: isHovering ? 1.5 : 1,
                }}
                transition={{
                    type: 'tween',
                    ease: 'backOut',
                    duration: 0.1
                }}
            />
            <motion.div
                className="cursor-ring"
                style={{
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    width: '32px',
                    height: '32px',
                    border: '1px solid var(--accent-primary)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9998,
                    mixBlendMode: 'difference',
                }}
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isHovering ? 1.5 : 1,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 15,
                    mass: 0.1
                }}
            />
            <style>{`
                body, a, button {
                    cursor: none !important;
                }
                /* Restore cursor for touch devices or if needed specific areas */
                @media (hover: none) {
                    .cursor-dot, .cursor-ring {
                        display: none;
                    }
                    body, a, button {
                        cursor: auto !important;
                    }
                }
            `}</style>
        </>
    );
};

export default CustomCursor;
