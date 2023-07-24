import TripForm from '@/entities/TripForm/TripForm';
import styles from './BookTripPage.module.scss';
import BookTripHeader from './ui/BookTripHeader/BookTripHeader';

const BookTripPage = () => {
	return (
		<div className={styles.bookTrip}>
			<h2 className={styles.title}>Оформление поездки</h2>
			<BookTripHeader />
			<h3 className={styles.title}>Забронировать билет</h3>
			<TripForm />
		</div>
	);
};

export default BookTripPage;
