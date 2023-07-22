import styles from './TourHeader.module.scss';
import BlueButton from '@/shared/BlueButton/BlueButton';
import palm from '@/widgets/Header/img/blue-palms.svg';

type TourHeaderProps = {
	img: string;
	title: string;
	description: string;
	buttonText: string;
	buttonLink: string;
};

const TourHeader = ({ img, title, description, buttonText, buttonLink }: TourHeaderProps) => {
	return (
		<header className={styles.header}>
			<img src={img} alt={title} className={styles.img} />
			<div className={styles.header_text}>
				<h1 className={styles.header__title}>{title}</h1>
				<p className={styles.header__subtitle}>{description}</p>
				<BlueButton text={buttonText} to={buttonLink} />
			</div>
			<div className={styles.header__ellipse}></div>
			<img src={palm} className={styles.palm} />
		</header>
	);
};

export default TourHeader;
