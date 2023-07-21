import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './styles/styles';
import Main from '../pages/MainPage/Main';
import Layout from '../shared/ui/layout/Layout';
const GuidePage = lazy(() => import('../pages/GuidePage/Guide'));
const BlogPage = lazy(() => import('../pages/BlogPage/Blog'));
import { Provider } from 'react-redux';
import store from '../store/store';

const App = () => {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route path='index.html' element={<Navigate to='/' />} />
						<Route index element={<Main />} />
						<Route
							path='guide'
							element={
								<Suspense fallback={<div>Loading...</div>}>
									<GuidePage />
								</Suspense>
							}
						/>
						<Route
							path='blog'
							element={
								<Suspense fallback={<div>Loading...</div>}>
									<BlogPage />
								</Suspense>
							}
						/>
					</Route>
				</Routes>
			</Provider>
		</BrowserRouter>
	);
};

export default App;
