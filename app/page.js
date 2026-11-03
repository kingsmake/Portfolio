import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Typewriter from '@/components/Typewriter';
import SocialLinks from '@/components/SocialLinks';
import FloatImage from '@/components/FloatImage';
import styles from './page.module.css';

const roles = ['MCA Student.', 'Software Developer.', 'Full-Stack Developer.', 'AI & Technology Enthusiast.'];

export default function Home() {
    return (
        <section className={styles.home}>
            <Reveal y={-40} className={styles.content}>
                <h3>Hello, It&apos;s Me</h3>
                <h1>Omkar Tupe</h1>
                <h3>
                    And I&apos;m a <Typewriter strings={roles} />
                </h3>
                <p>
                    MCA student and full-stack developer building practical software, with a focus on
                    artificial intelligence, computer vision and intelligent systems.
                </p>
                <SocialLinks />
                <Link href="/projects" className="btn">View Projects</Link>
            </Reveal>

            <Reveal y={60} className={styles.img}>
                <FloatImage src="/Images/me2.png" alt="Omkar Tupe" width={1024} height={1024} priority />
            </Reveal>
        </section>
    );
}
