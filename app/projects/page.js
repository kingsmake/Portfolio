import Reveal from '@/components/Reveal';
import ProjectList from './ProjectList';
import styles from './projects.module.css';

export const metadata = { title: 'Projects | Omkar Tupe' };

export default function Projects() {
    return (
        <section className={styles.portfolio}>
            <Reveal y={-40}>
                <h2 className="heading">Featured <span>Projects</span></h2>
            </Reveal>
            <ProjectList />
        </section>
    );
}
