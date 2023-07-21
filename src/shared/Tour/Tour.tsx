import styles from './Tour.module.scss';
import YellowButton from '../YellowButton/YellowButton';

const Tour = ({ item }) => {
	return (
		<div className={styles.tour}>
			<div className={styles.img}>
				<img src={item.src} alt={item.title} />
				<p className={styles.price}>{item.price}</p>
			</div>
			<p className={styles.title}>{item.title}</p>
			<div className={styles.description}>
				<p className={styles.text}>{item.description}</p>
				<YellowButton text='Посмотреть' to={`/tour${item.id}`} />
			</div>
		</div>
	);
};

export default Tour;
