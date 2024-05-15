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
import MobileHeaderProject from "../../components/MobileHeaderProject";
import Navproject from "../../components/Navproject";
import Paragraph from "../../components/Paragraph";
import Row from "../../components/Row";
import Sticky from '../../components/Sticky';

import imageStyles from "../../sass/components/image.module.scss";

const Pronto = () => {

  return (
    <main>
      <Container max>
        <MobileHeaderProject />
        <Row justifyContent="flex-start">
          <Col sm={0} md={3} paddingLeft={1}>
            <Sticky>
              <Navproject />
            </Sticky>
          </Col>
          <Col sm={12} md={9} paddingLeft={6} paddingRight={6}>
            <Heading level={1} marginTop={7} marginBottom={3}>
              &lt;pronto&gt;
            </Heading>
            <Paragraph marginBottom={2}>
                Pronto is a fictitious tech company that creates SD cards that can wirelessly upload media at 5GB/s. My goal for this project was to develop a logo and branding system that felt interesting enough to set Pronto apart from other SD cards without becoming so out there that the brand would read as something other than an SD card company. 
            </Paragraph>
            <Row paddingBottom={3} alignItems="flex-end">
              <Col sm={4}>
                <Paragraph>
                    My early sketches used things like cameras and arrows to convey the idea of fast upload times. 
                </Paragraph>
              </Col>
              <Col sm={8}>
                <Image
                  src="/pronto_sketch.png"
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
                    I used a sans serif typeface called Prometo for the wordmark, specifically the bold italics to represent the brand as trustworthy, reliable, and forward thinking. 
                </Paragraph>
              </Col>
              <Col sm={8}>
                <Image
                  src="/pronto_logo.png"
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
                    By using black, white, and a dark gray as the brand&apos;s secondary colors, the blue could pop and the brand would still feel like a tech company, albeit an exciting one.  
                </Paragraph>
              </Col>
              <Col sm={8}>
                <Image
                  src="/pronto_sd.png"
                  alt="Screenshot from Glyphs software with the word 'Bold'"
                  height={300}
                  width={500}
                  className={imageStyles.responsive__image}
                />
              </Col>
            </Row>
            <Paragraph>
                The most rewarding parts of the project were designing and assembling the packaging. As a UI/UX designer, I work almost exclusively with digital designs, so fighting with the lab printers was a frustrating experience, but seeing the final box assembled was incredibly gratifying. Now I just need to figure out how to achieve those upload speeds... 
            </Paragraph>
            <Heading level={1} marginTop={3} marginBottom={0}></Heading>
            <Image 
                src="/pronto_packaging.png"
                alt="Screenshot from Glyphs software with the word 'Bold'"
                height={300}
                width={500}
                className={imageStyles.responsive__image}
            />
            <Heading level={1} marginTop={3} marginBottom={0}></Heading>
            <Image 
                src="/pronto_assembled.png"
                alt="Screenshot from Glyphs software with the word 'Bold'"
                height={300}
                width={500}
                className={imageStyles.responsive__image}
            />
            <Heading level={1} marginTop={10} marginBottom={10}></Heading>

          </Col>
        </Row>
      </Container>
    </main>
  )
};
export default Pronto;