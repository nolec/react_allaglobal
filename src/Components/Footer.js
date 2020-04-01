import React from "react";
import styled from "styled-components";
import Terms from "../assets/terms_conditions_AllA.pdf";
import B_logo from "../assets/alla_logo.png";

const Footer = styled.footer`
  background-color: #fff;
  height: 100px;
  margin-top: 20px;
  p {
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: 0.5px;
  }
`;
const Wrapper = styled.div`
  height: 100%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Pbox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 0 0 75%;
  span {
    position: relative;
  }
  span:last-child {
    padding-left: 30px;
    ::before {
      content: "";
      width: 1px;
      height: 80%;
      position: absolute;
      top: 50%;
      left: 15px;
      background-color: #dfdfdf;
      transform: translateY(-50%);
    }
  }
  span:first-child {
    padding-left: 0px;
    ::before {
      content: none;
    }
  }
  /* ::after {
    content: "";
    width: 1px;
    height: 80%;
    position: absolute;
    top: 50%;
    right: -3%;
    background-color: #dfdfdf;
    transform: translateY(-50%);
  } */
`;
const Span = styled.span`
  a {
    display: inline-block;
    position: relative;
    :nth-child(1) {
      padding-right: 10px;
    }
    :nth-child(2) {
      padding-left: 10px;
    }
    :nth-child(1)::before {
      content: "";
      width: 1px;
      height: 80%;
      background-color: skyblue;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;
const Logo = styled.div`
  display: flex;
  padding: 10px;
  flex: 0 0 25%;
`;
export default () => {
  return (
    <Footer>
      <Wrapper>
        <Pbox>
          <p>
            <span>(주) 씨놀 메가엑스 대표이사 : 이재현</span>
          </p>
          <p>
            <span>대전광역시 서구 월평새뜸로 5, 패션월드 260호</span>
            <span>사업자등록번호 : 371-88-01248</span>
          </p>
          <p>
            <span>개인정보보호책임자 : 복성현</span>
            <span>
              FAMILY SITE : <a href="http://shemcafe.com">(주) 씨놀 메가엑스</a>
            </span>
          </p>
          <p>
            <span>Copyright ⓒ 2018 SEANOL PTE, LTD. ALL rights reserved.</span>
            <Span>
              {" "}
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
            </Span>
          </p>
        </Pbox>
        <Logo>
          <img src={B_logo} />
        </Logo>
      </Wrapper>
    </Footer>
  );
};
