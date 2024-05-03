import { useState } from "react";

import styles from "./Navproject.module.scss";

// import Col from "../Col";
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
                        <Link className={styles.nav__links} href="/">
                            <Heading level={3}>&lt;work&gt;</Heading>
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.nav__links} href="/">
                            <Heading level={3}>&lt;about&gt;</Heading>
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.nav__links} href="/" onClick={handleScroll}>
                            <Heading level={3}>&lt;contact&gt;</Heading>
                        </Link>
                    </li>
                </ul>
            </div>
            <footer className={styles.nav__footer}>
                <Row gap={1}>
                    <a href="https://www.behance.net/patrickfirrell">
                        <Image 
                        src="behance_logo.svg"
                        alt="Behance Logo"
                        width={35}
                        height={35}
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/pfirrell/">
                        <Image 
                        src="linkedin_logo.svg"
                        alt="Behance Logo"
                        width={35}
                        height={35} 
                        />
                    </a>
                </Row>
            </footer>
        
        </nav>
    )
};
export default Nav;