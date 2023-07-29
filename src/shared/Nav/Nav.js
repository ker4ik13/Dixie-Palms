import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './Nav.module.scss';
import { NavLink } from 'react-router-dom';
import { callNav } from './callNav';
const Nav = () => {
    return (_jsx("div", { className: 'container', children: _jsxs("div", { className: styles.wrapper, children: [_jsxs("nav", { className: `${styles.nav}`, children: [_jsx(NavLink, { to: '/', className: styles.nav__link, children: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F" }), _jsx(NavLink, { to: '/tours', className: styles.nav__link, children: "\u0412\u0441\u0435 \u0442\u0443\u0440\u044B" }), _jsx(NavLink, { to: '/guide', className: styles.nav__link, children: "\u041F\u0443\u0442\u0435\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C" }), _jsx(NavLink, { to: '/book-trip', className: styles.nav__link, children: "\u041E\u043D\u043B\u0430\u0439\u043D - \u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435" }), _jsx(NavLink, { to: '#', className: styles.nav__link, children: "\u0410\u043A\u0446\u0438\u0438" }), _jsx(NavLink, { to: '/blog', className: styles.nav__link, children: "\u0411\u043B\u043E\u0433" }), _jsx(NavLink, { to: '#', className: styles.nav__link, children: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B" })] }), _jsx("div", { className: styles.burger, onClick: (event) => callNav(event, styles), children: _jsx("span", {}) })] }) }));
};
export default Nav;
