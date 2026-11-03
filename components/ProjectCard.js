'use client';
import { motion } from 'motion/react';
import styles from './ProjectCard.module.css';

const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

export default function ProjectCard({ title, icon, tags, description, href }) {
    return (
        <motion.div className={styles.box} variants={item} whileTap={{ scale: 0.98 }}>
            <div className={styles.thumb}>
                <i className={`bx ${icon}`}></i>
                <h4>{title}</h4>
                <div className="tags">
                    {tags.map((t) => (
                        <span key={t}>{t}</span>
                    ))}
                </div>
            </div>
            <div className={styles.layer}>
                <h4>{title}</h4>
                <p>{description}</p>
                {href && (
                    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Open ${title}`}>
                        <i className="bx bx-link-external"></i>
                    </a>
                )}
            </div>
        </motion.div>
    );
}
