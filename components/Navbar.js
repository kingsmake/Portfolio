'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const onScroll = () => setSticky(window.scrollY > 100);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header className={`${styles.header} ${sticky ? styles.sticky : ''}`}>
            <Link href="/" className={styles.logo} onClick={() => setOpen(false)}>
                Omkar Tupe
            </Link>

            <button
                type="button"
                className={styles.menuIcon}
                aria-label="Toggle menu"
                aria-expanded={open}
                onClick={() => setOpen(!open)}
            >
                <i className={`bx ${open ? 'bx-x' : 'bx-menu'}`}></i>
            </button>

            <nav className={`${styles.navbar} ${open ? styles.open : ''}`}>
                {links.map((l) => (
                    <Link
                        key={l.href}
                        href={l.href}
                        className={pathname === l.href ? styles.active : ''}
                        onClick={() => setOpen(false)}
                    >
                        {l.label}
                    </Link>
                ))}
            </nav>
        </header>
    );
}
