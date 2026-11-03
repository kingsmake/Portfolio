import Reveal from '@/components/Reveal';
import InfoGrid from '@/components/InfoGrid';
import Image from 'next/image';
import styles from './about.module.css';

export const metadata = { title: 'About | Omkar Tupe' };

const skills = [
    { icon: 'bx-code-alt', title: 'Programming', tags: ['Java', 'Python', 'C', 'C++', 'JavaScript', 'PHP'] },
    { icon: 'bx-layout', title: 'Frontend', tags: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS', 'AngularJS'] },
    { icon: 'bx-server', title: 'Backend', tags: ['Node.js', 'Express.js', 'PHP'] },
    { icon: 'bx-data', title: 'Databases', tags: ['MySQL', 'MongoDB', 'PostgreSQL'] },
    { icon: 'bx-wrench', title: 'Tools', tags: ['Git', 'GitHub', 'VS Code', 'Postman', 'Chart.js', 'Framer Motion'] },
    { icon: 'bx-chip', title: 'AI & Emerging Tech', tags: ['Generative AI', 'Computer Vision', 'YOLOv8', 'Particle Swarm Optimization'] },
];

const achievements = [
    { icon: 'bx-trophy', title: 'Smart India Hackathon', label: 'Internal Level Winner', text: 'Team Leader for the winning team at the internal selection round.' },
    { icon: 'bx-medal', title: 'Aavishkar Competition', label: 'Winner', text: 'Qualified for the next zonal level with an intelligent urban traffic management project.' },
    { icon: 'bx-bulb', title: 'S.T.R.I.D.E.', label: 'Research & Innovation', text: 'Computer vision and swarm intelligence applied to urban traffic and emergency routing.' },
    { icon: 'bx-briefcase', title: 'Cognizant GenC', label: 'Selected', text: 'Selected for a full-time GenC role at Cognizant.' },
];

export default function About() {
    return (
        <>
            <section className={styles.about}>
                <Reveal x={-80} y={0} className={styles.img}>
                    <Image src="/Images/me3.jpeg" alt="Omkar Tupe" width={1024} height={1024} sizes="(min-width: 769px) 35vw, 90vw" />
                </Reveal>

                <Reveal x={80} y={0} className={styles.content}>
                    <h2 className="heading">About <span>Me</span></h2>
                    <h3>MCA Student &amp; Software Developer</h3>
                    <p>
                        I am a passionate software developer and postgraduate computer applications student interested in
                        building practical software solutions, full-stack applications, artificial intelligence and
                        intelligent systems. I enjoy solving real-world problems through technology, exploring new tools
                        and continuously improving my development skills.
                    </p>
                    <p>
                        <span>MCA</span> – Savitribai Phule Pune University (2025 Pattern), Second Year / Semester III
                        <br />
                        <span>BCA</span> – Completed June 2025 | CGPA 7.82/10
                    </p>
                </Reveal>
            </section>

            <section className={styles.skills}>
                <Reveal y={-40}><h2 className="heading">Technical <span>Skills</span></h2></Reveal>
                <InfoGrid items={skills} />
            </section>

            <section className={styles.achievements}>
                <Reveal y={-40}><h2 className="heading">My <span>Achievements</span></h2></Reveal>
                <InfoGrid items={achievements} min="22rem" />
            </section>
        </>
    );
}
