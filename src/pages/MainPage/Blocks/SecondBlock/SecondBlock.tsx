import { Link } from 'react-router-dom';
import styles from './SecondBlock.module.scss';
import island from './img/island.png';

const SecondBlock = () => {
	return (
		<div className={styles.second_block}>
			<div className={styles.second_block__wrapper}>
				<div className={styles.second_block__text}>
					<h2 className={styles.second_block__title}>
						Преимущества туризма на тропических островах
					</h2>
					<p className={styles.second_block__subtitle}>
						Тропические острова это красивая и экзотическая природа с уникальной флорой
						и фауной, песчаными пляжами и голубым морем. Такой климат окутывает
						путешественника теплом и создает полную релаксации атмосферу.
					</p>
					<p className={styles.second_block__subtitle}>
						Не менее важный фактор - возможность погрузиться в местную культуру,
						познакомиться с традициями и кухней местных жителей, посетить
						достопримечательности и музеи. В общем, туризм на тропических островах
						позволяет не только весело скоротать время, но и расширить свой кругозор и
						познать новые края и культуры.
					</p>
				</div>
				<div className={styles.second_block__sale}>
					<div className={styles.second_block__sale__decoration}></div>
					<p className={styles.second_block__sale__text}>
						Тропические острова ждут тебя! Скидка 15% на все туры в Таиланд, Филиппины и
						Бали с бесплатным трансфером из аэропорта и проживанием в отелях высокого
						уровня!
					</p>
					<Link to='/guide' className={styles.second_block__sale__button}>
						Забронировать поезку
					</Link>
				</div>
			</div>
			<img src={island} className={styles.second_block__island} />
		</div>
	);
};

export default SecondBlock;
