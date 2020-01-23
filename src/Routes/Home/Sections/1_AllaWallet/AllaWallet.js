import React from "react";
import styled from "styled-components";

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
const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    width: 230px;
    height: 60px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    :not(:last-child) {
      margin-right: 30.4px;
    }
  }
`;
const Img = styled.img.attrs({
  src: props => props.theme.file.phone_1
})``;
const Img2 = styled.img.attrs({
  src: props => props.theme.file.phone_2
})``;
const Img3 = styled.img.attrs({
  src: props => props.theme.file.phone_3
})``;
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
  return (
    <Box id="section1">
      <Wrapper>
        <ContentBox>
          <Title>AllA Wallet</Title>
          <Content>
            <Infor>
              누구나 쉽게 체험하는 채굴의 혜택,
              <br />
              지금 시작해보세요.
            </Infor>
            <ButtonBox>
              {/* <AndroidBtn href={"http://allaglobal.com/download/alla.apk"} /> */}
              <AndroidBtn
                href={
                  "https://play.google.com/store/apps/details?id=io.allawallet.allaglobal"
                }
                target="_blanket"
              />
              <IOSBtn href="#" onClick={() => alert("준비중입니다.")} />
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
