import { Link } from 'react-router-dom';
import styles from './header.module.scss';
import airplane from './img/airplane.png';
import palms from './img/blue-palms.svg';

const Header = () => {
	return (
		<div className='container'>
			<header className={styles.header}>
				<div className={styles.header__ellipse}></div>
				<img src={airplane} className={styles.header__airplane} />
				<img src={palms} className={styles.header__palms} />
				<div className={styles.header_text}>
					<h1 className={styles.header__title}>
						Dixie Palms - агенство специализируемся на организации экзотических
						путешествий в самые живописные и экзотические уголки мира
					</h1>
					<p className={styles.header__subtitle}>
						Путешествия по тропическим странам - это не только возможность насладиться
						незабываемыми видами, но и открыть для себя новые культуры, традиции и
						кухни.
					</p>
					<Link to='/guide' className={styles.header__button}>
						Оформить билеты
					</Link>
				</div>
			</header>
		</div>
	);
};

export default Header;
