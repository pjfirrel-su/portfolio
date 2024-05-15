import ButtonUI from "../ButtonUI";
import Col from "../Col";
import Heading from "../Heading";
import Image from "next/image";
import Row from "../Row";


import styles from "./MobileNavProject.module.scss";

const MobileNav = ({ closeHandler }) => {
    return (
        <nav className={styles.mobileNav}>
            <ButtonUI 
                icon="x"
                clickHandler={closeHandler}
            />
            <header>
                <Image 
                    src="wordmark.svg"
                    alt="Patrick Firrell Logo"
                    width={350}
                    height={100}
                    className={styles.mobileNav__branding__wordmark}
                />
            </header>
            <div>
                <ul className={styles.mobileNav__list}>
                    <li>
                        <a className={styles.mobileNav__links} href="/">
                            <Heading level={3}>&lt;work&gt;</Heading>
                        </a>
                    </li>
                    <li>
                        <a className={styles.mobileNav__links} href="/">
                            <Heading level={3}>&lt;about&gt;</Heading>
                        </a>
                    </li>
                    <li>
                        <a className={styles.mobileNav__links} href="/">
                            <Heading level={3}>&lt;contact&gt;</Heading>
                        </a>
                    </li>
                </ul>
            </div>
            <footer className={styles.mobileNav__footer}>
                <Row gap={1}>
                    <Col>
                        <ul class={styles.socialList}>
                            <li>
                                <a href="https://www.behance.net/patrickfirrell">
                                    <Image 
                                    src="behance_logo.svg"
                                    alt="Behance Logo"
                                    width={35}
                                    height={35}
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/pfirrell/">
                                    <Image 
                                    src="linkedin_logo.svg"
                                    alt="Behance Logo"
                                    width={35}
                                    height={35} 
                                    />
                                </a>
                            </li>
                        </ul>
                    </Col>
                    
                </Row>
            </footer>
        </nav>
    )
};
export default MobileNav;