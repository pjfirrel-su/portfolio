import {useState} from "react";

import ButtonUI from "../ButtonUI";
import Header from "../Header";
import MobileNav from "../MobileNav";
import Row from "../Row";
import Sticky from "../Sticky";

import styles from "./MobileHeader.module.scss";

const MobileHeader = () => {
    const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

    return (

        <Sticky className={styles.row}>
            <Row justifyContent="space-between">
                <Header />
                <ButtonUI 
                icon="menu"
                className={styles.bars}
                clickHandler={() => {
                    setIsMobileNavVisible(true);
                }}
                />
                {isMobileNavVisible && <MobileNav closeHandler={() => {
                setIsMobileNavVisible(false);
                }}/>}
            </Row>
        </Sticky>

        
    )
};
export default MobileHeader;