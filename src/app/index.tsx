import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './styles/styles';
import Main from '../pages/MainPage/Main';
import Layout from '../shared/Layout/Layout';
import Preloader from '@/widgets/Preloader/Preloader';
const ToursPage = lazy(() => import('@/pages/ToursPage/ToursPage'));
const TourPage = lazy(() => import('@/pages/TourPage/TourPage'));
const GuidePage = lazy(() => import('@/pages/GuidePage/Guide'));
const BlogPage = lazy(() => import('@/pages/BlogPage/BlogPage'));

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='index.html' element={<Navigate to='/' />} />
					<Route index element={<Main />} />
					<Route
						path='tours'
						element={
							<Suspense fallback={<Preloader />}>
								<ToursPage />
							</Suspense>
						}
					/>
					<Route
						path='tours/:someTour'
						element={
							<Suspense fallback={<Preloader />}>
								<TourPage />
							</Suspense>
						}
					/>
					<Route
						path='guide'
						element={
							<Suspense fallback={<Preloader />}>
								<GuidePage />
							</Suspense>
						}
					/>
					<Route
						path='blog'
						element={
							<Suspense fallback={<Preloader />}>
								<BlogPage />
							</Suspense>
						}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
