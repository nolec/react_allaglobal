import React, { useContext, useState } from "react";
import styled from "styled-components";
import ThemeContext from "../../../../Context";
import { Button } from "@material-ui/core";

const Warpper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;
const GridBox = styled.div`
  display: flex;
  justify-content: center;
`;
const Card = styled.div`
  &:not(:last-child) {
    margin-right: 75px;
  }
`;
const Btn = styled(Button)`
  && {
    position: absolute;
    top: -10%;
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
  const [property, setProperty] = useState(con.slide[0]);
  const [properties, setProperties] = useState(con.slide);
  const nextProperty = () => {
    const newIndex = property.index + 1;
    setProperties(properties[newIndex]);
    console.log(properties);
  };
  const prevProperty = () => {
    const newIndex = property.index - 1;
    setProperties(properties[newIndex]);
    console.log(properties);
  };
  return (
    <Warpper>
      <Btn onClick={() => nextProperty()}>Next</Btn>
      <Btn onClick={() => prevProperty()}>Prev</Btn>

      <GridBox
        style={{
          transform: `translateX(-${property.index *
            (100 / properties.length)})`
        }}
      >
        {properties &&
          properties.map(property => (
            <Card className={`slide-${property.index}`} key={property.index}>
              <Img src={property.picture} />
            </Card>
          ))}
      </GridBox>
    </Warpper>
  );
};
