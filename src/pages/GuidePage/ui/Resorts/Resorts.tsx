import { useEffect, useState } from 'react';
import styles from './Resorts.module.scss';
import ResortsCard from './ui/ResortsCard';
import bagams from './img/bagams.jpg';
import maldives from './img/maldives.jpg';
import thailand from './img/thailand.jpg';

const Resorts = (props) => {
	const [resorts, setResorts] = useState([]);

	useEffect(() => {
		setResorts(props.data);
	});

	return (
		<>
			<h2 className={styles.title}>Тропические курорты</h2>
			<div className={styles.resorts}>
				{resorts.map((resort) => (
					<ResortsCard key={resort.id} item={resort} img={bagams} />
				))}
			</div>
		</>
	);
};

export default Resorts;
