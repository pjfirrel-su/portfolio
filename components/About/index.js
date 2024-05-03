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
                <Col>
                    <Heading level={1}>
                        &lt;about&gt;
                    </Heading>
                    <Row paddingTop={3}>
                        <Col sm={4} md={5} lg={4}>
                            <Image 
                                src="/headshot.png"
                                alt="headshot of Patrick Firrell"
                                height={250}
                                width={250}
                                className={styles.headshot}
                            />
                        </Col>
                        <Col sm={8} md={7} lg={8}>
                            <Paragraph>
                            Hi, I&apos;m Patrick. I&apos;m a graphic design student at Syracuse University with a passion for video games and the UX design behind them. Ever since I played Portal 2 as a kid, I have been fascinated by the ways in which games make problem solving exciting, and now my goal is to design games that inspire players the same way so many games have inspired me. 
                            <br />
                            <br />
                            I started college as a Music Business major, but the combination of my first UI/UX project and my first Elden Ring playthrough led me to change majors and pursue video game UX design as a career. I have experience in user research, wireframing, user testing, and front-end web development among other things. I believe that all successful designs are built from the ground up with the end-user in mind, whether it is a table, a typeface, or a turn-based RPG. 
                            </Paragraph>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </section>
    )
}
export default About;