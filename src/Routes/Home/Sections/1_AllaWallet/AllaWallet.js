import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Scene from "../../../../ScrollMagic";

const Box = styled.div`
  ${props => props.theme.style.boxStyle}
  color: #fff !important;
  display: flex;
  margin-bottom: 100px;
`;
const ContentBox = styled.div``;
const Title = styled.h1`
  width: 184px;
  height: 52px;
  font-size: 35px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.49;
  letter-spacing: normal;
  display: inline-block;
  margin-bottom: 20px;
  margin-top: 0px;
`;
const Content = styled.div``;
const Wrapper = styled.div`
  margin-top: 168px;
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  > div {
    opacity: 0;
    transform: translateY(-100px);
  }
  .active {
    opacity: 1;
    transform: translateY(0);
    transition: 0.5s linear;
  }
`;
const Infor = styled.p`
  width: 347px;
  height: 72px;
  font-size: 24px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.48px;
  margin-bottom: 40px;
`;
const AndroidBtn = styled.a`
  background-image: url(${props => props.theme.file.andUrl});
`;
const IOSBtn = styled.a`
  background-image: url(${props => props.theme.file.iosUrl});
`;
const APKBtn = styled.a`
  background-image: url(${props => props.theme.file.apkUrl});
`;
const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  a {
    width: 270px;
    height: 60px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    :not(:first-child) {
      margin-top: 20px;
    }
  }
`;
const Img = styled.img.attrs(props => ({
  src: props.theme.file.phone_1
}))``;
const Img2 = styled.img.attrs(props => ({
  src: props.theme.file.phone_2
}))``;
const Img3 = styled.img.attrs(props => ({
  src: props.theme.file.phone_3
}))``;
const BgBox = styled.div`
  width: 538px;
  margin-top: 36px;
  position: relative;
  object-fit: contain;
  display: flex;
  justify-content: flex-end;
  > div {
    width: 100%;
    &:nth-of-type(1) {
      z-index: 1;
      ${Img} {
        width: 300px;
        height: 600px;
        margin: auto;
        display: block;
      }
    }
    &:nth-of-type(2) {
      width: 250px;
      height: 500px;
      position: absolute;
      left: 0;
      top: 47px;
      img {
        width: 100%;
      }
    }
    &:nth-of-type(3) {
      width: 250px;
      height: 500px;
      position: absolute;
      right: 0;
      top: 47px;
      img {
        width: 100%;
      }
    }
  }
`;
export default () => {
  const wallet = useRef(null);
  useEffect(() => {
    Scene(wallet.current.children, 1);
  }, []);
  return (
    <Box id="section1">
      <Wrapper ref={wallet}>
        <ContentBox>
          <Title>AllA Wallet</Title>
          <Content>
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
                target="_blanket"
              />
              <IOSBtn
                href="https://itunes.apple.com/app/id1500534759"
                target="_blanket"
              />
              <APKBtn
                href="https://www.allaglobal.com/download/AllAWallet.apk"
                target="_blanket"
              />
            </ButtonBox>
          </Content>
        </ContentBox>
        <BgBox>
          <div>
            <Img />
          </div>
          <div>
            <Img2 />
          </div>
          <div>
            <Img3 />
          </div>
        </BgBox>
      </Wrapper>
    </Box>
  );
};
