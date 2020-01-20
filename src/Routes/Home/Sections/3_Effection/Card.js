import React, { useContext, useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ThemeContext from "../../../../Context";
import { Button } from "@material-ui/core";
// import Carousel from "./Carousel";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
  &:before,
  &:after {
    content: "";
    display: block;
    width: 50%;
    height: 120%;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 1) 15%,
      rgba(255, 255, 255, 0) 100%
    );
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
  &:after {
    left: auto;
    right: 0;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 1) 15%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  ${props =>
    props.css &&
    props.css.map(
      property =>
        `.cards-slider.active-slide-${property.index} #card-${property.index} {
     opacity: 1;
     transform: scale(1);
     background-color: #f3f3f3;
     border-color: #f3f3f3;`
    )};
`;
const Slider = styled.div`
  position: relative;
  max-width: 296px;
  height: 100%;
  margin: 0 auto;
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 600px;
    /* border: 5px solid #61dafb; */
    position: absolute;
    top: 0;
    left: 0;
  }
`;
const Wrapper = styled.div`
  display: flex;
  position: absolute;
  transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
`;
const Card = styled.div`
  flex: 1;
  min-width: 200px;
  opacity: 0.7;
  transform: scale(0.8);
  /* transition: all 1s linear; */
  /* transition: opacity 300ms linear, border-color 300ms linear,
    background-color 300ms linear,
    transform 500ms cubic-bezier(0.455, 0.03, 0.515, 0.955); */
`;
const Controls = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const Img = styled.img``;

export default () => {
  const con = useContext(ThemeContext);
  const [properties, setProperties] = useState(con.slide); //이미지들
  const [property, setProperty] = useState(properties[2]); //이미지들
  const [checkIndex, setCheckIndex] = useState(0);
  const slideIndex = useRef(null);

  const nextProperty = () => {
    const newIndex = property.index;
    setProperty(properties[newIndex]);
  };

  const prevProperty = () => {
    const newIndex = property.index - 2;
    setProperty(properties[newIndex]);
  };
  const styleSetting = () => {
    const compare = slideIndex.current.classList[3].split("-", 3)[2];
    setCheckIndex(compare);
    console.log(checkIndex, property.index);
  };
  useEffect(() => {
    styleSetting();
  }, [property]);

  return (
    <>
      <Container className="swiper-container" css={properties}>
        <Slider
          ref={slideIndex}
          className={`cards-slider active-slide-${property.index}`}
        >
          <Wrapper
            className="swiper-wrapper"
            style={{
              transition: ".3s linear",
              transform: `translateX(calc(20% - ${property.index *
                (100 / properties.length)}%))`
            }}
          >
            {/* {properties.length > 0 && (
            <Carousel
              imgList={properties}
              img_width={295}
              img_height={600}
              visibleImages={5}
              duration={750}
            />
          )} */}
            {/*내꺼*/}
            {/* {properties.length > 0 &&
            properties.map((property, i) => {
              const picture = property.picture;
              const dn = visibleItemsProps.order.indexOf(i) === -1; // To not to show images that are out of visibility scope
              const styles = visibleItemsProps[i]
                ? visibleItemsProps[i].styles
                : {};
              console.log(styles);
              return (
                <Card
                  style={styles}
                  key={property.index}
                  onClick={e => changeCenter(i)}
                >
                  <Img src={picture} />
                </Card>
              );
            })} */}
            {properties.length > 0 &&
              properties.map((property, i) => {
                const styles = {
                  opacity: "1",
                  transform: "scale(1)",
                  backgroundColor: "#f3f3f3",
                  transition: "all .3s linear"
                };

                return (
                  <Card
                    key={property.index}
                    id={`card-${property.index}`}
                    className="card"
                    style={
                      parseInt(checkIndex) === property.index ? styles : null
                    }
                  >
                    <Img src={property.picture} />
                  </Card>
                );
              })}
          </Wrapper>
        </Slider>
        <Controls>
          <Button onClick={prevProperty} disabled={property.index === 0}>
            Prev
          </Button>
          <Button
            onClick={nextProperty}
            disabled={property.index === properties.length - 1}
          >
            Next
          </Button>
        </Controls>
      </Container>
    </>
  );
};
