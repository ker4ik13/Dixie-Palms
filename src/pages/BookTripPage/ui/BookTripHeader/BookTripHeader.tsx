import YellowButton from '@/shared/YellowButton/YellowButton';
import styles from './BookTripHeader.module.scss';
import yellowPalm from '@/pages/BlogPage/img/yellow-palms.svg';
import earthIcon from '@/icons/earth-icon.svg';
import infoIcon from '@/icons/info-icon.svg';

const BookTripHeader = () => {
	return (
		<div className='container'>
			<div className={styles.header}>
				<div className={styles.img} />
				<div className={styles.description}>
					<div className={styles.content}>
						<h3 className={styles.title}>Остров Маргарита</h3>
						<div className={styles.textWrapper}>
							<img src={earthIcon} className={styles.icon} />
							<p className={styles.text}>Страна: Венесуэла</p>
						</div>
						<p className={styles.text}>Тур на 7 дней</p>
						<div className={styles.textWrapper}>
							<p className={styles.text}>Информация о туре</p>
							<img src={infoIcon} alt='Информация о туре' className={styles.icon} />
						</div>
						<p className={styles.text}>Отель: "Сунсоль Исла Карибе"</p>
					</div>
					<YellowButton text='Подробнее' to='#' size='medium' />
				</div>
				<img src={yellowPalm} className={styles.yellowPalm} />
			</div>
		</div>
	);
};

export default BookTripHeader;
