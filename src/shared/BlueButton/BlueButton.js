import { jsx as _jsx } from "react/jsx-runtime";
import styles from './BlueButton.module.scss';
import { Link } from 'react-router-dom';
const BlueButton = ({ text, to, callback }) => {
    return (_jsx("div", { className: styles.buttonWrapper, onClick: callback, children: _jsx(Link, { to: to, className: styles.button, children: text }) }));
};
export default BlueButton;
