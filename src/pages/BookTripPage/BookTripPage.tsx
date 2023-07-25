import TripForm from '@/entities/TripForm/TripForm';
import styles from './BookTripPage.module.scss';
import BookTripHeader from './ui/BookTripHeader/BookTripHeader';
import { useSelector } from 'react-redux';
import YellowButton from '@/shared/YellowButton/YellowButton';

const BookTripPage = () => {
	const bookedTrip = useSelector((state) => state.bookTrip.bookedTrip);

	if (!bookedTrip[0]) {
		return (
			<div className={styles.bookTrip}>
				<div className={styles.wrapper}>
					<h2 className={styles.title}>Выберите тур</h2>
					<YellowButton text='Все туры' to='/tours' size='big' />
				</div>
			</div>
		);
	}

	if (bookedTrip[0]) {
		return (
			<div className={styles.bookTrip}>
				<h2 className={styles.title}>Оформление поездки</h2>
				<BookTripHeader tour={bookedTrip[0]} />
				<h3 className={styles.title}>Забронировать билет</h3>
				<TripForm />
			</div>
		);
	}
};

export default BookTripPage;
