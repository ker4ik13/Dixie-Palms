import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './Tour.module.scss';
import YellowButton from '../YellowButton/YellowButton';
const Tour = ({ tour }) => {
    return (_jsxs("div", { className: styles.tour, children: [_jsxs("div", { className: styles.img, children: [_jsx("img", { src: tour.src, alt: tour.title }), tour.price && _jsx("p", { className: styles.price, children: tour.price })] }), _jsx("p", { className: styles.title, children: tour.title }), _jsxs("div", { className: styles.description, children: [_jsx("p", { className: styles.text, children: tour.description }), _jsx(YellowButton, { text: '\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C', to: `/tours/tour${tour.id}` })] })] }));
};
export default Tour;
