import styles from './YellowButton.module.scss';
import { Link } from 'react-router-dom';

const YellowButton = (props) => {
	return (
		<>
			{!props.size && (
				<Link to={props.to} className={styles.button}>
					{props.text}
				</Link>
			)}
			{props.size === 'medium' && !props.round && (
				<Link to={props.to} className={`${styles.button} ${styles.medium}`}>
					{props.text}
				</Link>
			)}
			{props.size === 'big' && !props.round && (
				<Link to={props.to} className={`${styles.button} ${styles.big}`}>
					{props.text}
				</Link>
			)}
			{props.size === 'medium' && props.round === 'round' && (
				<Link to={props.to} className={`${styles.button} ${styles.medium} ${styles.round}`}>
					{props.text}
				</Link>
			)}
			{props.size === 'big' && props.round === 'round' && (
				<Link to={props.to} className={`${styles.button} ${styles.big} ${styles.round}`}>
					{props.text}
				</Link>
			)}
		</>
	);
};

export default YellowButton;
