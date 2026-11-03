'use client';
import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

// Types, pauses, deletes and loops through the given strings.
export default function Typewriter({ strings }) {
    const reduce = useReducedMotion();
    const [text, setText] = useState('');

    useEffect(() => {
        if (reduce) return;
        let i = 0, n = 0, deleting = false, timer;
        const tick = () => {
            const word = strings[i];
            if (!deleting) {
                n++;
                setText(word.slice(0, n));
                if (n === word.length) {
                    deleting = true;
                    timer = setTimeout(tick, 1000);
                    return;
                }
            } else {
                n--;
                setText(word.slice(0, n));
                if (n === 0) {
                    deleting = false;
                    i = (i + 1) % strings.length;
                }
            }
            timer = setTimeout(tick, 100);
        };
        timer = setTimeout(tick, 100);
        return () => clearTimeout(timer);
    }, [strings, reduce]);

    return (
        <span>
            {reduce ? strings[0] : text}
            <motion.span
                aria-hidden="true"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
            >
                |
            </motion.span>
        </span>
    );
}
