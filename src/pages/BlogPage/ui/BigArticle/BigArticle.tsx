import BlueButton from '@/shared/BlueButton/BlueButton';
import styles from './BigArticle.module.scss';

type BigArticleProps = {
	title: string;
	text: string;
	img1: string;
	img2: string;
	buttonLink: string;
};

const BigArticle = ({ title, text, img1, img2, buttonLink }: BigArticleProps) => {
	return (
		<div className={styles.bigArticle}>
			<h2 className={styles.title}>{title}</h2>
			<div className={styles.content}>
				<div className={styles.column}>
					<p className={styles.text}>{text}</p>
					<BlueButton text='Читать' to={buttonLink} />
				</div>
				<div className={styles.column}>
					<img src={img1} className={styles.img1} />
				</div>
			</div>
			<img src={img2} className={styles.img2} />
		</div>
	);
};

export default BigArticle;
