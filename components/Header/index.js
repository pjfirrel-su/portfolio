import Image from "next/image";
import Link from "next/link";

import styles from "./Header.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <Link 
                href="/"
            >
                <Image 
                    src="wordmark.svg"
                    alt="Patrick Firrell Logo"
                    width={350}
                    height={100}
                    className={styles.header__wordmark}
                />
            </Link>
        </header>
        
    )
};
export default Header;