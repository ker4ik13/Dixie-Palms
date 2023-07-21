import styles from './Tour.module.scss';
import YellowButton from '../YellowButton/YellowButton';
import TourType from '@/types/TourType';

type TourProps = {
	tour: TourType;
};

const Tour = ({ tour }: TourProps) => {
	return (
		<div className={styles.tour}>
			<div className={styles.img}>
				<img src={tour.src} alt={tour.title} />
				<p className={styles.price}>{tour.price}</p>
			</div>
			<p className={styles.title}>{tour.title}</p>
			<div className={styles.description}>
				<p className={styles.text}>{tour.description}</p>
				<YellowButton text='Посмотреть' to={`/tours/tour${tour.id}`} />
			</div>
		</div>
	);
};

export default Tour;
