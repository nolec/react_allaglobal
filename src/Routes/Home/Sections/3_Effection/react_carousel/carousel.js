import React, { useState, useEffect } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { ArrowForwardIos, ArrowBackIos } from "@material-ui/icons";
import "./carousel.css";

export default props => {
  const [direction, setDirection] = useState("");
  const [active, setActive] = useState(props.active);
  const [items, setItems] = useState(props.items);

  console.log(props, active, items);
  const generateItems = () => {
    let ItemComponent = [];
    let level;

    for (let i = active - 2; i < active + 3; i++) {
      let index = i;
      if (i < 0) {
        index = items.length + i;
      } else if (i >= items.length) {
        index = i % items.length;
      }
      level = active - i;
      ItemComponent.push(<Item key={index} id={items[index]} level={level} />);
      console.log(ItemComponent);
    }
    return ItemComponent;
  };
  const moveLeft = () => {
    var newActive = active;
    newActive--;
    setDirection("left");
    setActive(newActive < 0 ? items.length - 1 : newActive);
  };

  const moveRight = () => {
    var newActive = active;
    setDirection("right");
    setActive((newActive + 1) % items.length);
  };
  return (
    <div id="carousel" className="noselect">
      <div className="arrow arrow-left" onClick={moveLeft}>
        <ArrowBackIos className="fi-arrow-left"></ArrowBackIos>
      </div>
      <ReactCSSTransitionGroup
        transitionName={direction}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {generateItems()}
      </ReactCSSTransitionGroup>
      <div className="arrow arrow-right" onClick={moveRight}>
        <ArrowForwardIos className="fi-arrow-right"></ArrowForwardIos>
      </div>
    </div>
  );
};
const Item = props => {
  console.log(props);
  const level = props.level;
  const className = "item level" + level;
  return <div className={className}>{props.id}</div>;
};
