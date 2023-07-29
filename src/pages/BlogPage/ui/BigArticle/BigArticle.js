import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import BlueButton from '@/shared/BlueButton/BlueButton';
import styles from './BigArticle.module.scss';
const BigArticle = ({ title, text, img1, img2, buttonLink }) => {
    return (_jsxs("div", { className: styles.bigArticle, children: [_jsx("h2", { className: styles.title, children: title }), _jsxs("div", { className: styles.content, children: [_jsxs("div", { className: styles.column, children: [_jsx("p", { className: styles.text, children: text }), _jsx(BlueButton, { text: '\u0427\u0438\u0442\u0430\u0442\u044C', to: buttonLink })] }), _jsx("div", { className: styles.column, children: _jsx("img", { src: img1, className: styles.img1 }) })] }), _jsx("img", { src: img2, className: styles.img2 })] }));
};
export default BigArticle;
