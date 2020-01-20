import React from "react";
import styled from "styled-components";
import Grid from "./Grid";

const Box = styled.div`
  overflow: hidden;
  max-width: 100%;
  margin-bottom: 100px;
  padding-top: 130px;
  position: relative;
  .grid-box {
    max-width: 1200px;
    margin: auto;
    display: grid;
    grid-template-rows: auto auto;
    margin-bottom: 150px;
  }
  .grid-item {
    margin-top: 100px;
  }
  .grid-pbox {
    max-width: 425px;
    margin: auto;
    p:last-child {
      margin-top: 20px;
    }
  }
  &::before {
    content: "";
    width: 90%;
    height: 120%;
    position: absolute;
    background-image: url(/static/media/pass.eb2c2fdf.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center left;
    z-index: -2;
    right: -12%;
    top: -10%;
  }
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url(${props => props.theme.file.line});
    background-size: auto;
    background-repeat: no-repeat;
    background-position: 10% -5%;
    z-index: -1;
    top: 39%;
    right: 0%;
  }
`;
const GridIcon = styled.div`
  ${props => props.theme.style.gridicon(114, 114, 0)}
  margin-bottom : 20px;
`;
const GridContent = styled.div`
  ${props => props.theme.style.gridh3(25)}
  ${props => props.theme.style.gridp()}
`;
const Img = styled.img.attrs({
  src: props => props.theme.file.icon_3
})``;
export default () => {
  return (
    <Box id="section4">
      <div className="grid-box">
        <div>
          <div className="grid-item">
            <GridIcon>
              <Img />
            </GridIcon>
            <GridContent>
              <h3>스마트한 쇼핑, 마켓</h3>
              <div className="grid-pbox">
                <p>
                  A월드에서는 코인으로 제휴 상품 구매가 가능합니다. <br />{" "}
                  원터치로 결제하는 스마트한 쇼핑이 시작됩니다.
                </p>
              </div>
            </GridContent>
          </div>
        </div>
      </div>
      <Grid></Grid>
    </Box>
  );
};
