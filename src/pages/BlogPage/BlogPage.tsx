import { useEffect } from 'react';
import styles from './BlogPage.module.scss';
import TourHeader from '@/widgets/TourHeader/TourHeader';
import BigArticle from './ui/BigArticle/BigArticle';

import mavrikiy from './img/mavrikiy.jpg';
import seychelles1 from './img/seychelles1.jpg';
import seychelles2 from './img/seychelles2.jpg';
import car1 from './img/car1.jpg';
import MediumArticle from './ui/MediumArticle/MediumArticle';
import TouristsNotes from './ui/TouristsNotes/TouristsNotes';
import Advice from './ui/Advice/Advice';
import Tour from '@/shared/Tour/Tour';

import hotelsData from '@/mockData/hotels.json';

const BlogPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className={styles.blogPage}>
			<div className='container'>
				<TourHeader
					img={mavrikiy}
					title='Маврикий: Искушение рая - Ваш идеальный отпуск ждет вас!'
					description='Данная статья представляет обзор туристического направления на Маврикий. Автор также обсуждает популярные виды отдыха, включая пляжный отдых, водные виды спорта и экскурсии по природным паркам. Статья также содержит информацию о местных кулинарных традициях и рекомендации по выбору отеля и транспорта. Эта статья предоставляет полезную информацию для тех, кто планирует посетить Маврикий и ищет информацию о туристических возможностях на острове.'
					buttonText='Читать'
					buttonLink='#'
				/>
				<div className={styles.article}>
					<BigArticle
						title='Сказочные Сейшелы: Идеальное путешествие в роскошь и природу'
						text='В данной статье представлен обзор туристического направления на Сейшелы. Вы узнаете о белоснежных пляжах, кристально чистых водах и захватывающей природе этого тропического архипелага. Также представлена информация о роскошных курортах, местной кухне и культурных достопримечательностях. Эта статья поможет вам планировать незабываемый отпуск на Сейшелах и насладиться их уникальной красотой.'
						img1={seychelles2}
						img2={seychelles1}
						buttonLink='#'
					/>
					<MediumArticle
						title='Куба: путешествие в страну рома, сигар и солнца'
						text='Куба - это красивейший остров в Карибском море, который славится своей уникальной культурой, историей и природными достопримечательностями. В статье рассказывается о том, как провести незабываемый отпуск на Кубе, посетив такие места, как Гавана, Варадеро, Тринидад и другие города и курорты. Также в статье описываются лучшие пляжи, национальные парки, музеи и другие интересные места, которые стоит посетить во время путешествия на Кубу.'
						img={car1}
						buttonLink='#'
					/>
				</div>
				<div className={styles.notes}>
					<TouristsNotes />
				</div>
				<Advice />
				<h2 className={styles.title}>Обзор отелей</h2>
				<div className={styles.hotels}>
					<Tour tour={hotelsData[0]} />
					<Tour tour={hotelsData[1]} />
					<Tour tour={hotelsData[2]} />
				</div>
			</div>
		</div>
	);
};

export default BlogPage;
