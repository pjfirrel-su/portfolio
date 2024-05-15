"use client";

// core components
import { useState, useEffect } from "react";

// next js components
import Image from "next/image";

//custom components
import ButtonUI from "../../components/ButtonUI";
import Col from "../../components/Col";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Heading from "../../components/Heading";
import MobileHeaderProject from "../../components/MobileHeader";
import MobileNavProject from "../../components/MobileNav";
import Navproject from "../../components/Navproject";
import Paragraph from "../../components/Paragraph";
import Row from "../../components/Row";
import Sticky from '../../components/Sticky';
import Video from 'next-video';

import imageStyles from "../../sass/components/image.module.scss";
import styles from "../../sass/components/bars.module.scss";

const VideoGameUI = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

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
              &lt;horror game ui&gt;
            </Heading>
            <Paragraph marginBottom={2}>
              Learning a new creative skill is a fun but frustrating experience that can be intimidating to jump into. For this project, I was tasked with learning a new creative skill for 30 minutes a day for 30 consecutive days. To combine my love for UI/UX design with my love for video games, I decided that I would create animated health indicators for a fictional horror game in what I felt was the scariest program in Adobe&apos;s Suite: After Effects.   
            </Paragraph>
            <Paragraph marginBottom={2}>
              I spent roughly two hours on each iteration, 30 minutes sketching and working in Illustrator and an hour and a half in After Effects. Here are the 9 iterations in the order they were created:   
            </Paragraph>
            <Row paddingBottom={3} alignItems="flex-end">
              <Col sm={4}>
                <Paragraph>
                  This was my first time opening After Effects. I spent most of my time experimenting with basic key frame adjustments.  
                </Paragraph>
              </Col>
              <Col sm={8}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/wiZwHjNuRDA?si=DksQNnIw51lKmBky" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen ></iframe>
              </Col>
            </Row>
            <Row paddingBottom={3} alignItems="flex-end">
              <Col sm={4}>
                <Paragraph>
                  After some research, I found the “Particle World” effect, which is what I used to create this bloody text effect. 
                </Paragraph>
              </Col>
              <Col sm={8}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/nBxgkRua8m8?si=V4DJKvYdD3J9Yf9r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </Col>
            </Row>
            <Row paddingBottom={3} alignItems="flex-end">
              <Col sm={4}>
                <Paragraph>
                  The heartbeat is where the 90-minute time constraint started to become frustrating. I used the bulge effect and experimented with creating liquid drops out of simple strokes.  
                </Paragraph>
              </Col>
              <Col sm={8}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/M_po-kghNJM?si=m1RCdKFPMgZ1jzFG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </Col>
            </Row>
            <Row paddingBottom={3} alignItems="flex-end">
              <Col sm={4}>
                <Paragraph>
                  This was my first time using the “Wiggle Position” effect, and I started feeling more comfortable with key frames.  
                </Paragraph>
              </Col>
              <Col sm={8}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/oUvHdQyuMB8?si=O8iujsqWHWEERX4_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </Col>
            </Row>
            <Row paddingBottom={3} alignItems="flex-end">
              <Col sm={4}>
                <Paragraph>
                  The pentagram might be my favorite iteration. I used the “Trim Path” and “Liquify” effects to create the ink bleed. 
                </Paragraph>
              </Col>
              <Col sm={8}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/vxqBJkROdYA?si=8OKWn0g-IvnS-tDc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </Col>
            </Row>
            <Row paddingBottom={3} alignItems="flex-end">
              <Col sm={4}>
                <Paragraph>
                  The tombstone is one of my cleaner illustrations, but I would have loved to add some dirt falling off if I was not limited in time.  
                </Paragraph>
              </Col>
              <Col sm={8}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/2hZ3HnJVwKo?si=nnxzMjoRx38HWYPX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </Col>
            </Row>
            <Row paddingBottom={3} alignItems="flex-end">
              <Col sm={4}>
                <Paragraph>
                  I started messing with more effects like “Ripple” and “Fractal Noise” to create the moving blood here. 
                </Paragraph>
              </Col>
              <Col sm={8}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/wnwJ2v_DCqY?si=JD8Hojg5nsJ4uVHA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </Col>
            </Row>
            <Row paddingBottom={3} alignItems="flex-end">
              <Col sm={4}>
                <Paragraph>
                  This was my redemption for the somewhat lackluster explosion in the heartbeat iteration. I started seeing some real growth at this point.  
                </Paragraph>
              </Col>
              <Col sm={8}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/4R1rb9zQTj8?si=eoqBdmfpUr94hjsF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </Col>
            </Row>
            <Row paddingBottom={3} alignItems="flex-end">
              <Col sm={4}>
                <Paragraph>
                  I decided to return to the “Particle World” effect but this time increasing the amount of blood created the further the cross turned.
                </Paragraph>
              </Col>
              <Col sm={8}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/utyGMoChBiE?si=iLVr8nOFocgbYLjI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </Col>
            </Row>
            <Paragraph>
                This was simultaneously the most fun and most frustrating project I have done in the last year. After Effects is still scary, but consistent time in the program helped me learn quickly. It also helped that I got to make some cool horror game UI elements.
            </Paragraph>
            <Heading level={1} marginTop={10} marginBottom={10}></Heading>
          </Col>
        </Row>
      </Container>
    </main>
  )
};
export default VideoGameUI;