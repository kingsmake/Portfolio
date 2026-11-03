import Reveal from './Reveal';
import styles from './InfoGrid.module.css';

// Grid of icon cards used for skills (tags) and achievements (label + text).
export default function InfoGrid({ items, min = '30rem' }) {
    return (
        <Reveal>
            <div className={styles.container} style={{ '--card-min': min }}>
                {items.map((item) => (
                    <div className={styles.box} key={item.title}>
                        <i className={`bx ${item.icon}`}></i>
                        <h3>{item.title}</h3>
                        {item.tags && (
                            <div className={`tags ${styles.tags}`}>
                                {item.tags.map((t) => (
                                    <span key={t}>{t}</span>
                                ))}
                            </div>
                        )}
                        {item.text && (
                            <p>
                                <span>{item.label}</span>
                                <br />
                                {item.text}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </Reveal>
    );
}
