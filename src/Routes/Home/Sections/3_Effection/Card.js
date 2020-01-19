import React, { useContext, useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ThemeContext from "../../../../Context";
// import Carousel from "./Carousel";

const Container = styled.div`
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  /* height: 600px; */
`;
const Card = styled.div`
  /* position: absolute;
  left: 50%;
  transform: translate(-50%); */
`;

const Img = styled.img``;

export default () => {
  const con = useContext(ThemeContext);
  const [properties, setProperties] = useState(con.slide); //이미지들
  const [currFirstImg, setCurrFirstImg] = useState(0); // The Current Middle Element/Primary element of our carousel
  const [visibleItemsProps, setVisibleItemsProps] = useState({
    order: [],
    styles: {}
  }); // Set Styles and ordering to Images currently visible

  const initialSetting = () => {
    const shownItems = {};
    let timesToIterate = 0;
    let curr_center = currFirstImg;
    let curr_center_copy = curr_center;
    while (timesToIterate < properties.length) {
      const styles = {};
      let currImgIndex;
      let currImgIndexOnRight = true; // Tells if in this iteration the currently iterated image lies left to the middle image or not
      if (timesToIterate < 2) {
      } else {
        currImgIndexOnRight = false;
        currImgIndex = curr_center_copy;
        if (curr_center_copy + 1 >= properties.length) {
          // to maintain cyclic carousel
          curr_center_copy = 0;
        } else {
          curr_center_copy++;
        }
      }
      visibleItemsProps.order.push(currImgIndex);
      timesToIterate++;
    }
    setVisibleItemsProps(visibleItemsProps);
    console.log(visibleItemsProps);
  };
  useEffect(() => {
    initialSetting();
  }, []);
  return (
    <>
      <Container className="swiper-container">
        <Wrapper
          className="swiper-wrapper"
          style={{
            height: "600px",
            width: 100 + "%",
            padding: 10 + "px"
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
          {properties.length > 0 &&
            properties.map((property, i) => {
              const picture = property.picture;
              const dn = visibleItemsProps.order.indexOf(i) === -1; // To not to show images that are out of visibility scope
              const styles = visibleItemsProps[i]
                ? visibleItemsProps[i].styles
                : {};
              return (
                <Card
                  className={"imgWrap " + (dn ? "dn" : "")}
                  key={property.index}
                  style={{
                    ...styles,
                    position: "absolute",
                    transition: `all 750ms linear `
                  }}
                  // onClick={e => changeCenter({ e, i, picture })}
                >
                  <Img src={picture} width={295} height={600} />
                </Card>
              );
            })}
        </Wrapper>
        <button class="next">
          <i class="material-icons">keyboard_arrow_right</i>
        </button>
        <button class="prev">
          <i class="material-icons">keyboard_arrow_left</i>
        </button>
      </Container>
    </>
  );
};
