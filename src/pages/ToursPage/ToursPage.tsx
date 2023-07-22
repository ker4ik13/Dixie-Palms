import { useEffect } from 'react';
import styles from './ToursPage.module.scss';
import Tours from '@/shared/Tours/Tours';

const ToursPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className='container'>
			<div className={styles.toursPage}>
				<Tours count='all' />
			</div>
		</div>
	);
};

export default ToursPage;
