import styles from './BlueButton.module.scss';
import { Link } from 'react-router-dom';

type BlueButtonProps = {
	text: string;
	to: string;
	callback: () => void;
};

const BlueButton = ({ text, to, callback }: BlueButtonProps) => {
	return (
		<div className={styles.buttonWrapper} onClick={callback}>
			<Link to={to} className={styles.button}>
				{text}
			</Link>
		</div>
	);
};

export default BlueButton;
