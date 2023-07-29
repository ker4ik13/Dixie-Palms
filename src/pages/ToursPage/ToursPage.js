import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from 'react';
import styles from './ToursPage.module.scss';
import Tours from '@/shared/Tours/Tours';
const ToursPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (_jsx("div", { className: 'container', children: _jsx("div", { className: styles.toursPage, children: _jsx(Tours, { count: 'all' }) }) }));
};
export default ToursPage;
