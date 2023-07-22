import YellowButton from '@/shared/YellowButton/YellowButton';
import styles from './Page404.module.scss';

const Page404 = () => {
	return (
		<div className={styles.page404}>
			<h2 className={styles.title}>Страница не найдена</h2>
			<YellowButton text='Перейти на главную' to='/' size='big' round='round' />
		</div>
	);
};

export default Page404;
