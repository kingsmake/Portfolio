'use client';
import { motion } from 'motion/react';

// Scroll-reveal wrapper. x / y set the starting offset in px.
export default function Reveal({ children, x = 0, y = 40, delay = 0, className }) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, x, y }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay }}
        >
            {children}
        </motion.div>
    );
}
