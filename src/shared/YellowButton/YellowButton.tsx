import { Link } from 'react-router-dom';
import styles from './YellowButton.module.scss';

type YellowButtonProps = {
	text: string;
	to: string;
	size?: string;
	round?: string;
};

const YellowButton = ({ text, to, size, round }: YellowButtonProps) => {
	const isBig = size === 'big' ? true : false;
	const isMedium = size === 'medium' ? true : false;
	const isRound = round === 'round' ? true : false;

	return (
		<>
			{!size && (
				<Link to={to} className={styles.button}>
					{text}
				</Link>
			)}
			{isMedium && !isRound && (
				<Link to={to} className={`${styles.button} ${styles.medium}`}>
					{text}
				</Link>
			)}
			{isBig && !isRound && (
				<Link to={to} className={`${styles.button} ${styles.big}`}>
					{text}
				</Link>
			)}
			{isMedium && isRound && (
				<Link to={to} className={`${styles.button} ${styles.medium} ${styles.round}`}>
					{text}
				</Link>
			)}
			{isBig && isRound && (
				<Link to={to} className={`${styles.button} ${styles.big} ${styles.round}`}>
					{text}
				</Link>
			)}
		</>
	);
};

export default YellowButton;
