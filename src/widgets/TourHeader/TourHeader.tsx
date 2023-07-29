import styles from './TourHeader.module.scss';
import BlueButton from '@/shared/BlueButton/BlueButton';
import palm from '@/widgets/Header/img/blue-palms.svg';
import { useDispatch } from 'react-redux';
import { addBookTrip } from '@/store/bookedTrips.slice';
import TourType from '@/types/TourType';

type TourHeaderProps = {
	tour?: TourType;
	img: string;
	title: string;
	description: string;
	buttonText: string;
	buttonLink: string;
};

const TourHeader = ({ tour, img, title, description, buttonText, buttonLink }: TourHeaderProps) => {
	const dispatch = useDispatch();

	const addTrip = () => dispatch(addBookTrip(tour));
	return (
		<header className={styles.header}>
			<img src={img} alt={title} className={styles.img} />
			<div className={styles.header_text}>
				<h1 className={styles.header__title}>{title}</h1>
				<p className={styles.header__subtitle}>{description}</p>
				<BlueButton text={buttonText} to={buttonLink} callback={addTrip} />
			</div>
			<div className={styles.header__ellipse}></div>
			<img src={palm} className={styles.palm} />
		</header>
	);
};

export default TourHeader;
