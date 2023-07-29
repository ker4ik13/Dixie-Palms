import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import YellowButton from '@/shared/YellowButton/YellowButton';
import styles from './Page404.module.scss';
const Page404 = () => {
    return (_jsxs("div", { className: styles.page404, children: [_jsx("h2", { className: styles.title, children: "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430" }), _jsx(YellowButton, { text: '\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E', to: '/', size: 'big', round: 'round' })] }));
};
export default Page404;
