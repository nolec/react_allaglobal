import React, { useContext, useState } from "react";
import ThemeContext from "../../../Context";
import Item from "./Item";

export default () => {
  const con = useContext(ThemeContext);
  console.log(con);
  const [properties, setProperties] = useState(con.slide); //이미지들

  const Image = () => {
    let tempItems = [];
    properties.map(property =>
      tempItems.push(<img style={{ width: "100%" }} src={property.picture} />)
    );
    return tempItems;
  };

  return <Item items={Image()}></Item>;
};
