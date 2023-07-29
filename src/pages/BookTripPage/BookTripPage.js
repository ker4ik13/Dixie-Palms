import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import TripForm from '@/entities/TripForm/TripForm';
import styles from './BookTripPage.module.scss';
import BookTripHeader from './ui/BookTripHeader/BookTripHeader';
import { useSelector } from 'react-redux';
import YellowButton from '@/shared/YellowButton/YellowButton';
const BookTripPage = () => {
    const bookedTrip = useSelector((state) => state.bookTrip.bookedTrip);
    if (bookedTrip[0]) {
        return (_jsxs("div", { className: styles.bookTrip, children: [_jsx("h2", { className: styles.title, children: "\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u043F\u043E\u0435\u0437\u0434\u043A\u0438" }), _jsx(BookTripHeader, { tour: bookedTrip[0] }), _jsx("h3", { className: styles.title, children: "\u0417\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0431\u0438\u043B\u0435\u0442" }), _jsx(TripForm, {})] }));
    }
    return (_jsx("div", { className: styles.bookTrip, children: _jsxs("div", { className: styles.wrapper, children: [_jsx("h2", { className: styles.title, children: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0443\u0440" }), _jsx(YellowButton, { text: '\u0412\u0441\u0435 \u0442\u0443\u0440\u044B', to: '/tours', size: 'big' })] }) }));
};
export default BookTripPage;
