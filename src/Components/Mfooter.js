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
  margin-top: 60px;
  p {
    font-size: 8px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: 0.16px;
    color: #fff;
    margin-top: 5px;
    margin-bottom: 7px;
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
  height: 18px;
  a {
    width: 140px;
    display: flex;
    justify-content: center;
    position: relative;
    color: #fff;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: 0.24px;
    :nth-child(1) {
      padding-right: 10px;
      justify-content: flex-end;
    }
    :nth-child(2) {
      padding-left: 10px;
      justify-content: flex-start;
    }
    :nth-child(1)::before {
      content: "";
      width: 1px;
      height: 80%;
      top: 50%;
      transform: translateY(-50%);
      background-color: #fff;
      position: absolute;
      right: 0;
    }
  }
`;
export default () => {
  return (
    <Footer>
      <ButtonBox>
        <a href={Privacy} target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </a>
        <a href={Terms} target="_blank" rel="noopener noreferrer">
          Terms &#38; Conditions
        </a>
      </ButtonBox>
      <p>Copyright © 2019 ALLA CLASSIC GLOBAL PTE. LTD. All rights reserved.</p>
    </Footer>
  );
};
