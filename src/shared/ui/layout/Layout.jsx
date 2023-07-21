import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';
import Nav from '../nav/Nav';
import clouds from '@/pages/MainPage/img/clouds.png';
import Footer from '@/widgets/footer/Footer';

const Layout = () => {
	return (
		<div className={styles.page}>
			<Nav className={'styles.nav'} />
			<img src={clouds} className={styles.page_cloud} />

			<Outlet />

			<Footer />
		</div>
	);
};

export default Layout;
