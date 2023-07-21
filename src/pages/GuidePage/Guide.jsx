import styles from './Guide.module.scss';
import Resorts from './ui/resorts/Resorts';
import Sale from './ui/sale/Sale';
import Tours from './ui/tours/Tours';

import resortsData from '@/serverData/resorts.json';

const GuidePage = () => {
	return (
		<main className={styles.main}>
			<div className='container'>
				<Resorts data={resortsData} />
				<Sale
					title='Роскошная Индонезия'
					description='Подарите себе активное путешествие «Вокруг Бали за 15 дней с отдыхом на пляже».'
					text1='Индонезия - это огромный архипелаг, населенный многими этническими группами, каждая из которых имеет свою уникальную культуру, традиции и языки.'
					text2='Уникальные природные объекты включают в себя огромные вулканы, мангровые леса, невероятные пляжи, а также места для дайвинга и сноркелинга.'
					text3='Индонезийская кухня захватывает все области гастрономического мира.'
				/>
				<Tours />
			</div>
		</main>
	);
};

export default GuidePage;
