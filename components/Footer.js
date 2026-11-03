import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.text}>
                <p>Copyright &copy; 2026 Omkar Tupe | All Rights Reserved.</p>
            </div>
            <div className={styles.iconTop}>
                <a href="#" aria-label="Back to top">
                    <i className="bx bx-up-arrow-alt"></i>
                </a>
            </div>
        </footer>
    );
}
