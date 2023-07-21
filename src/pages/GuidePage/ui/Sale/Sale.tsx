import styles from './Sale.module.scss';
import indonesia from './img/indonesia.jpg';
import YellowButton from '@/shared/YellowButton/YellowButton';

type SaleProps = {
	title: string;
	description: string;
	text1: string;
	text2: string;
	text3: string;
	to: string;
};

const Sale = ({ title, description, text1, text2, text3, to }: SaleProps) => {
	return (
		<div className={styles.sale}>
			<div className={styles.card}>
				<img src={indonesia} className={styles.img} />
				<div className={styles.text}>
					<h3 className={styles.title}>{title}</h3>
					<p className={styles.description}>{description}</p>
					<YellowButton text='Посмотреть' to={to} />
				</div>
				<div className={styles.about}>
					<p className={styles.about_text}>{text1}</p>
					<p className={styles.about_text}>{text2}</p>
					<p className={styles.about_text}>{text3}</p>
				</div>
			</div>
		</div>
	);
};

export default Sale;
