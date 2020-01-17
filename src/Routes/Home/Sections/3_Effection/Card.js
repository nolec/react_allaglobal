import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import ThemeContext from "../../../../Context";
import { Button } from "@material-ui/core";
import AliceCarousel from "react-alice-carousel";

const Container = styled.div`
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  .swiper-slide {
    /* width: auto !important; */
  }
`;
const Card = styled.div``;

const Img = styled.img``;
export default () => {
  const con = useContext(ThemeContext);
  const [properties, setProperties] = useState(con.slide);

  useEffect(() => {}, []);
  return (
    <>
      <Container className="swiper-container">
        <Wrapper className="swiper-wrapper">
          <AliceCarousel autoPlay={true}>
            {/* It is important to set "left" style prop on every slide */}
            {properties.map((slide, index) => (
              <div
                className="swiper-slide"
                key={index}
                style={{ left: `${properties.offset}px` }}
              >
                <Img src={slide.picture} />
              </div>
            ))}
          </AliceCarousel>
        </Wrapper>
      </Container>
    </>
  );
};
