'use client';
import Image from 'next/image';
import { motion } from 'motion/react';

// Photo with the gentle floating loop from the original design.
export default function FloatImage({ src, alt, width, height, priority }) {
    return (
        <motion.div
            animate={{ y: [0, -24, 0] }}
            transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity }}
        >
            <Image src={src} alt={alt} width={width} height={height} priority={priority} sizes="(min-width: 769px) 35vw, 90vw" />
        </motion.div>
    );
}
