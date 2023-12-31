import styles from './TourPage.module.scss';
import { getTours } from '@/shared/api/getData';
import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Preloader from '@/widgets/Preloader/Preloader';
import TourHeader from '@/widgets/TourHeader/TourHeader';
import TourType from '@/types/TourType';
import TourDescription from './TourDescription/TourDescription';

const TourPage = () => {
	const { someTour } = useParams();

	const tourId = someTour?.split('');

	const [tour, setTour] = useState<TourType>();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		window.scrollTo(0, 0);
		if (tourId) {
			const asyncGetTours = async () => {
				const response = await getTours(
					`https://64aff776c60b8f941af4f841.mockapi.io/server/tours/${tourId[4]}`,
				);

				if (response.status === 500) {
					setLoading(false);
					setError(true);
				}
				setLoading(false);
				setTour(response);
			};
			asyncGetTours();
		} else {
			setLoading(false);
			setError(true);
		}
	}, [someTour]);

	if (tour) {
		return (
			<div className={styles.tourPage}>
				{loading && <Preloader />}
				{!loading && error && <Navigate to={'/404'} />}
				{!loading && !error && (
					<div className='container'>
						{tour.title2 && tour.description2 && (
							<TourHeader
								tour={tour}
								img={tour.src}
								title={tour.title2}
								description={tour.description2}
								buttonText='Забронировать'
								buttonLink='/book-trip'
							/>
						)}
						{tour.firstDayText && (
							<>
								<p className={styles.tour_description}>Описание тура</p>
								<TourDescription tour={tour} />
							</>
						)}
					</div>
				)}
			</div>
		);
	}
	return <Preloader />;
};

export default TourPage;
