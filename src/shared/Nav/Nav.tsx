import styles from './Nav.module.scss';
import { NavLink } from 'react-router-dom';
import { callNav } from './callNav';

const Nav = () => {
	return (
		<div className='container'>
			<div className={styles.wrapper}>
				<nav className={`${styles.nav}`}>
					<NavLink to='/' className={styles.nav__link}>
						Главная
					</NavLink>
					<NavLink to='/tours' className={styles.nav__link}>
						Все туры
					</NavLink>
					<NavLink to='/guide' className={styles.nav__link}>
						Путеводитель
					</NavLink>
					<NavLink to='/book-trip' className={styles.nav__link}>
						Онлайн - бронирование
					</NavLink>
					<NavLink href='#' className={styles.nav__link}>
						Акции
					</NavLink>
					<NavLink to='/blog' className={styles.nav__link}>
						Блог
					</NavLink>
					<NavLink href='#' className={styles.nav__link}>
						Контакты
					</NavLink>
				</nav>
				<div className={styles.burger} onClick={(event) => callNav(event, styles)}>
					<span></span>
				</div>
			</div>
		</div>
	);
};

export default Nav;
