import styles from './TourDescription.module.scss';
import bluePalm from '@/widgets/Header/img/blue-palms.svg';
import realPalm from './img/realPalm.png';
import TourType from '@/types/TourType';

const TourDescription = ({ tour }: TourType) => {
	return (
		<div className={styles.TourDescription}>
			<div className={styles.firstRow}>
				<div className={styles.firstDay}>
					<p className={styles.title}>Первый день</p>
					<img src={tour.firstDayImg} className={styles.img} />
					<p className={styles.description}>{tour.firstDayText}</p>
					<img src={bluePalm} className={styles.bluePalm} />
				</div>
				<div className={styles.secondDay}>
					<p className={styles.title}>Второй день</p>
					<p className={styles.description}>{tour.secondDayText}</p>
					<img src={tour.secondDayImg} className={styles.img} />
				</div>
			</div>

			{tour.thirdDayText && (
				<div className={styles.thirdDay}>
					<div className={styles.thirdDay_wrapper}>
						<p className={styles.title}>Третий день</p>
						<p className={styles.description}>{tour.thirdDayText}</p>
						{tour.fourthDayText && (
							<>
								<p className={styles.title}>Четвертый день</p>
								<p className={styles.description}>{tour.fourthDayText}</p>
								<img src={realPalm} className={styles.realPalm} />
							</>
						)}
						{tour.fifthDayText && (
							<>
								<p className={styles.title}>Пятый день</p>
								<p className={styles.description}>{tour.fifthDayText}</p>
							</>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default TourDescription;
