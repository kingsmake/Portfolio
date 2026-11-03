'use client';
import { motion } from 'motion/react';
import ProjectCard from '@/components/ProjectCard';
import styles from './projects.module.css';

const projects = [
    {
        title: 'S.T.R.I.D.E.',
        icon: 'bx-traffic-cone',
        tags: ['Python', 'YOLOv8', 'Computer Vision', 'PSO', 'FastAPI', 'React', 'WebSockets'],
        description:
            "Swarm-based Traffic Routing and Intelligent Density Engine – traffic density analysis, signal optimization and an automated emergency green corridor, built as a research prototype for Nashik's urban traffic challenges.",
    },
    {
        title: 'MCA Connect',
        icon: 'bx-bar-chart-alt-2',
        tags: ['React.js', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Express.js', 'MongoDB', 'Chart.js', 'JWT'],
        description:
            'Digital Outreach & Awareness Platform promoting MCA education – career exploration, MCA journey timeline, quizzes, placement statistics and an admin dashboard.',
        href: 'https://stalwart-kleicha-e1080d.netlify.app',
    },
    {
        title: 'Personal Portfolio',
        icon: 'bx-user-pin',
        tags: ['Next.js', 'React', 'CSS Modules', 'Motion'],
        description: 'Responsive portfolio showcasing my skills, projects, achievements and professional profile.',
        href: 'https://sensational-alfajores-7bc80b.netlify.app',
    },
    {
        title: 'Online Examination System',
        icon: 'bx-edit',
        tags: ['Web Application', 'Admin & Student Roles', 'Auto-evaluation'],
        description:
            'Web-based exam platform where admins manage questions and exams, and students register, attempt exams and receive automatically calculated results.',
    },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };

export default function ProjectList() {
    return (
        <motion.div className={styles.container} variants={container} initial="hidden" animate="show">
            {projects.map((p) => (
                <ProjectCard key={p.title} {...p} />
            ))}
        </motion.div>
    );
}
