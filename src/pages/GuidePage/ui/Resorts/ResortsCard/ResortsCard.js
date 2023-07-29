import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './ResortsCard.module.scss';
import YellowButton from '@/shared/YellowButton/YellowButton';
const ResortsCard = ({ resort, img }) => {
    return (_jsxs("div", { className: styles.card, children: [_jsxs("div", { className: styles.img_wrapper, children: [_jsx("p", { className: styles.card_price, children: resort.price }), _jsx("img", { src: img, className: styles.img })] }), _jsx("p", { className: styles.card_title, children: resort.title }), _jsxs("div", { className: styles.description, children: [_jsx("p", { className: styles.description_title, children: resort.descriptionTitle }), _jsx("p", { className: styles.description_text, children: resort.descriptionText }), _jsx("div", { className: styles.button_wrapper, children: _jsx(YellowButton, { text: '\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C', to: `/tours/tour${resort.id}` }) })] })] }));
};
export default ResortsCard;
