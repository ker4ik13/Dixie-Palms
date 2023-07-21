import styles from './ToursPage.module.scss';
import Tours from '@/shared/Tours/Tours';

const ToursPage = () => {
	return (
		<div className='container'>
			<div className={styles.toursPage}>
				<Tours count='all' />
			</div>
		</div>
	);
};

export default ToursPage;
