import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './TourPage.module.scss';
import { getTours } from '@/shared/api/getData';
import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Preloader from '@/widgets/Preloader/Preloader';
import TourHeader from '@/widgets/TourHeader/TourHeader';
import TourDescription from './TourDescription/TourDescription';
const TourPage = () => {
    const { someTour } = useParams();
    const tourId = someTour?.split('');
    const [tour, setTour] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
        if (tourId) {
            const asyncGetTours = async () => {
                const response = await getTours(`https://64aff776c60b8f941af4f841.mockapi.io/server/tours/${tourId[4]}`);
                if (response.status === 500) {
                    setLoading(false);
                    setError(true);
                }
                setLoading(false);
                setTour(response);
            };
            asyncGetTours();
        }
        else {
            setLoading(false);
            setError(true);
        }
    }, [someTour]);
    if (tour) {
        return (_jsxs("div", { className: styles.tourPage, children: [loading && _jsx(Preloader, {}), !loading && error && _jsx(Navigate, { to: '/404' }), !loading && !error && (_jsxs("div", { className: 'container', children: [tour.title2 && tour.description2 && (_jsx(TourHeader, { tour: tour, img: tour.src, title: tour.title2, description: tour.description2, buttonText: '\u0417\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C', buttonLink: '/book-trip' })), tour.firstDayText && (_jsxs(_Fragment, { children: [_jsx("p", { className: styles.tour_description, children: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0442\u0443\u0440\u0430" }), _jsx(TourDescription, { tour: tour })] }))] }))] }));
    }
    return _jsx(Preloader, {});
};
export default TourPage;
