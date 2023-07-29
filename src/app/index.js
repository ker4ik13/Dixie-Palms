import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsx(Provider, { store: store, children: _jsx(BrowserRouter, { children: _jsx(Routes, { children: _jsxs(Route, { path: '/', element: _jsx(Layout, {}), children: [_jsx(Route, { path: 'index.html', element: _jsx(Navigate, { to: '/' }) }), _jsx(Route, { index: true, element: _jsx(Main, {}) }), _jsx(Route, { path: 'tours', element: _jsx(Suspense, { fallback: _jsx(Preloader, {}), children: _jsx(ToursPage, {}) }) }), _jsx(Route, { path: 'tours/:someTour', element: _jsx(Suspense, { fallback: _jsx(Preloader, {}), children: _jsx(TourPage, {}) }) }), _jsx(Route, { path: 'guide', element: _jsx(Suspense, { fallback: _jsx(Preloader, {}), children: _jsx(GuidePage, {}) }) }), _jsx(Route, { path: 'blog', element: _jsx(Suspense, { fallback: _jsx(Preloader, {}), children: _jsx(BlogPage, {}) }) }), _jsx(Route, { path: 'book-trip', element: _jsx(Suspense, { fallback: _jsx(Preloader, {}), children: _jsx(BookTripPage, {}) }) }), _jsx(Route, { path: '*', element: _jsx(Suspense, { fallback: _jsx(Preloader, {}), children: _jsx(Page404, {}) }) }), _jsx(Route, { path: '/404', element: _jsx(Suspense, { fallback: _jsx(Preloader, {}), children: _jsx(Page404, {}) }) }), _jsx(Route, { path: '/tours/*', element: _jsx(Suspense, { fallback: _jsx(Preloader, {}), children: _jsx(Page404, {}) }) }), _jsx(Route, { path: '/blog/*', element: _jsx(Suspense, { fallback: _jsx(Preloader, {}), children: _jsx(Page404, {}) }) })] }) }) }) }));
};
export default App;
