import { useEffect } from 'react';
import styles from './Tours.module.scss';
import Tour from '@/shared/ui/tour/Tour';
import YellowButton from '@/shared/ui/seeButton/YellowButton';

import { useDispatch, useSelector } from 'react-redux';
import { fetchTours } from '@/store/tours/tours.slice';
import Preloader from '@/widgets/Preloader/Preloader';

const Tours = () => {
	const tours = useSelector((state) => state.tours.tours);
	console.log(tours);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchTours());
	}, [dispatch]);

	return (
		<>
			<h2 className={styles.title}>Все туры и страны</h2>
			<div className={styles.tours}>
				<div className={styles.wrapper}>
					{tours.length === 0 && <Preloader />}
					{tours.map((tour) => (
						<Tour key={tour.id} item={tour} />
					))}
				</div>
				<YellowButton text='Посмотреть другие туры' size='medium' to='/tours' />
			</div>
		</>
	);
};

export default Tours;
