'use client';
import { motion, MotionConfig } from 'motion/react';

// template.js is re-created on every navigation, so this plays on each page change.
export default function Template({ children }) {
    return (
        <MotionConfig reducedMotion="user">
            <motion.main
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                {children}
            </motion.main>
        </MotionConfig>
    );
}
