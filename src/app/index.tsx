import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './styles/styles';
import Main from '../pages/MainPage/Main';
import Layout from '../shared/Layout/Layout';
import Preloader from '@/widgets/Preloader/Preloader';
const Page404 = lazy(() => import('@/pages/Page404/Page404'));
const ToursPage = lazy(() => import('@/pages/ToursPage/ToursPage'));
const TourPage = lazy(() => import('@/pages/TourPage/TourPage'));
const GuidePage = lazy(() => import('@/pages/GuidePage/GuidePage'));
const BlogPage = lazy(() => import('@/pages/BlogPage/BlogPage'));
const BookTripPage = lazy(() => import('@/pages/BookTripPage/BookTripPage'));
import { Provider } from 'react-redux';
import store from '@/store/store';

const App = () => {
	return (
		<Provider store={store}>
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
						<Route
							path='book-trip'
							element={
								<Suspense fallback={<Preloader />}>
									<BookTripPage />
								</Suspense>
							}
						/>
						<Route
							path='*'
							element={
								<Suspense fallback={<Preloader />}>
									<Page404 />
								</Suspense>
							}
						/>
						<Route
							path='/404'
							element={
								<Suspense fallback={<Preloader />}>
									<Page404 />
								</Suspense>
							}
						/>
						<Route
							path='/tours/*'
							element={
								<Suspense fallback={<Preloader />}>
									<Page404 />
								</Suspense>
							}
						/>
						<Route
							path='/blog/*'
							element={
								<Suspense fallback={<Preloader />}>
									<Page404 />
								</Suspense>
							}
						/>
					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	);
};

export default App;
