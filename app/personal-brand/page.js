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
import Video from "next-video";

import imageStyles from "../../sass/components/image.module.scss";

import socials_mock_up from "../../videos/socials_mock_up.mp4";

const PersonalBrand = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  return (
    <main>
      <Container max>
        <Row justifyContent="flex-start">
          <Col sm={0} md={3} paddingLeft={1}>
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
          <Col sm={12} md={9} paddingLeft={6} paddingRight={6}>
            <Heading level={1} marginTop={7} marginBottom={3}>
              &lt;personal brand&gt;
            </Heading>
            <Paragraph marginBottom={3}>
                The main idea I wanted to express with my redesigned personal brand was a connection between technology and people. I wanted something that would show viewers that I have design skills as well as some basic programming skills.   
            </Paragraph>
            <Row paddingBottom={3} alignItems="flex-end">
              <Col sm={4}>
                <Paragraph>
                    Ideating solutions for this may have been the most time-consuming part of the entire project. 
                </Paragraph>
              </Col>
              <Col sm={8}>
                <Image
                  src="/personal_sketch.png"
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
                    The two circles in the logo represent people while the greater than and less than signs are an integral part of most coding languages, reinforcing my “people-centered solutions” tagline. 
                </Paragraph>
              </Col>
              <Col sm={8}>
                <Image
                  src="/personal_logo.png"
                  alt="Screenshot from Glyphs software with the word 'Bold'"
                  height={300}
                  width={500}
                  className={imageStyles.responsive__image}
                />
              </Col>
            </Row>
            <Paragraph marginBottom={3}>
                Two triumphs from this project are my final logo design and the social posts I created. Coming up with a suitable logo was the most difficult part of this project, and I am proud of how it turned out. As for the social posts, I think the countdown works well with the system as a whole, and the additions of the typing sounds and the animated logo make the posts seem more professional than silent, static images.
            </Paragraph>
            <iframe width="800" height="500" src="https://www.youtube.com/embed/wUEJ6rIgwok?si=hquvGCVZ2T5ciC4-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <Heading level={1} marginTop={3} marginBottom={0}></Heading>

            <Image 
                src="/personal_stationery_1.png"
                alt="Screenshot from Glyphs software with the word 'Bold'"
                height={300}
                width={500}
                className={imageStyles.responsive__image}
            />
            <Heading level={1} marginTop={3} marginBottom={0}></Heading>
            <Image 
                src="/personal_stationery_2.png"
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
export default PersonalBrand;