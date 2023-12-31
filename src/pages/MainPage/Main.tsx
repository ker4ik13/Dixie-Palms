import { lazy, Suspense, useEffect } from 'react';
import Header from '../../widgets/Header/Header';
import SecondBlock from './Blocks/SecondBlock/SecondBlock';
const ThirdBlock = lazy(() => import('./Blocks/ThirdBlock/ThirdBlock'));
const FourthBlock = lazy(() => import('./Blocks/FourthBlock/FourthBlock'));

const Main = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
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
