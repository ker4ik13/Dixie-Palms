import styles from './FourthBlock.module.scss';
import bg from './img/bgblock.svg';
import greenPalms from './img/green-palms.svg';
import yellowPalms from './img/yellow-palms.svg';

const FourthBlock = () => {
	return (
		<div className={styles.fourth_block} id='about-us'>
			<div className={styles.container}>
				<div className={styles.items}>
					<div className={styles.wrapper}>
						<div className={styles.item}>
							<p className={styles.title}>Опытные специалисты</p>
							<p className={styles.text}>
								Бронирование туров через турагенство позволяет значительно
								сэкономить время на поисках вариантов, на сборе информации и
								ознакомлении с деталями поездки.
							</p>
						</div>
						<div className={styles.item}>
							<p className={styles.title}>Удобство</p>
							<p className={styles.text}>
								Турагентства по тропикам знают все об отдыхе на теплых курортах и
								способны составить для вас идеальный маршрут, учитывая все ваши
								пожелания и возможности.
							</p>
						</div>
					</div>
					<div className={styles.wrapper}>
						<div className={styles.item}>
							<p className={styles.title}>Индивидуальный подход</p>
							<p className={styles.text}>
								Мы ориентированы на творческий и индивидуальный подход к каждому
								клиенту и стремимся удовлетворить все его запросы и потребности.
							</p>
						</div>
						<div className={styles.item}>
							<p className={styles.title}>Профессионализм</p>
							<p className={styles.text}>
								Обращаясь к нам, вы можете рассчитывать на профессиональный подход и
								организацию качественного тура.
							</p>
						</div>
					</div>
				</div>
			</div>
			<img src={bg} className={styles.background} />
			<img src={greenPalms} className={styles.green_palm} />
			<img src={yellowPalms} className={styles.yellow_palm} />
		</div>
	);
};

export default FourthBlock;
