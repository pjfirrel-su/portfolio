"use client";

// core components
import { useState, useEffect } from "react";

// next js components
import Image from "next/image";

//custom components
import ButtonUI from "../../components/ButtonUI";
import Col from "../../components/Col";
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import MobileNav from "../../components/MobileNav";
import Navproject from "../../components/Navproject";
import Paragraph from "../../components/Paragraph";
import Row from "../../components/Row";
import Sticky from '../../components/Sticky';

import imageStyles from "../../sass/components/image.module.scss";

const Summit = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  return (
    <main>
      <Container max>
        <Row justifyContent="flex-start">
          <Col sm={4} md={3} paddingLeft={1}>
            <ButtonUI 
              icon="bars"
              clickHandler={() => {
                setIsMobileNavVisible(true);
              }}
            />
            {isMobileNavVisible && <MobileNav closeHandler={() => {
              setIsMobileNavVisible(false);
            }}/>}
            <Sticky>
              <Navproject />
            </Sticky>
          </Col>
          <Col sm={8} md={9} paddingLeft={3} paddingRight={3}>
            <Heading level={1} marginTop={7} marginBottom={3}>
              &lt;summit&gt;
            </Heading>
            <Paragraph marginBottom={2}>
            “How do I communicate someone&apos;s personality entirely through type?”
            </Paragraph>
            <Paragraph marginBottom={2}>
              This was the question I sought to answer through this class project for Typographic Design. I was tasked with creating an original typeface inspired by a faculty member of my choice at Syracuse University&apos;s Newhouse School, sharpening not only my typographic skills, but my ability to empathize through design. 
            </Paragraph>
            <Row paddingBottom={3} alignItems="flex-end">
              <Col sm={4}>
                <Paragraph>
                  I used three phrases that described Professor Santosuosso as a starting point for the typeface: “bold,” “direct,” and “to the point.”
                </Paragraph>
              </Col>
              <Col sm={8}>
                <Image
                  src="/summit_bold_sketch.png"
                  alt="Screenshot from Glyphs software with the word 'Bold'"
                  height={300}
                  width={500}
                  className={imageStyles.responsive__image}
                />
              </Col>
            </Row>
            <Row paddingBottom={3} alignItems="flex-end">
              <Col sm={4}>
                <Paragraph>
                  The biggest challenge was executing the curves. I did not want a perfectly geometric typeface as humans are not perfect.
                </Paragraph>
              </Col>
              <Col sm={8}>
                <Image
                  src="/summit_bold_sketch.png"
                  alt="Screenshot from Glyphs software with the word 'Bold'"
                  height={300}
                  width={500}
                  className={imageStyles.responsive__image}
                />
              </Col>
            </Row>
            <Paragraph>
              The most important part of this project was the research. Understanding who the professor is, how she teaches, and what she values was critical to the design process. I learned a great deal about the importance of empathy in design through this project and gained an incredible respect for type designers. 
            </Paragraph>
            <Heading level={1} marginTop={10} marginBottom={10}></Heading>
          </Col>
        </Row>
      </Container>
    </main>
  )
};
export default Summit;