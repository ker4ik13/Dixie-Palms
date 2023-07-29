import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { lazy, Suspense, useEffect } from 'react';
import Header from '../../widgets/Header/Header';
import SecondBlock from './Blocks/SecondBlock/SecondBlock';
const ThirdBlock = lazy(() => import('./Blocks/ThirdBlock/ThirdBlock'));
const FourthBlock = lazy(() => import('./Blocks/FourthBlock/FourthBlock'));
const Main = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsx(SecondBlock, {}), _jsxs(Suspense, { fallback: _jsx("div", { children: "Loading..." }), children: [_jsx(ThirdBlock, {}), _jsx(FourthBlock, {})] })] }));
};
export default Main;
