import React from "react";
import styled from "styled-components";
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
export default () => {
  return (
    <Footer>
      <p>Copyright © 2019 ALLA CLASSIC GLOBAL PTE. LTD. All rights reserved.</p>
    </Footer>
  );
};
