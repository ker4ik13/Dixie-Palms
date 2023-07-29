import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import BlueButton from '@/shared/BlueButton/BlueButton';
import styles from './MediumArticle.module.scss';
const MediumArticle = ({ title, text, img, buttonLink }) => {
    return (_jsxs("div", { className: styles.mediumArticle, children: [_jsx("h2", { className: styles.title, children: title }), _jsx("img", { src: img, className: styles.img }), _jsxs("div", { className: styles.content, children: [_jsx("p", { className: styles.text, children: text }), _jsx(BlueButton, { text: '\u0427\u0438\u0442\u0430\u0442\u044C', to: buttonLink })] })] }));
};
export default MediumArticle;
