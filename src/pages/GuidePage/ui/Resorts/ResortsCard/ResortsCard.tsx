import ResortsCardType from '@/types/ResortsCardType';
import styles from './ResortsCard.module.scss';
import YellowButton from '@/shared/YellowButton/YellowButton';

type ResortsCardProps = {
	resort: ResortsCardType;
	img: string;
};

const ResortsCard = ({ resort, img }: ResortsCardProps) => {
	return (
		<div className={styles.card}>
			<div className={styles.img_wrapper}>
				<p className={styles.card_price}>{resort.price}</p>
				<img src={img} className={styles.img} />
			</div>
			<p className={styles.card_title}>{resort.title}</p>
			<div className={styles.description}>
				<p className={styles.description_title}>{resort.descriptionTitle}</p>
				<p className={styles.description_text}>{resort.descriptionText}</p>
				<div className={styles.button_wrapper}>
					<YellowButton text='Посмотреть' to={`/tours/tour${resort.id}`} />
				</div>
			</div>
		</div>
	);
};

export default ResortsCard;
