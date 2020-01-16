import React, { useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import { TweenLite } from "gsap";
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
    height: 560px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url(${require("../../assets/bg2.png")});
    z-index: -1;
  }
`;
const Box = styled.div`
  align-items: center;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 51.4px;
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
  left: 30px;
  margin-top: 60px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 80% center;
  width: 312px;
  height: 201px;
  background-image: url(${props => props.BgUrl});
`;
const Phone = () => {
  const phone = useRef();

  useLayoutEffect(() => {
    if (phone.current) {
      TweenLite.from(phone.current, 1, { y: -300, opacity: 0 });
      console.log(phone.current);
    }
  });

  return <BgBox BgUrl={require("../../assets/Mockup_2.png")} />;
};
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
              href={"http://allaglobal.com/download/alla.apk"}
              andUrl={require("../../assets/google_btn.png")}
            />
            <IOSBtn
              href={PdfFile}
              iosUrl={require("../../assets/biz_plan_btn.png")}
            />
          </ButtonBox>
        </Content>
      </ContentBox>
      <Phone />
    </Box>
    <Second />
    <Third />
  </Container>
);

MhomePresenter.propTypes = {};

export default MhomePresenter;
