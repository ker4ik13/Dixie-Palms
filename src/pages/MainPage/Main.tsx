import { lazy, Suspense } from 'react';
import Header from '../../widgets/Header/Header';
import SecondBlock from './Blocks/SecondBlock/SecondBlock';
const ThirdBlock = lazy(() => import('./Blocks/ThirdBlock/ThirdBlock'));
const FourthBlock = lazy(() => import('./Blocks/FourthBlock/FourthBlock'));

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
