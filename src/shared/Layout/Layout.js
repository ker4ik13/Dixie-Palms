import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';
import Nav from '../Nav/Nav';
import clouds from '@/pages/MainPage/img/clouds.png';
import Footer from '@/widgets/Footer/Footer';
const Layout = () => {
    return (_jsxs("div", { className: styles.page, children: [_jsx(Nav, {}), _jsx("img", { src: clouds, className: styles.page_cloud }), _jsx(Outlet, {}), _jsx(Footer, {})] }));
};
export default Layout;
