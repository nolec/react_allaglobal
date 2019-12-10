import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  height: 107px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  p {
    font-size: 8px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: 0.16px;
    color: #fff;
    margin-bottom: 12px;
  }
  ::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 530px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-image: url(${require("../assets/bg2.png")});
    transform: rotate(180deg);
    z-index: -1;
  }
`;
export default () => {
  return (
    <Footer>
      <p>Copyright © 2019 ALLA CLASSIC GLOBAL PTE. LTD. All rights reserved.</p>
    </Footer>
  );
};
