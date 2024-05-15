import {useState} from "react";

import ButtonUI from "../ButtonUI";
import Header from "../Header";
import MobileNavProject from "../MobileNavProject";
import Row from "../Row";
import Sticky from "../Sticky";

import styles from "../MobileHeader/MobileHeader.module.scss";

const MobileHeaderProject = () => {
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
                {isMobileNavVisible && <MobileNavProject closeHandler={() => {
                setIsMobileNavVisible(false);
                }}/>}
            </Row>
        </Sticky>

        
    )
};
export default MobileHeaderProject;