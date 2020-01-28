import React from "react";
import styled from "styled-components";
import Second from "./second";
import Third from "./third";
import PdfFile from "../../assets/AllA_Whitepaper_KR_1.0.134c5d76.pdf";

const Container = styled.div`
  width: 100%;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 411px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: linear-gradient(152deg, #6f86d6 18%, #48c6ef 84%);
    z-index: -1;
  }
`;
const Box = styled.div`
  align-items: center;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
`;
const ContentBox = styled.div`
  color: #ffffff;
  @media screen and (max-height: 375px) {
    z-index: 1;
  }
`;
const Content = styled.div`
  margin-top: 75px;
  padding: 0 20px;
`;
const SubTitle = styled.h2`
  width: 100%;
  text-align: center;
  height: 41px;
  font-size: 28px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.46;
  letter-spacing: normal;
  margin-bottom: 10px;
  margin-top: 0;
`;
const Infor = styled.p`
  width: 317px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.3px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 26px;
`;
const AndroidBtn = styled.a`
  background-image: url(${props => props.andUrl});
`;
const IOSBtn = styled.a`
  background-image: url(${props => props.iosUrl});
  cursor: pointer;
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    width: 150px;
    height: 39px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
`;

const BgBox = styled.div`
  position: relative;
  margin-top: 43px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  width: 100%;
  height: 262px;
  background-image: url(${props => props.theme.file.mphone_1});
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translate(-100%);
    top: 26px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    width: 108px;
    height: 221px;
    object-fit: contain;
    background-image: url(${props => props.theme.file.mphone_3});
    z-index: -1;
  }
  &::after {
    content: "";
    position: absolute;
    right: 50%;
    transform: translate(100%);
    top: 26px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    width: 108px;
    height: 221px;
    object-fit: contain;
    background-image: url(${props => props.theme.file.mphone_2});
    z-index: -1;
  }
`;
const MhomePresenter = () => (
  <Container>
    <Box>
      <ContentBox>
        <Content>
          <SubTitle>AllA Wallet</SubTitle>
          <Infor>
            누구나 쉽게 체험하는 채굴의 혜택,
            <br />
            지금 시작해보세요.
          </Infor>
          <ButtonBox>
            <AndroidBtn
              href={
                "https://play.google.com/store/apps/details?id=io.allawallet.allaglobal"
              }
              andUrl={require("../../assets/google_btn.png")}
            />
            <IOSBtn
              href={PdfFile}
              iosUrl={require("../../assets/biz_plan_btn.png")}
            />
          </ButtonBox>
        </Content>
        <BgBox></BgBox>
      </ContentBox>
    </Box>
    <Second />
    <Third />
  </Container>
);

MhomePresenter.propTypes = {};

export default MhomePresenter;
