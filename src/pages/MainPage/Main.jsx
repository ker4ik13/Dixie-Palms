import { lazy, Suspense } from 'react';
import styles from './Main.module.scss';
import Header from '../../widgets/header/Header';
import SecondBlock from './ui/secondBlock/SecondBlock';
const ThirdBlock = lazy(() => import('./ui/thirdBlock/ThirdBlock'));
const FourthBlock = lazy(() => import('./ui/fourthBlock/FourthBlock'));

const Main = () => {
	return (
		<>
			<Header />
			<SecondBlock />
			<Suspense fallback={<div>Loading...</div>}>
				<ThirdBlock />
				<FourthBlock />
			</Suspense>
		</>
	);
};

export default Main;
