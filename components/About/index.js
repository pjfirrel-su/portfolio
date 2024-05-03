import styles from "./About.module.scss";

import Col from "../Col";
import Heading from "../Heading";
import Image from "next/image";
import Paragraph from "../Paragraph";
import Row from "../Row";

const About = () => {
    return (
        <section className={styles.about}>
            <Row>
                <Heading level={1}>
                    &lt;about&gt;
                </Heading>
                <Row paddingTop={3}>
                    <Col sm={6} md={4} lg={4}>
                        <Image 
                            src="/headshot.png"
                            alt="headshot of Patrick Firrell"
                            height={200}
                            width={200}
                            className={styles.headshot}
                        />
                    </Col>
                    <Col sm={11} md={8} lg={8}>
                        <Paragraph className={styles.bio}italic>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Paragraph>
                    </Col>
                </Row>
            </Row>
        </section>
    )
}
export default About;