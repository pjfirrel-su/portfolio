"use client";

// core components
import { useState, useEffect } from "react";

// next js components
import Image from "next/image";

//custom components
import About from "../components/About";
import ButtonUI from "../components/ButtonUI";
import Carousel from "../components/Carousel";
import Col from "../components/Col";
import Contact from "../components/Contact";
import Container from "../components/Container";
import MobileNav from "../components/MobileNav";
import Nav from "../components/Nav";
import Row from "../components/Row";
import Sticky from '../components/Sticky';

const Homepage = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  return (
    <Container max>
      <Row justifyContent="flex-start">
        <Col md={3} paddingLeft={1}>
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
            <Nav />
          </Sticky>
        </Col>
        <Col md={9} paddingLeft={3} paddingRight={3}>
          <div id="work">
            <Carousel/>
          </div>
          <div id="about">
            <About />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </Col>
      </Row>
    </Container>
  )
};
export default Homepage;