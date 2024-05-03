import ButtonUI from "../ButtonUI";

import styles from "./MobileNav.module.scss";

const MobileNav = ({ closeHandler }) => {
    return (
        <nav className={styles.mobileNav}>
            <ButtonUI 
                icon="close"
                clickHandler={closeHandler}
            />
            Mobile nav goes here
        </nav>
    )
};
export default MobileNav;