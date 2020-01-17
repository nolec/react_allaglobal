import React, { useContext, useState } from "react";
import styled from "styled-components";
import ThemeContext from "../../../../Context";
import { Button } from "@material-ui/core";
import { device } from "../../../../device";

const Warpper = styled.div`
  position: relative;
  max-width: 300px;
  height: 600px;
  margin: 0 auto;
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    outline: 5px solid #61dafb;
    position: absolute;
    top: 0;
    left: 0;
  }
  &.active-slide-0 #card-0 {
    opacity: 1;
    transform: scale(1);
    background-color: #f3f3f3;
    border-color: #f3f3f3;
  }
  &.active-slide-1 #card-1 {
    opacity: 1;
    transform: scale(1);
    background-color: #f3f3f3;
    border-color: #f3f3f3;
  }
  &.active-slide-2 #card-2 {
    opacity: 1;
    transform: scale(1);
    background-color: #f3f3f3;
    border-color: #f3f3f3;
  }
  &.active-slide-3 #card-3 {
    opacity: 1;
    transform: scale(1);
    background-color: #f3f3f3;
    border-color: #f3f3f3;
  }
  &.active-slide-4 #card-4 {
    opacity: 1;
    transform: scale(1);
    background-color: #f3f3f3;
    border-color: #f3f3f3;
  }
`;
const GridBox = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
`;
const Card = styled.div`
  flex: 1;
  opacity: 0.7;
  transform: scale(0.8);
  box-shadow: none;
  background-color: white;
  border-color: white;
  transition: opacity 300ms linear, border-color 300ms linear,
    background-color 300ms linear,
    transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  /* &:not(:last-child) {
    margin-right: 75px;
  } */
`;
const Btn = styled(Button)`
  && {
    position: absolute;
    top: 0%;
    z-index: 10;
    &:nth-child(1) {
      right: 0;
    }
    &:nth-child(2) {
      left: 0;
    }
  }
`;
const Img = styled.img``;
export default () => {
  const con = useContext(ThemeContext);
  const [property, setProperty] = useState(con.slide[2]);
  const [properties, setProperties] = useState(con.slide);
  const nextProperty = () => {
    const newIndex = property.index + 1;
    setProperty(properties[newIndex]);
    console.log(properties);
  };
  const prevProperty = () => {
    const newIndex = property.index - 1;
    setProperty(properties[newIndex]);
    console.log(properties);
  };
  return (
    <>
      <Warpper className={`active-slide-${property.index}`}>
        <Btn
          onClick={nextProperty}
          disabled={property.index === properties.length - 1}
        >
          Next
        </Btn>
        <Btn onClick={prevProperty} disabled={property.index === 0}>
          Prev
        </Btn>
        <GridBox
          style={{
            transform: `translateX(-${property.index *
              ((295 * 5) / properties.length)}px)`
          }}
        >
          {Array.isArray(properties) &&
            properties.map(property => (
              <Card key={property.index} id={`card-${property.index}`}>
                <Img src={property.picture} />
              </Card>
            ))}
        </GridBox>
      </Warpper>
    </>
  );
};
