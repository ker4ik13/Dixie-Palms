import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import styles from './YellowButton.module.scss';
const YellowButton = ({ text, to, size, round }) => {
    const isBig = size === 'big' ? true : false;
    const isMedium = size === 'medium' ? true : false;
    const isRound = round === 'round' ? true : false;
    return (_jsxs(_Fragment, { children: [!size && (_jsx(Link, { to: to, className: styles.button, children: text })), isMedium && !isRound && (_jsx(Link, { to: to, className: `${styles.button} ${styles.medium}`, children: text })), isBig && !isRound && (_jsx(Link, { to: to, className: `${styles.button} ${styles.big}`, children: text })), isMedium && isRound && (_jsx(Link, { to: to, className: `${styles.button} ${styles.medium} ${styles.round}`, children: text })), isBig && isRound && (_jsx(Link, { to: to, className: `${styles.button} ${styles.big} ${styles.round}`, children: text }))] }));
};
export default YellowButton;
