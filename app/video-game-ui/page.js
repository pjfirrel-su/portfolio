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
import Video from 'next-video';

import firrell_passion_vial from "../../videos/firrell_passion_vial.mp4";
import firrell_passion_blood_numbers from "../../videos/firrell_passion_blood_numbers.mp4";
import firrell_passion_heart_beat from "../../videos/firrell_passion_heart_beat.mp4";
import firrell_passion_bloodshot_eye from "../../videos/firrell_passion_bloodshot_eye.mp4";
import firrell_passion_pentagram from "../../videos/firrell_passion_pentagram.mp4";
import firrell_passion_tombstone from "../../videos/firrell_passion_tombstone.mp4";
import firrell_passion_hand_sinking from "../../videos/firrell_passion_hand_sinking.mp4";
import firrell_passion_skull_explosion from "../../videos/firrell_passion_skull_explosion.mp4";
import firrell_passion_cross from "../../videos/firrell_passion_cross.mp4";


import imageStyles from "../../sass/components/image.module.scss";

const VideoGameUI = () => {
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
          <Col sm={8} md={9} paddingLeft={6} paddingRight={6}>
            <Heading level={1} marginTop={7} marginBottom={3}>
              &lt;horror game ui&gt;
            </Heading>
            <Paragraph marginBottom={2}>
              Learning a new creative skill is a fun but frustrating experience that can be intimidating to jump into. For this project, I was tasked with learning a new creative skill for 30 minutes a day for 30 consecutive days. To combine my love for UI/UX design with my love for video games, I decided that I would create animated health indicators for a fictional horror game in what I felt was the scariest program in Adobe&apos;s Suite: After Effects.   
            </Paragraph>
            <Paragraph marginBottom={2}>
              I spent roughly an hour and a half on each iteration, 30 minutes sketching and working in Illustrator and an hour in After Effects. Here are the 10 iterations in the order they were created:   
            </Paragraph>
            <Row paddingBottom={3} alignItems="center">
              <Col sm={4}>
                <Paragraph>
                  This was my first time opening After Effects. I spent most of my time experimenting with basic key frame adjustments.  
                </Paragraph>
              </Col>
              <Col sm={8}>
                <Video
                  src={firrell_passion_vial}
                  alt="Screenshot from Glyphs software with the word 'Bold'"
                  height={300}
                  width={500}
                  className={imageStyles.responsive__image}
                />
              </Col>
            </Row>
            <Row paddingBottom={3} alignItems="center">
              <Col sm={4}>
                <Paragraph>
                  After some research, I found the “Particle World” effect, which is what I used to create this bloody text effect. 
                </Paragraph>
              </Col>
              <Col sm={8}>
                <Video
                  src={firrell_passion_blood_numbers}
                  alt="Screenshot from Glyphs software with the word 'Bold'"
                  height={300}
                  width={500}
                  className={imageStyles.responsive__image}
                />
              </Col>
            </Row>
            <Row paddingBottom={3} alignItems="center">
              <Col sm={4}>
                <Paragraph>
                  The heartbeat is where the 90-minute time constraint started to become frustrating. I used the bulge effect and experimented with creating liquid drops out of simple strokes.  
                </Paragraph>
              </Col>
              <Col sm={8}>
                <Video
                  src={firrell_passion_heart_beat}
                  alt="Screenshot from Glyphs software with the word 'Bold'"
                  height={300}
                  width={500}
                  className={imageStyles.responsive__image}
                />
              </Col>
            </Row>
            <Row paddingBottom={3} alignItems="center">
              <Col sm={4}>
                <Paragraph>
                  This was my first time using the “Wiggle Position” effect, and I started feeling more comfortable with key frames.  
                </Paragraph>
              </Col>
              <Col sm={8}>
                <Video
                  src={firrell_passion_bloodshot_eye}
                  alt="Screenshot from Glyphs software with the word 'Bold'"
                  height={300}
                  width={500}
                  className={imageStyles.responsive__image}
                />
              </Col>
            </Row>
            <Row paddingBottom={3} alignItems="center">
              <Col sm={4}>
                <Paragraph>
                  The pentagram might be my favorite iteration. I used the “Trim Path” and “Liquify” effects to create the ink bleed. 
                </Paragraph>
              </Col>
              <Col sm={8}>
                <Video
                  src={firrell_passion_pentagram}
                  alt="Screenshot from Glyphs software with the word 'Bold'"
                  height={300}
                  width={500}
                  className={imageStyles.responsive__image}
                />
              </Col>
            </Row>
            <Row paddingBottom={3} alignItems="center">
              <Col sm={4}>
                <Paragraph>
                  The tombstone is one of my cleaner illustrations, but I would have loved to add some dirt falling off if I was not limited in time.  
                </Paragraph>
              </Col>
              <Col sm={8}>
                <Video
                  src={firrell_passion_tombstone}
                  alt="Screenshot from Glyphs software with the word 'Bold'"
                  height={300}
                  width={500}
                  className={imageStyles.responsive__image}
                />
              </Col>
            </Row>
            <Row paddingBottom={3} alignItems="center">
              <Col sm={4}>
                <Paragraph>
                  I started messing with more effects like “Ripple” and “Fractal Noise” to create the moving blood here. 
                </Paragraph>
              </Col>
              <Col sm={8}>
                <Video
                  src={firrell_passion_hand_sinking}
                  alt="Screenshot from Glyphs software with the word 'Bold'"
                  height={300}
                  width={500}
                  className={imageStyles.responsive__image}
                />
              </Col>
            </Row>
            <Row paddingBottom={3} alignItems="center">
              <Col sm={4}>
                <Paragraph>
                  This was my redemption for the somewhat lackluster explosion in the heartbeat iteration. I started seeing some real growth at this point.  
                </Paragraph>
              </Col>
              <Col sm={8}>
                <Video
                  src={firrell_passion_skull_explosion}
                  alt="Screenshot from Glyphs software with the word 'Bold'"
                  height={300}
                  width={500}
                  className={imageStyles.responsive__image}
                />
              </Col>
            </Row>
            <Row paddingBottom={3} alignItems="center">
              <Col sm={4}>
                <Paragraph>
                  I decided to return to the “Particle World” effect but this time increasing the amount of blood created the further the cross turned.
                </Paragraph>
              </Col>
              <Col sm={8}>
                <Video
                  src={firrell_passion_cross}
                  alt="Screenshot from Glyphs software with the word 'Bold'"
                  height={300}
                  width={500}
                  className={imageStyles.responsive__image}
                />
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