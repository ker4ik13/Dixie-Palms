import styles from './Nav.module.scss';
import { NavLink } from 'react-router-dom';
import { callNav } from './callNav.js';

const Nav = () => {
	return (
		<div className='container'>
			<div className={styles.wrapper}>
				<nav className={`${styles.nav}`}>
					<NavLink to='/' className={styles.nav__link}>
						Главная
					</NavLink>
					<NavLink to='/#about-us' className={styles.nav__link}>
						О нас
					</NavLink>
					<NavLink to='/guide' className={styles.nav__link}>
						Путеводитель
					</NavLink>
					<NavLink href='#' className={styles.nav__link}>
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
