import styles from './BlueButton.module.scss';
import { Link } from 'react-router-dom';

type BlueButtonProps = {
	text: string;
	to: string;
};

const BlueButton = ({ text, to }: BlueButtonProps) => {
	return (
		<div className={styles.buttonWrapper}>
			<Link to={to} className={styles.button}>
				{text}
			</Link>
		</div>
	);
};

export default BlueButton;
