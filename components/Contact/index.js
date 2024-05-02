import styles from "./Contact.module.scss";

import Col from "../Col";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import Row from "../Row";

const Contact = () => {
    return (
        <section className={styles.contact}>
            <Col>
                <Heading level={1} className={styles.title}>
                    &lt;Contact&gt;
                </Heading>
                <Row paddingTop={3}>
                    <Paragraph className={styles.paragraph}>
                        If you have an internship opportunity or freelance project and are interested in my work, please reach out to me at <a className={styles.links} href="mailto:pjfirrel@syr.edu">pjfirrel@syr.edu</a>.
                        If you do not have any projects but just want to talk about UX, video games, or hip-hop, feel free to reach out to me on Twitter at <a className={styles.links} href="https://twitter.com/patrick_firrell">@patrick_firrell</a>. 
                    </Paragraph>
                </Row>
            </Col>
        </section>
    )
}
export default Contact;