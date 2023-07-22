import styles from './TouristsNotes.module.scss';
import bluePalm from '../../img/blue-palms.svg';
import yellowPalm from '../../img/yellow-palms.svg';

const TouristsNotes = () => {
	return (
		<div className={styles.TouristsNotes}>
			<h3 className={styles.title}>Заметки туристов</h3>
			<div className={styles.notes}>
				<ul className={styles.noteList}>
					<p className={styles.noteTitle}>Мадагаскар:</p>
					<li className={styles.note}>
						Посетите национальный парк Андасибе-Мантецца, чтобы увидеть множество
						местных видов лемуров и других диких животных.
					</li>
					<li className={styles.note}>
						Исследуйте флору и фауну реки Цинтрускилаки, где можно увидеть редкие виды
						крокодилов и птиц.
					</li>
					<li className={styles.note}>
						Попробуйте мадагаскарскую кухню, в которой представлен большой выбор рыбных
						блюд и блюд из мяса.
					</li>
				</ul>
				<ul className={styles.noteList}>
					<p className={styles.noteTitle}>Индонезия:</p>
					<li className={styles.note}>
						Насладитесь красотами Бали, особенно храмом Улун-Дану-Братан, Водопадом
						Тегенунган и рисовыми террасами Тегалаланг.
					</li>
					<li className={styles.note}>
						Посетите храм Боробудур, самую большую буддистскую строительную композицию в
						мире.
					</li>
					<li className={styles.note}>
						Проведите выходные на высоте в Калима-вулькане, где можно заняться горным
						туризмом или просто помедитировать в окружении природы.
					</li>
				</ul>
			</div>
			<img src={bluePalm} className={styles.bluePalm} />
			<img src={yellowPalm} className={styles.yellowPalm} />
		</div>
	);
};

export default TouristsNotes;
