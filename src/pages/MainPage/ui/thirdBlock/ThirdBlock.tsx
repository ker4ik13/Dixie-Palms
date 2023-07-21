import { Link } from 'react-router-dom';
import styles from './ThirdBlock.module.scss';
import tour1 from './img/tour1.jpg';
import tour2 from './img/tour2.jpg';
import YellowButton from '@/shared/ui/seeButton/YellowButton';

const ThirdBlock = () => {
	return (
		<div className={styles.third_block}>
			<div className={styles.container}>
				<div className={styles.column}>
					<div className={styles.tour}>
						<img
							src={tour1}
							alt='Мальдивы'
							className={`${styles.block_img} ${styles.first_img}`}
						/>
						<div className={styles.block_text}>
							<h3 className={styles.block_title}>Тур на Мальдивы</h3>
							<p className={styles.block_description}>
								Цените свои моменты отдыха на полную! Отправляйтесь на Мальдивы –
								настоящую жемчужину Индийского океана, где чистый белый песок и
								кристально-прозрачная вода создадут идеальное настроение для релакса
								и терапии после долгих дней и ночей.
							</p>
							<p className={styles.block_description}>
								Отметьте свой отпуск именно здесь – на экзотических Мальдивах!
							</p>
						</div>
					</div>
					<YellowButton
						text='Посмотреть другие туры'
						to='/guide'
						size='big'
						round='round'
					/>
				</div>
				<div className={styles.border}></div>
				<div className={`${styles.tour} ${styles.second_tour}`}>
					<div className={styles.block_text}>
						<h3 className={styles.block_title}>Тур на Маврикий</h3>
						<p className={styles.block_description}>
							Путешествие на Маврикий - это уникальный опыт, который позволит вам
							насладиться не только кристально чистыми пляжами и бирюзовой водой, но и
							богатством культурных достопримечательностей этого изумительного
							острова.
						</p>
					</div>
					<img src={tour2} alt='Маврикий' className={styles.block_img} />
				</div>
			</div>
		</div>
	);
};

export default ThirdBlock;
