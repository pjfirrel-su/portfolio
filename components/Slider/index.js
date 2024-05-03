import React, { useState } from "react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faAngleLeft,
//   faAngleRight
// } 
// from "@fortawesome/free-solid-svg-icons";

const Slider = (props) => {
  const [activeSlide, setactiveSlide] = useState(props.activeSlide);

  // const next = () =>
  //   activeSlide < props.data.length - 1 && setactiveSlide(activeSlide + 1);

  // const prev = () => activeSlide > 0 && setactiveSlide(activeSlide - 1);

  const getStyles = (index) => {
    if (activeSlide === index)
      return {
        opacity: 1,
        transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
        zIndex: 10
      };
    else if (activeSlide - 1 === index)
      return {
        opacity: 1,
        transform: "translateX(-240px) translateZ(-400px) rotateY(35deg)",
        zIndex: 9
      };
    else if (activeSlide + 1 === index)
      return {
        opacity: 1,
        transform: "translateX(240px) translateZ(-400px) rotateY(-35deg)",
        zIndex: 9
      };
  };

  return (
    <>
      {/* carousel */}
      <div className="slideC">
        {props.data.map((item, i) => (
          <React.Fragment key={item.id}>
            <div
              className="slide"
              style={{
                background: item.bgColor,
                boxShadow: `0 5px 20px ${item.bgColor}30`,
                ...getStyles(i)
              }}
            >
              <SliderContent {...item} />
            </div>
            <div
              className="reflection"
              style={{
                background: `linear-gradient(to bottom, ${item.bgColor}40, transparent)`,
                ...getStyles(i)
              }}
            />
          </React.Fragment>
        ))}
      </div>
      {/* carousel */}

      {/* <div className="btns">
        <FontAwesomeIcon
          className="btn"
          onClick={prev}
          icon={faAngleLeft}
          color="#fff"
          size="2x"
        />
        <FontAwesomeIcon
          className="btn"
          onClick={next}
          icon={faAngleRight}
          color="#fff"
          size="2x"
        />
      </div> */}
    </>
  );
};
export default Slider;

const SliderContent = (props) => {
  return (
    <div className="sliderContent">
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </div>
  );
};

