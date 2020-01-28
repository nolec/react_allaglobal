import React from "react";
import styled from "styled-components";
import PdfFile from "../../assets/AllA_Whitepaper_KR_1.0.134c5d76.pdf";

const Box = styled.div`
  height: 100%;
  position: relative;
`;
const BgBox = styled.div`
  width: 276px;
  height: 183px;
  margin: 33.9px auto 0 auto;
  img {
    width: 100%;
  }
`;
const ContentBox = styled.div``;
const HBox = styled.div`
  width: 260px;
  height: 58px;
  position: relative;
  padding: 20px 0 14px 0;
  margin: auto;
  h3 {
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    margin: 0;
    color: #fff;
  }
  ::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0px;
    transform: translate(-50%);
    width: 50px;
    height: 2px;
    background-color: #ffffff;
  }
`;
const PBox = styled.div`
  width: 274px;
  height: 59px;
  padding: 15px 0 26px 0;
  margin: auto;
  p {
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #fff;
  }
`;
const DownBtn = styled.div`
  width: 170px;
  height: 46px;
  margin: auto;
  a {
    display: block;
    width: 100%;
    height: 100%;
    background-image: url(${require("../../assets/download_btn.svg")});
  }
`;
const Third = () => {
  return (
    <Box>
      <BgBox>
        <img src={require("../../assets/iphone_m.png")} alt="iphone" />
      </BgBox>
      <ContentBox>
        <HBox>
          <h3>A World만의 혜택, 지금 이용해 보세요.</h3>
        </HBox>
        <PBox>
          <p>AllA Wallet으로 블록체인 신기술을 체험할 차례입니다.</p>
        </PBox>
        <DownBtn>
          <a href={PdfFile} target="_blank" rel="noopener noreferrer"></a>
        </DownBtn>
      </ContentBox>
    </Box>
  );
};

export default Third;
