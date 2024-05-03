import { useState } from "react";

import styles from "./Nav.module.scss";

import Col from "../Col";
import Heading from "../Heading";
import Image from "next/image";
import Link from "next/link"
import Row from "../Row";


const handleScroll = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    }
}


const Nav = () => {
    return (
        <nav className={styles.nav}>
        
            <header>
                <Image 
                    src="wordmark.svg"
                    alt="Patrick Firrell Logo"
                    width={350}
                    height={100}
                    className={styles.nav__branding__wordmark}
                />
            </header>
            <div>
                <ul className={styles.nav__list}>
                    <li>
                        <a className={styles.nav__links} href="#work" onClick={handleScroll}>
                            <Heading level={3}>&lt;work&gt;</Heading>
                        </a>
                    </li>
                    <li>
                        <a className={styles.nav__links} href="#about" onClick={handleScroll}>
                            <Heading level={3}>&lt;about&gt;</Heading>
                        </a>
                    </li>
                    <li>
                        <a className={styles.nav__links} href="#contact" onClick={handleScroll}>
                            <Heading level={3}>&lt;contact&gt;</Heading>
                        </a>
                    </li>
                </ul>
            </div>
            <footer className={styles.nav__footer}>
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
export default Nav;