import Tour from '@/shared/Tour/Tour';
import styles from './TourPage.module.scss';
import { getTours } from '@/shared/api/getData';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Preloader from '@/widgets/Preloader/Preloader';
import TourHeader from '@/widgets/TourHeader/TourHeader';
import TourType from '@/types/TourType';
import TourDescription from './TourDescription/TourDescription';

const TourPage = () => {
	const { someTour } = useParams();
	const tourId = someTour?.split('');

	const [tour, setTour] = useState<TourType>();

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		window.scrollTo(0, 0);
		const asyncGetTours = async () => {
			const response = await getTours(
				`https://64aff776c60b8f941af4f841.mockapi.io/server/tours/${tourId[4]}`,
			);

			setLoading(false);
			setTour(response);
		};
		asyncGetTours();
	}, []);

	return (
		<div className={styles.tourPage}>
			{loading && <Preloader />}
			{!loading && (
				<div className='container'>
					<TourHeader
						img={tour.src}
						title={tour.title2}
						description={tour.description2}
					/>
					<p className={styles.tour_description}>Описание тура</p>
					<TourDescription tour={tour} />
				</div>
			)}
		</div>
	);
};

export default TourPage;
