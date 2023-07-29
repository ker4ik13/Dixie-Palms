import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './TourHeader.module.scss';
import BlueButton from '@/shared/BlueButton/BlueButton';
import palm from '@/widgets/Header/img/blue-palms.svg';
import { useDispatch } from 'react-redux';
import { addBookTrip } from '@/store/bookedTrips.slice';
const TourHeader = ({ tour, img, title, description, buttonText, buttonLink }) => {
    const dispatch = useDispatch();
    const addTrip = () => dispatch(addBookTrip(tour));
    return (_jsxs("header", { className: styles.header, children: [_jsx("img", { src: img, alt: title, className: styles.img }), _jsxs("div", { className: styles.header_text, children: [_jsx("h1", { className: styles.header__title, children: title }), _jsx("p", { className: styles.header__subtitle, children: description }), _jsx(BlueButton, { text: buttonText, to: buttonLink, callback: addTrip })] }), _jsx("div", { className: styles.header__ellipse }), _jsx("img", { src: palm, className: styles.palm })] }));
};
export default TourHeader;
