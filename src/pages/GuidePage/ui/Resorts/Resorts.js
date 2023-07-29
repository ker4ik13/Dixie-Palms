import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import styles from './Resorts.module.scss';
import ResortsCard from './ResortsCard/ResortsCard';
import bagams from './img/bagams.jpg';
import maldives from './img/maldives.jpg';
import thailand from './img/thailand.jpg';
const Resorts = ({ resortsCards }) => {
    return (_jsxs(_Fragment, { children: [_jsx("h2", { className: styles.title, children: "\u0422\u0440\u043E\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043A\u0443\u0440\u043E\u0440\u0442\u044B" }), _jsxs("div", { className: styles.resorts, children: [_jsx(ResortsCard, { resort: resortsCards[0], img: bagams }, resortsCards[0].id), _jsx(ResortsCard, { resort: resortsCards[1], img: maldives }, resortsCards[1].id), _jsx(ResortsCard, { resort: resortsCards[2], img: thailand }, resortsCards[2].id)] })] }));
};
export default Resorts;
