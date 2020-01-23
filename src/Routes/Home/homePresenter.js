import React, { useRef, useLayoutEffect, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import AllaWallet from "./Sections/1_AllaWallet";
import EasySign from "./Sections/2_EasySign";
import Effection from "./Sections/3_Effection";
import Market from "./Sections/4_Market";
import Video from "./Sections/5_Video";
import Last from "./Sections/6_last";
import { useSpring, animated as a, interpolate } from "react-spring";

const Container = styled(a.div)`
  .col {
    padding: 0 !important;
  }
  ::before {
    content: "";
    position: absolute;
    top: -3%;
    left: 0;
    width: 100%;
    height: 1200px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url(${require("../../assets/artboard.png")});
    z-index: -1;
  }
`;

const HomePresenter = () => {
  return (
    <>
      <Container id="home">
        <AllaWallet />
        <EasySign />
        <Effection />
        <Market />
        <Video />
        <Last />
      </Container>
    </>
  );
};

HomePresenter.propTypes = {};

export default HomePresenter;
