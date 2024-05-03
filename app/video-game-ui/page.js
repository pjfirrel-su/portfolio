"use client";

// core components
import { useState, useEffect } from "react";

// next js components
import Image from "next/image";

//custom components
import Col from "../../components/Col";
import Container from "../../components/Container";
import Navproject from "../../components/Navproject";
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
              <div>
                  Summit
              </div>
          </Col>
        </Row>
      </Container>
    </main>
  )
};
export default Summit;