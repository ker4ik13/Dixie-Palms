import YellowButton from '@/shared/YellowButton/YellowButton';
import styles from './BookTripHeader.module.scss';
import yellowPalm from '@/pages/BlogPage/img/yellow-palms.svg';
import earthIcon from '@/icons/earth-icon.svg';
import infoIcon from '@/icons/info-icon.svg';
import TourType from '@/types/TourType';
import { Link } from 'react-router-dom';

type BookTripHeader = {
	tour: TourType;
};

const BookTripHeader = ({ tour }: BookTripHeader) => {
	return (
		<div className='container'>
			<div className={styles.header}>
				<img src={tour.src} className={styles.img} />
				<div className={styles.description}>
					<div className={styles.content}>
						<h3 className={styles.title}>{tour.title}</h3>
						<div className={styles.textWrapper}>
							<img src={earthIcon} className={styles.icon} />
							<p className={styles.text}>Страна: {tour.country}</p>
						</div>
						{tour.tourDays && +tour.tourDays === 1 && (
							<p className={styles.text}>Тур на {tour.tourDays} день</p>
						)}
						{tour.tourDays && +tour.tourDays <= 4 && (
							<p className={styles.text}>Тур на {tour.tourDays} дня</p>
						)}
						{tour.tourDays && +tour.tourDays >= 5 && (
							<p className={styles.text}>Тур на {tour.tourDays} дней</p>
						)}
						<Link to={`/tours/tour${tour.id}`} className={styles.tourLink}>
							<p className={styles.text}>Информация о туре</p>
							<img src={infoIcon} alt='Информация о туре' className={styles.icon} />
						</Link>
						<p className={styles.text}>Отель: "{tour.hotel}"</p>
					</div>
					<YellowButton text='Подробнее' to={`/tours/tour${tour.id}`} size='medium' />
				</div>
				<img src={yellowPalm} className={styles.yellowPalm} />
			</div>
		</div>
	);
};

export default BookTripHeader;
