import React from "react";
import styled from "styled-components";
import Terms from "../assets/terms_conditions_AllA.pdf";

const Footer = styled.footer`
  background-color: #fff;
  height: 64px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: 0.32px;
  }
`;
const ButtonBox = styled.div`
  display: flex;
  padding: 10px;
  a {
    position: relative;
    :nth-child(1) {
      padding-right: 10px;
    }
    :nth-child(2) {
      padding-left: 10px;
    }
    display: block;
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
        <a
          href={require("../assets/privacy_policy_AllA.pdf")}
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>
        <a href={Terms} target="_blank" rel="noopener noreferrer">
          Terms &#38; Conditions
        </a>
      </ButtonBox>
    </Footer>
  );
};
