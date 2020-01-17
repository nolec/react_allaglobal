import React, { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "../../../../Context";

const Warpper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1200px;
  margin: auto;
`;
const GridBox = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto-fit);
  grid-template-columns: repeat(3, auto-fit);
  grid-column-gap: 210px;
  grid-row-gap: 133px;
  grid-auto-flow: column;
`;
const Card = styled.div`
  &:nth-child(1) {
    grid-row: 1 / span 2;
    position: relative;
    &::before {
      content: "";
      width: 348px;
      height: 348px;
      background-color: #def7ff;
      position: absolute;
      top: -30%;
      left: -80%;
      z-index: -1;
      border-radius: 100%;
    }
  }
  &:nth-child(2) {
    grid-row: 2 / span 2;
    grid-column: 2 / span 1;
  }
  &:nth-child(3) {
    grid-row: 3 / span 2;
    grid-column: 3 / span 1;
  }
  &:nth-child(4) {
    grid-row: 4 / span 2;
    grid-column: 2 / span 1;
  }
  &:nth-child(5) {
    grid-row: 5 / span 2;
    grid-column: 1 / span 1;
  }
`;
const Img = styled.img``;
export default () => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Warpper>
          <GridBox>
            {theme.grid.map((img, i) => (
              <Card key={i}>
                <Img src={img} />
              </Card>
            ))}
          </GridBox>
        </Warpper>
      )}
    </ThemeContext.Consumer>
  );
};
