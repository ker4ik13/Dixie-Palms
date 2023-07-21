import styles from "./styles/footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <p className={styles.name}>Dixie Palms</p>
                    <p className={styles.copyright}>© Dixie Palms 2023, All rights reserved</p>
                </div>
                <div className={styles.column}>
                    <Link to="/" className={styles.link}>Главная</Link>
                    <Link href="#" className={styles.link}>О нас</Link>
                    <Link to="/guide" className={styles.link}>Путеводитель</Link>
                    <Link href="#" className={styles.link}>Онлайн - бронирование</Link>
                    <Link href="#" className={styles.link}>Акции</Link>
                    <Link href="#" className={styles.link}>Блог</Link>
                    <Link href="#" className={styles.link}>Контакты</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer