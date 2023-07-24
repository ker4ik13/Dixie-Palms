import styles from './TripForm.module.scss';
import airplaneIcon from '@/icons/airplane-icon.svg';
import addIcon from '@/icons/plus-icon.svg';
import { Link } from 'react-router-dom';
import linkIcon from '@/icons/link-icon.svg';
import { SubmitHandler, useForm } from 'react-hook-form';

const TripForm = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
		watch,
		setError,
		getValues,
	} = useForm({
		mode: 'onBlur',
	});

	const handleDate = () => {
		// if (getValues('typeOfFly') === 'twoWay' && getValues('dateBack') === '') {
		// 	setError('dateBack', {
		// 		type: 'dateBackUndefined',
		// 		message: 'Введите дату возвращения',
		// 	});
		// 	return false;
		// }

		const dateThere = getValues('dateThere').split('-');
		const dateBack = getValues('dateBack').split('-');
		const dateThereInSeconds = new Date(dateThere[0], dateThere[1], dateThere[2]).getTime();
		const dateBackInSeconds = new Date(dateBack[0], dateBack[1], dateBack[2]).getTime();

		if (dateBackInSeconds < dateThereInSeconds || dateBackInSeconds === dateThereInSeconds) {
			setError('dateBack', {
				type: 'dateBackError',
				message: 'Введите корректную дату',
			});
			return false;
		}
		return true;
	};

	const onSubmit = (data: object) => {
		const isDateWithoutError = handleDate();

		if (isDateWithoutError) {
			console.log(data);

			// alert(JSON.stringify(data));
		}
	};

	return (
		<div className='container'>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.departure}>
					<div className={styles.checkboxWrapper}>
						<div>
							<input
								type='radio'
								id='twoWay'
								className={styles.radio}
								value='twoWay'
								{...register('typeOfFly', {
									required: 'Выберите одно из значений',
								})}
							/>
							<label htmlFor='twoWay' className={styles.checkboxLabel}>
								Туда и обратно
							</label>
						</div>
						<div>
							<input
								type='radio'
								className={styles.radio}
								id='oneWay'
								value='oneWay'
								{...register('typeOfFly', {
									required: 'Выберите одно из значений',
								})}
							/>
							<label htmlFor='oneWay' className={styles.checkboxLabel}>
								Только туда
							</label>
						</div>
						{errors.typeOfFly && (
							<p className={styles.error}>{errors?.typeOfFly?.message}</p>
						)}
					</div>
					<div className={styles.dateWrapper}>
						<div className={styles.inputWrapper}>
							<label htmlFor='departureCity' className={styles.labelForInput}>
								Город вылета
							</label>
							<select
								className={styles.select}
								id='departureCity'
								placeholder='Выбрать город'
								{...register('departureCity', {
									required: 'Выберите город вылета',
								})}
							>
								<option value='Москва'>Москва</option>
								<option value='Санкт-Петербург'>Санкт-Петербург</option>
								<option value='Пенза'>Пенза</option>
								<option value='Абакан'>Абакан</option>
								<option value='Азов'>Азов</option>
								<option value='Александров'>Александров</option>
								<option value='Алексин'>Алексин</option>
								<option value='Альметьевск'>Альметьевск</option>
								<option value='Анапа'>Анапа</option>
								<option value='Ангарск'>Ангарск</option>
								<option value='Анжеро'>Анжеро-Судженск</option>
								<option value='Апатиты'>Апатиты</option>
								<option value='Арзамас'>Арзамас</option>
								<option value='Армавир'>Армавир</option>
								<option value='Арсеньев'>Арсеньев</option>
								<option value='Артем'>Артем</option>
								<option value='Архангельск'>Архангельск</option>
								<option value='Асбест'>Асбест</option>
								<option value='Астрахань'>Астрахань</option>
								<option value='Ачинск'>Ачинск</option>
								<option value='Балаково'>Балаково</option>
								<option value='Балахна'>Балахна</option>
								<option value='Балашиха'>Балашиха</option>
								<option value='Балашов'>Балашов</option>
								<option value='Барнаул'>Барнаул</option>
								<option value='Батайск'>Батайск</option>
								<option value='Белгород'>Белгород</option>
								<option value='Белебей'>Белебей</option>
								<option value='Белово'>Белово</option>
								<option value='Белогорск (Амурская область)'>
									Белогорск (Амурская область)
								</option>
								<option value='Белорецк'>Белорецк</option>
								<option value='Белореченск'>Белореченск</option>
								<option value='Бердск'>Бердск</option>
								<option value='Березники'>Березники</option>
								<option value='Березовский (Свердловская область)'>
									Березовский (Свердловская область)
								</option>
								<option value='Бийск'>Бийск</option>
								<option value='Биробиджан'>Биробиджан</option>
								<option value='Благовещенск (Амурская область)'>
									Благовещенск (Амурская область)
								</option>
								<option value='Бор'>Бор</option>
								<option value='Борисоглебск'>Борисоглебск</option>
								<option value='Боровичи'>Боровичи</option>
								<option value='Братск'>Братск</option>
								<option value='Брянск'>Брянск</option>
								<option value='Бугульма'>Бугульма</option>
								<option value='Буденновск'>Буденновск</option>
								<option value='Бузулук'>Бузулук</option>
								<option value='Буйнакск'>Буйнакск</option>
								<option value='Великие Луки'>Великие Луки</option>
								<option value='Великий Новгород'>Великий Новгород</option>
								<option value='Верхняя Пышма'>Верхняя Пышма</option>
								<option value='Видное'>Видное</option>
								<option value='Владивосток'>Владивосток</option>
								<option value='Владикавказ'>Владикавказ</option>
								<option value='Владимир'>Владимир</option>
								<option value='Волгоград'>Волгоград</option>
								<option value='Волгодонск'>Волгодонск</option>
								<option value='Волжск'>Волжск</option>
								<option value='Волжский'>Волжский</option>
								<option value='Вологда'>Вологда</option>
								<option value='Вольск'>Вольск</option>
								<option value='Воркута'>Воркута</option>
								<option value='Воронеж'>Воронеж</option>
								<option value='Воскресенск'>Воскресенск</option>
								<option value='Воткинск'>Воткинск</option>
								<option value='Всеволожск'>Всеволожск</option>
								<option value='Выборг'>Выборг</option>
								<option value='Выкса'>Выкса</option>
								<option value='Вязьма'>Вязьма</option>
								<option value='Гатчина'>Гатчина</option>
								<option value='Геленджик'>Геленджик</option>
								<option value='Георгиевск'>Георгиевск</option>
								<option value='Глазов'>Глазов</option>
								<option value='Горно-Алтайск'>Горно-Алтайск</option>
								<option value='Грозный'>Грозный</option>
								<option value='Губкин'>Губкин</option>
								<option value='Гудермес'>Гудермес</option>
								<option value='Гуково'>Гуково</option>
								<option value='Гусь-Хрустальный'>Гусь-Хрустальный</option>
								<option value='Дербент'>Дербент</option>
								<option value='Дзержинск'>Дзержинск</option>
								<option value='Димитровград'>Димитровград</option>
								<option value='Дмитров'>Дмитров</option>
								<option value='Долгопрудный'>Долгопрудный</option>
								<option value='Домодедово'>Домодедово</option>
								<option value='Донской'>Донской</option>
								<option value='Дубна'>Дубна</option>
								<option value='Евпатория'>Евпатория</option>
								<option value='Егорьевск'>Егорьевск</option>
								<option value='Ейск'>Ейск</option>
								<option value='Екатеринбург'>Екатеринбург</option>
								<option value='Елабуга'>Елабуга</option>
								<option value='Елец'>Елец</option>
								<option value='Ессентуки'>Ессентуки</option>
								<option value='Железногорск (Красноярский край)'>
									Железногорск (Красноярский край)
								</option>
								<option value='Железногорск (Курская область)'>
									Железногорск (Курская область)
								</option>
								<option value='Жигулевск'>Жигулевск</option>
								<option value='Жуковский'>Жуковский</option>
								<option value='Заречный'>Заречный</option>
								<option value='Зеленогорск'>Зеленогорск</option>
								<option value='Зеленодольск'>Зеленодольск</option>
								<option value='Златоуст'>Златоуст</option>
								<option value='Иваново'>Иваново</option>
								<option value='Ивантеевка'>Ивантеевка</option>
								<option value='Ижевск'>Ижевск</option>
								<option value='Избербаш'>Избербаш</option>
								<option value='Иркутск'>Иркутск</option>
								<option value='Искитим'>Искитим</option>
								<option value='Ишим'>Ишим</option>
								<option value='Ишимбай'>Ишимбай</option>
								<option value='Йошкар-Ола'>Йошкар-Ола</option>
								<option value='Казань'>Казань</option>
								<option value='Калининград'>Калининград</option>
								<option value='Калуга'>Калуга</option>
								<option value='Каменск-Уральский'>Каменск-Уральский</option>
								<option value='Каменск-Шахтинский'>Каменск-Шахтинский</option>
								<option value='Камышин'>Камышин</option>
								<option value='Канск'>Канск</option>
								<option value='Каспийск'>Каспийск</option>
								<option value='Кемерово'>Кемерово</option>
								<option value='Керчь'>Керчь</option>
								<option value='Кинешма'>Кинешма</option>
								<option value='Кириши'>Кириши</option>
								<option value='Киров (Кировская область)'>
									Киров (Кировская область)
								</option>
								<option value='Кирово-Чепецк'>Кирово-Чепецк</option>
								<option value='Киселевск'>Киселевск</option>
								<option value='Кисловодск'>Кисловодск</option>
								<option value='Клин'>Клин</option>
								<option value='Клинцы'>Клинцы</option>
								<option value='Ковров'>Ковров</option>
								<option value='Когалым'>Когалым</option>
								<option value='Коломна'>Коломна</option>
								<option value='Комсомольск-на-Амуре'>Комсомольск-на-Амуре</option>
								<option value='Копейск'>Копейск</option>
								<option value='Королев'>Королев</option>
								<option value='Кострома'>Кострома</option>
								<option value='Котлас'>Котлас</option>
								<option value='Красногорск'>Красногорск</option>
								<option value='Краснодар'>Краснодар</option>
								<option value='Краснокаменск'>Краснокаменск</option>
								<option value='Краснокамск'>Краснокамск</option>
								<option value='Краснотурьинск'>Краснотурьинск</option>
								<option value='Красноярск'>Красноярск</option>
								<option value='Кропоткин'>Кропоткин</option>
								<option value='Крымск'>Крымск</option>
								<option value='Кстово'>Кстово</option>
								<option value='Кузнецк'>Кузнецк</option>
								<option value='Кумертау'>Кумертау</option>
								<option value='Кунгур'>Кунгур</option>
								<option value='Курган'>Курган</option>
								<option value='Курск'>Курск</option>
								<option value='Кызыл'>Кызыл</option>
								<option value='Лабинск'>Лабинск</option>
								<option value='Лениногорск'>Лениногорск</option>
								<option value='Ленинск-Кузнецкий'>Ленинск-Кузнецкий</option>
								<option value='Лесосибирск'>Лесосибирск</option>
								<option value='Липецк'>Липецк</option>
								<option value='Лиски'>Лиски</option>
								<option value='Лобня'>Лобня</option>
								<option value='Лысьва'>Лысьва</option>
								<option value='Лыткарино'>Лыткарино</option>
								<option value='Люберцы'>Люберцы</option>
								<option value='Магадан'>Магадан</option>
								<option value='Магнитогорск'>Магнитогорск</option>
								<option value='Майкоп'>Майкоп</option>
								<option value='Махачкала'>Махачкала</option>
								<option value='Междуреченск'>Междуреченск</option>
								<option value='Мелеуз'>Мелеуз</option>
								<option value='Миасс'>Миасс</option>
								<option value='Минеральные Воды'>Минеральные Воды</option>
								<option value='Минусинск'>Минусинск</option>
								<option value='Михайловка'>Михайловка</option>
								<option value='Михайловск (Ставропольский край)'>
									Михайловск (Ставропольский край)
								</option>
								<option value='Мичуринск'>Мичуринск</option>
								<option value='Мурманск'>Мурманск</option>
								<option value='Муром'>Муром</option>
								<option value='Мытищи'>Мытищи</option>
								<option value='Набережные Челны'>Набережные Челны</option>
								<option value='Назарово'>Назарово</option>
								<option value='Назрань'>Назрань</option>
								<option value='Нальчик'>Нальчик</option>
								<option value='Наро-Фоминск'>Наро-Фоминск</option>
								<option value='Находка'>Находка</option>
								<option value='Невинномысск'>Невинномысск</option>
								<option value='Нерюнгри'>Нерюнгри</option>
								<option value='Нефтекамск'>Нефтекамск</option>
								<option value='Нефтеюганск'>Нефтеюганск</option>
								<option value='Нижневартовск'>Нижневартовск</option>
								<option value='Нижнекамск'>Нижнекамск</option>
								<option value='Нижний Новгород'>Нижний Новгород</option>
								<option value='Нижний Тагил'>Нижний Тагил</option>
								<option value='Новоалтайск'>Новоалтайск</option>
								<option value='Новокузнецк'>Новокузнецк</option>
								<option value='Новокуйбышевск'>Новокуйбышевск</option>
								<option value='Новомосковск'>Новомосковск</option>
								<option value='Новороссийск'>Новороссийск</option>
								<option value='Новосибирск'>Новосибирск</option>
								<option value='Новотроицк'>Новотроицк</option>
								<option value='Новоуральск'>Новоуральск</option>
								<option value='Новочебоксарск'>Новочебоксарск</option>
								<option value='Новочеркасск'>Новочеркасск</option>
								<option value='Новошахтинск'>Новошахтинск</option>
								<option value='Новый Уренгой'>Новый Уренгой</option>
								<option value='Ногинск'>Ногинск</option>
								<option value='Норильск'>Норильск</option>
								<option value='Ноябрьск'>Ноябрьск</option>
								<option value='Нягань'>Нягань</option>
								<option value='Обнинск'>Обнинск</option>
								<option value='Одинцово'>Одинцово</option>
								<option value='Озерск (Челябинская область)'>
									Озерск (Челябинская область)
								</option>
								<option value='Октябрьский'>Октябрьский</option>
								<option value='Омск'>Омск</option>
								<option value='Орел'>Орел</option>
								<option value='Оренбург'>Оренбург</option>
								<option value='Орехово-Зуево'>Орехово-Зуево</option>
								<option value='Орск'>Орск</option>
								<option value='Павлово'>Павлово</option>
								<option value='Павловский Посад'>Павловский Посад</option>
								<option value='Первоуральск'>Первоуральск</option>
								<option value='Пермь'>Пермь</option>
								<option value='Петрозаводск'>Петрозаводск</option>
								<option value='Петропавловск-Камчатский'>
									Петропавловск-Камчатский
								</option>
								<option value='Подольск'>Подольск</option>
								<option value='Полевской'>Полевской</option>
								<option value='Прокопьевск'>Прокопьевск</option>
								<option value='Прохладный'>Прохладный</option>
								<option value='Псков'>Псков</option>
								<option value='Пушкино'>Пушкино</option>
								<option value='Пятигорск'>Пятигорск</option>
								<option value='Раменское'>Раменское</option>
								<option value='Ревда'>Ревда</option>
								<option value='Реутов'>Реутов</option>
								<option value='Ржев'>Ржев</option>
								<option value='Рославль'>Рославль</option>
								<option value='Россошь'>Россошь</option>
								<option value='Ростов-на-Дону'>Ростов-на-Дону</option>
								<option value='Рубцовск'>Рубцовск</option>
								<option value='Рыбинск'>Рыбинск</option>
								<option value='Рязань'>Рязань</option>
								<option value='Салават'>Салават</option>
								<option value='Сальск'>Сальск</option>
								<option value='Самара'>Самара</option>
								<option value='Саранск'>Саранск</option>
								<option value='Сарапул'>Сарапул</option>
								<option value='Саратов'>Саратов</option>
								<option value='Саров'>Саров</option>
								<option value='Свободный'>Свободный</option>
								<option value='Севастополь'>Севастополь</option>
								<option value='Северодвинск'>Северодвинск</option>
								<option value='Северск'>Северск</option>
								<option value='Сергиев Посад'>Сергиев Посад</option>
								<option value='Серов'>Серов</option>
								<option value='Серпухов'>Серпухов</option>
								<option value='Сертолово'>Сертолово</option>
								<option value='Сибай'>Сибай</option>
								<option value='Симферополь'>Симферополь</option>
								<option value='Славянск-на-Кубани'>Славянск-на-Кубани</option>
								<option value='Смоленск'>Смоленск</option>
								<option value='Соликамск'>Соликамск</option>
								<option value='Солнечногорск'>Солнечногорск</option>
								<option value='Сосновый Бор'>Сосновый Бор</option>
								<option value='Сочи'>Сочи</option>
								<option value='Ставрополь'>Ставрополь</option>
								<option value='Старый Оскол'>Старый Оскол</option>
								<option value='Стерлитамак'>Стерлитамак</option>
								<option value='Ступино'>Ступино</option>
								<option value='Сургут'>Сургут</option>
								<option value='Сызрань'>Сызрань</option>
								<option value='Сыктывкар'>Сыктывкар</option>
								<option value='Таганрог'>Таганрог</option>
								<option value='Тамбов'>Тамбов</option>
								<option value='Тверь'>Тверь</option>
								<option value='Тимашевск'>Тимашевск</option>
								<option value='Тимашевск'>Тихвин</option>
								<option value='Тихорецк'>Тихорецк</option>
								<option value='Тобольск'>Тобольск</option>
								<option value='Тольятти'>Тольятти</option>
								<option value='Томск'>Томск</option>
								<option value='Троицк'>Троицк</option>
								<option value='Туапсе'>Туапсе</option>
								<option value='Туймазы'>Туймазы</option>
								<option value='Тула'>Тула</option>
								<option value='Тюмень'>Тюмень</option>
								<option value='Узловая'>Узловая</option>
								<option value='Улан-Удэ'>Улан-Удэ</option>
								<option value='Ульяновск'>Ульяновск</option>
								<option value='Урус-Мартан'>Урус-Мартан</option>
								<option value='Усолье-Сибирское'>Усолье-Сибирское</option>
								<option value='Уссурийск'>Уссурийск</option>
								<option value='Усть-Илимск'>Усть-Илимск</option>
								<option value='Уфа'>Уфа</option>
								<option value='Ухта'>Ухта</option>
								<option value='Феодосия'>Феодосия</option>
								<option value='Фрязино'>Фрязино</option>
								<option value='Хабаровск'>Хабаровск</option>
								<option value='Ханты-Мансийск'>Ханты-Мансийск</option>
								<option value='Хасавюрт'>Хасавюрт</option>
								<option value='Химки'>Химки</option>
								<option value='Чайковский'>Чайковский</option>
								<option value='Чапаевск'>Чапаевск</option>
								<option value='Чебоксары'>Чебоксары</option>
								<option value='Челябинск'>Челябинск</option>
								<option value='Черемхово'>Черемхово</option>
								<option value='Череповец'>Череповец</option>
								<option value='Черкесск'>Черкесск</option>
								<option value='Черногорск'>Черногорск</option>
								<option value='Чехов'>Чехов</option>
								<option value='Чистополь'>Чистополь</option>
								<option value='Чита'>Чита</option>
								<option value='Шадринск'>Шадринск</option>
								<option value='Шали'>Шали</option>
								<option value='Шахты'>Шахты</option>
								<option value='Шуя'>Шуя</option>
								<option value='Щекино'>Щекино</option>
								<option value='Щелково'>Щелково</option>
								<option value='Электросталь'>Электросталь</option>
								<option value='Элиста'>Элиста</option>
								<option value='Энгельс'>Энгельс</option>
								<option value='Южно-Сахалинск'>Южно-Сахалинск</option>
								<option value='Юрга'>Юрга</option>
								<option value='Якутск'>Якутск</option>
								<option value='Ялта'>Ялта</option>
								<option value='Ярославль'>Ярославль</option>
							</select>
						</div>

						<div className={styles.inputWrapper}>
							<label htmlFor='dateThere' className={styles.labelForInput}>
								Туда
							</label>
							<input
								type='date'
								id='dateThere'
								className={styles.input}
								placeholder='Выбрать дату'
								{...register('dateThere', {
									required: 'Введите дату отправления',
								})}
							/>
							{errors.dateThere && (
								<p className={styles.error}>{errors?.dateThere?.message}</p>
							)}
						</div>
						{watch('typeOfFly') !== 'oneWay' && (
							<div className={styles.inputWrapper}>
								<label htmlFor='dateBack' className={styles.labelForInput}>
									Обратно
								</label>
								<input
									type='date'
									id='dateBack'
									className={styles.input}
									placeholder='Выбрать дату'
									{...register('dateBack', {
										required: getValues('typeOfFly') === 'twoWay',
									})}
								/>
								{errors.dateBack && (
									<p className={styles.error}>
										{errors?.dateBack?.message || 'Введите дату возвращения'}
									</p>
								)}
							</div>
						)}
					</div>
				</div>
				<div className={styles.passengers}>
					<p className={styles.subtitle}>Данные о пассажирах</p>
					<div className={styles.passengersWrapper}>
						<div className={styles.inputWrapper}>
							<input
								type='text'
								className={styles.input}
								placeholder='Имя'
								{...register('firstName', {
									required: 'Поле обязательно к заполнению',
									minLength: {
										value: 2,
										message: 'Минимальная длина имени 2 символа',
									},
								})}
							/>
							{errors.firstName && (
								<p className={styles.error}>{errors?.firstName?.message}</p>
							)}
						</div>
						<div className={styles.inputWrapper}>
							<input
								type='text'
								className={styles.input}
								placeholder='Фамилия'
								{...register('surname', {
									required: 'Поле обязательно к заполнению',
									minLength: {
										value: 1,
										message: `Минимальная длина фамилии 1 символ`,
									},
								})}
							/>
							{errors.surname && (
								<p className={styles.error}>{errors.surname.message}</p>
							)}
						</div>
						<div className={styles.inputWrapper}>
							<input
								type='text'
								className={styles.input}
								placeholder='Отчество (при наличии)'
								{...register('last-surname', {
									minLength: 1,
								})}
							/>
						</div>

						<div className={styles.inputWrapper}>
							<label htmlFor='birthdayDate' className={styles.labelForInput}>
								Дата рождения
							</label>
							<input
								type='date'
								id='birthdayDate'
								className={styles.input}
								{...register('birtdayDate', {
									required: 'Введите дату рождения',
								})}
							/>
							{errors.birtdayDate && (
								<p className={styles.error}>{errors?.birtdayDate.message}</p>
							)}
						</div>
						<div className={styles.inputWrapper}>
							<label htmlFor='passport' className={styles.labelForInput}>
								Серия и номер пасспорта
							</label>
							<input
								type='text'
								id='passport'
								className={styles.input}
								placeholder='XXXX XXXXXX'
								{...register('passport', {
									required: 'Заполните пасспортные данные',
									pattern: {
										value: /^([0-9]{4})\s{1}([0-9]{6})$/,
										message:
											'Пожалуйста, введите корректные пасспортные данные',
									},
								})}
							/>
							{errors.passport && (
								<p className={styles.error}>{errors.passport.message}</p>
							)}
						</div>
						<div className={styles.inputWrapper}>
							<label htmlFor='email' className={styles.labelForInput}>
								Электронная почта
							</label>
							<input
								type='email'
								id='email'
								className={styles.input}
								placeholder='e-mail'
								{...register('email', {
									required: 'Поле обязательно к заполнению',
									pattern: {
										value: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
										message: 'Введен некорректный e-mail',
									},
								})}
							/>
							{errors.email && <p className={styles.error}>{errors.email.message}</p>}
						</div>
					</div>
					<div className={styles.buttonWrapper}>
						<button
							type='button'
							className={styles.addButton}
							onClick={() => console.log('Add pass')}
						>
							<img src={addIcon} alt='Добавить' className={styles.addIcon} />
							Добавить пассажира
						</button>
					</div>
					<div className={styles.notesWrapper}>
						<label htmlFor='notes' className={styles.labelForInput}>
							Примечание (не обязательно)
						</label>
						<textarea
							name='notes'
							id='notes'
							className={styles.textarea}
							placeholder='Оставьте примечание здесь'
						></textarea>
					</div>
				</div>
				<div className={styles.linkWrapper}>
					<Link to='#' className={styles.link}>
						Условия конфиденциальности
					</Link>
					<img src={linkIcon} className={styles.linkIcon} />
				</div>
				<div className={styles.lastCheckboxWrapper}>
					<input
						type='checkbox'
						id='consentToPrivacy'
						className={styles.checkbox}
						{...register('consentToPrivacy', {
							required: 'Необходимо согласиться с условиями конфиденциальности',
						})}
					/>
					<label htmlFor='consentToPrivacy' className={styles.checkboxLabel}>
						Я согласен(а) с условиями конфиденциальности
					</label>
				</div>
				{errors.consentToPrivacy && (
					<p className={styles.error}>{errors.consentToPrivacy.message}</p>
				)}
				<button type='submit' className={styles.yellowButton}>
					Отправить
				</button>
			</form>
		</div>
	);
};

export default TripForm;
