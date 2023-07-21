import styles from './Resorts.module.scss';
import ResortsCardType from '@/types/ResortsCardType';
import ResortsCard from './ResortsCard/ResortsCard';
import bagams from './img/bagams.jpg';
import maldives from './img/maldives.jpg';
import thailand from './img/thailand.jpg';

type ResortsProps = {
	resortsCards: ResortsCardType[];
};

const Resorts = ({ resortsCards }: ResortsProps) => {
	return (
		<>
			<h2 className={styles.title}>Тропические курорты</h2>
			<div className={styles.resorts}>
				<ResortsCard key={resortsCards[0].id} resort={resortsCards[0]} img={bagams} />
				<ResortsCard key={resortsCards[1].id} resort={resortsCards[1]} img={maldives} />
				<ResortsCard key={resortsCards[2].id} resort={resortsCards[2]} img={thailand} />
			</div>
		</>
	);
};

export default Resorts;
