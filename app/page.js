"use client";

// core components
import { useState, useEffect } from "react";

// next js components
import Image from "next/image";

//custom components
import About from "../components/About";
import Carousel from "../components/Carousel";
import Col from "../components/Col";
import Contact from "../components/Contact";
import Container from "../components/Container";
import Nav from "../components/Nav";
import Row from "../components/Row";
import Sticky from '../components/Sticky';

const Homepage = () => {
  return (
    <Container max>
      <Row justifyContent="flex-start">
        <Col sm={4} md={3} paddingLeft={1}>
          <Sticky>
            <Nav />
          </Sticky>
        </Col>
        <Col sm={8} md={9} paddingLeft={3} paddingRight={3}>
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