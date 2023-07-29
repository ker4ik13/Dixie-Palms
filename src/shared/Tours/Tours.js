import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import styles from './Tours.module.scss';
import Tour from '@/shared/Tour/Tour';
import YellowButton from '@/shared/YellowButton/YellowButton';
import Preloader from '@/widgets/Preloader/Preloader';
import { getTours } from '@/shared/api/getData';
const Tours = ({ count }) => {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getAsyncTours = async () => {
            const response = await getTours('https://64aff776c60b8f941af4f841.mockapi.io/server/tours');
            setLoading(false);
            setTours(response);
        };
        getAsyncTours();
    }, []);
    return (_jsxs(_Fragment, { children: [_jsx("h2", { className: styles.title, children: "\u0412\u0441\u0435 \u0442\u0443\u0440\u044B \u0438 \u0441\u0442\u0440\u0430\u043D\u044B" }), _jsxs("div", { className: styles.tours, children: [_jsxs("div", { className: styles.wrapper, children: [loading && _jsx(Preloader, {}), count === 'three' && !loading && (_jsxs(_Fragment, { children: [_jsx(Tour, { tour: tours[0] }), _jsx(Tour, { tour: tours[1] }), _jsx(Tour, { tour: tours[2] })] })), count === 'all' && tours.map((tour) => _jsx(Tour, { tour: tour }, tour.id))] }), count === 'three' && (_jsx(YellowButton, { text: '\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0434\u0440\u0443\u0433\u0438\u0435 \u0442\u0443\u0440\u044B', size: 'medium', to: '/tours' }))] })] }));
};
export default Tours;
