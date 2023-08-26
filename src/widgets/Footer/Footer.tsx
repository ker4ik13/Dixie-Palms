import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.column}>
					<p className={styles.name}>Dixie Palms</p>
					<p className={styles.copyright}>© Dixie Palms 2023, All rights reserved</p>
				</div>
				<div className={styles.column}>
					<Link to='/' className={styles.link}>
						Главная
					</Link>
					<Link to='/tours' className={styles.link}>
						Все туры
					</Link>
					<Link to='/guide' className={styles.link}>
						Путеводитель
					</Link>
					<Link to='/book-trip' className={styles.link}>
						Онлайн - бронирование
					</Link>
					<Link to='#' className={styles.link}>
						Акции
					</Link>
					<Link to='/blog' className={styles.link}>
						Блог
					</Link>
					<Link to='#' className={styles.link}>
						Контакты
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
