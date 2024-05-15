import classnames from "classnames/bind";

import styles from "./ButtonUI.module.scss";

const cx = classnames.bind(styles);

const ButtonUI = ({ clickHandler, icon }) => {
    const ButtonUIClasses = cx({
        btnui: true, 
        menu: icon === "menu",
        close: icon === "x" 
    });

    return (
        <button 
            onClick={clickHandler}
            className={ButtonUIClasses}
        >
            {icon}
        </button>
    )
};
export default ButtonUI;