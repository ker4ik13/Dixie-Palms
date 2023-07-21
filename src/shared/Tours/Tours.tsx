import { useEffect, useState } from 'react';
import styles from './Tours.module.scss';
import Tour from '@/shared/Tour/Tour';
import YellowButton from '@/shared/YellowButton/YellowButton';
import Preloader from '@/widgets/Preloader/Preloader';

import TourType from '@/types/TourType';
import { getTours } from '@/shared/api/getData';

type ToursProps = {
	count: string;
};

const Tours = ({ count }: ToursProps) => {
	const [tours, setTours] = useState<TourType[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getAsyncTours = async () => {
			const response = await getTours(
				'https://64aff776c60b8f941af4f841.mockapi.io/server/tours',
			);

			setLoading(false);
			setTours(response);
		};
		getAsyncTours();
	}, []);

	return (
		<>
			<h2 className={styles.title}>Все туры и страны</h2>
			<div className={styles.tours}>
				<div className={styles.wrapper}>
					{loading && <Preloader />}
					{count === 'three' && !loading && (
						<>
							<Tour tour={tours[0]} />
							<Tour tour={tours[1]} />
							<Tour tour={tours[2]} />
						</>
					)}
					{count === 'all' && tours.map((tour) => <Tour key={tour.id} tour={tour} />)}
				</div>
				{count === 'three' && (
					<YellowButton text='Посмотреть другие туры' size='medium' to='/tours' />
				)}
			</div>
		</>
	);
};

export default Tours;
