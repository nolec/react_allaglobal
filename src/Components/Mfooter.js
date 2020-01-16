import React from "react";
import styled from "styled-components";
import Privacy from "../assets/privacy_policy_AllA.pdf";
import Terms from "../assets/terms_conditions_AllA.pdf";

const Footer = styled.footer`
  max-height: 107px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  p {
    font-size: 8px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: 0.16px;
    color: #fff;
    margin-top: 20px;
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
const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px;
  a {
    width : 140px;
    display: flex;
    justify-content : center;
    position: relative;
    color : #fff;
    font-size: 10px;
    font-weight : inherit;
    :nth-child(1) {
      padding-right: 10px;
    }
    :nth-child(2) {
      padding-left: 10px;
    }
    :nth-child(1)::before {
      content: "";
      width: 1px;
      height: 100%;
      background-color: skyblue;
      position: absolute;
      right: 0;
    }
  }
`;
export default () => {
  return (
    <Footer>
      <p>Copyright © 2019 ALLA CLASSIC GLOBAL PTE. LTD. All rights reserved.</p>
      <ButtonBox>
        <a href={Privacy} target="_blank">
          Privacy Policy
        </a>
        <a href={Terms} target="_blank">
          Terms &#38; Conditions
        </a>
      </ButtonBox>
    </Footer>
  );
};
