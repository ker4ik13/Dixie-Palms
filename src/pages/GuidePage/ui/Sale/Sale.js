import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './Sale.module.scss';
import indonesia from './img/indonesia.jpg';
import YellowButton from '@/shared/YellowButton/YellowButton';
const Sale = ({ title, description, text1, text2, text3, to }) => {
    return (_jsx("div", { className: styles.sale, children: _jsxs("div", { className: styles.card, children: [_jsx("img", { src: indonesia, className: styles.img }), _jsxs("div", { className: styles.text, children: [_jsx("h3", { className: styles.title, children: title }), _jsx("p", { className: styles.description, children: description }), _jsx(YellowButton, { text: '\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C', to: to })] }), _jsxs("div", { className: styles.about, children: [_jsx("p", { className: styles.about_text, children: text1 }), _jsx("p", { className: styles.about_text, children: text2 }), _jsx("p", { className: styles.about_text, children: text3 })] })] }) }));
};
export default Sale;
