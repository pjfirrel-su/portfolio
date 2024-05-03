"use client";

// core components
import { useState, useEffect } from "react";

// next js components
import Image from "next/image";

//custom components
import Col from "../../components/Col";
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import Navproject from "../../components/Navproject";
import Paragraph from "../../components/Paragraph";
import Row from "../../components/Row";
import Sticky from '../../components/Sticky';

const Summit = () => {
  return (
    <main>
      <Container max>
        <Row justifyContent="flex-start">
          <Col sm={4} md={3} paddingLeft={1}>
            <Sticky>
              <Navproject />
            </Sticky>
          </Col>
          <Col sm={8} md={9} paddingLeft={3} paddingRight={3}>
            <Heading level={1}>
              &lt;Summit&gt;
            </Heading>
            <Paragraph marginBottom={2}>
            “How do I communicate someone&apos;s personality entirely through type?”
            </Paragraph>
            <Paragraph marginBottom={2}>
              This was the question I sought to answer through this class project for Typographic Design. I was tasked with creating an original typeface inspired by a faculty member of my choice at Syracuse University&apos;s Newhouse School, sharpening not only my typographic skills, but my ability to empathize through design. 
            </Paragraph>
            <Row>
              <Col sm={3}>
                <Paragraph>I used three phrases that described Professor Santosuosso as a starting point for the typeface: “bold,” “direct,” and “to the point.” </Paragraph>
              </Col>
                <Image
                  src="/summit_bold_sketch.png"
                  alt="Screenshot from Glyphs software with the word 'Bold'"
                  height={300}
                  width={500}
                />
              <Col sm={9}>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </main>
  )
};
export default Summit;