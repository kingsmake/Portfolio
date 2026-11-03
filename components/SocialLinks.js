'use client';
import { motion } from 'motion/react';
import styles from './SocialLinks.module.css';

const socials = [
    { href: 'https://www.linkedin.com/in/omkar-tupe-10293t', label: 'LinkedIn', icon: 'bxl-linkedin' },
    { href: 'https://github.com/kingsmake', label: 'GitHub', icon: 'bxl-github' },
];

export default function SocialLinks() {
    return (
        <div className={styles.social}>
            {socials.map((s) => (
                <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <i className={`bx ${s.icon}`}></i>
                </motion.a>
            ))}
        </div>
    );
}
