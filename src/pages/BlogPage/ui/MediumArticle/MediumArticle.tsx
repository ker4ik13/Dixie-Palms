import BlueButton from '@/shared/BlueButton/BlueButton';
import styles from './MediumArticle.module.scss';
type MediumButtonProps = {
	title: string;
	text: string;
	img: string;
	buttonLink: string;
};

const MediumArticle = ({ title, text, img, buttonLink }: MediumButtonProps) => {
	return (
		<div className={styles.mediumArticle}>
			<h2 className={styles.title}>{title}</h2>
			<img src={img} className={styles.img} />
			<div className={styles.content}>
				<p className={styles.text}>{text}</p>
				<BlueButton text='Читать' to={buttonLink} />
			</div>
		</div>
	);
};

export default MediumArticle;
