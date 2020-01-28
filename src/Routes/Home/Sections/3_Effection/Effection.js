import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Card from "./Card";
import Scene from "../../../../ScrollMagic";
// import { AutoRotatingCarousel } from "material-auto-rotating-carousel";

const Box = styled.div`
  margin-bottom: 0px;
  .grid-box {
    max-width: 1200px;
    margin: auto;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    margin-bottom: 173px;
  }
  .grid-item {
  }
  .grid-pbox {
    max-width: 425px;
    margin: auto;
    margin-bottom: 29px;
    p:last-child {
      margin-top: 20px;
    }
  }
`;
const Div = styled.div`
  > div {
    opacity: 0;
    transform: translateY(-150px);
  }
`;
const GridIcon = styled.div`
  ${props => props.theme.style.gridicon(114, 114, 0)}
  margin-bottom: 24px;
`;
const GridContent = styled.div`
  ${props => props.theme.style.gridh3(23)}
  ${props => props.theme.style.gridp()}
`;
const Img = styled.img.attrs({
  src: props => props.theme.file.icon_2
})``;
export default () => {
  const effection = useRef(null);
  useEffect(() => {
    Scene(effection.current.children, 0.8);
  }, []);
  return (
    <Box id="section3">
      <div className="grid-box">
        <Div ref={effection}>
          <div className="grid-item">
            <GridIcon>
              <Img />
            </GridIcon>
            <GridContent>
              <h3>누구나 쉽게 체험하는 채굴의 혜택</h3>
              <div className="grid-pbox">
                <p>
                  단 2번의 터치만으로 시작하는 <br />
                  채굴의 헤택을 바로 경험해 보세요.
                </p>
                <p>
                  직관적인 UI와 감각적인 디자인으로 <br />내 채굴 수익을 한 눈에
                  관리할 수 있습니다.
                </p>
              </div>
            </GridContent>
          </div>
        </Div>
      </div>
      <Card />
    </Box>
  );
};
