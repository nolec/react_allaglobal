import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import Scene from "../../../../ScrollMagic";
const PdfFile = require("../../../../assets/AllA_Whitepaper_KR_1.0.134c5d76.pdf");

const Box = styled.div`
  .imgBox {
    width: 728px;
    height: 485px;
    object-fit: contain;
    margin: auto;
    margin-bottom: 30px;
  }
  .contentBox {
    margin-bottom: 200px;
  }
  .contentBox h3 {
    height: 71px;
    font-size: 28px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.46;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    position: relative;
    margin-bottom: 30px;
    ::after {
      content: "";
      width: 150px;
      height: 4px;
      background-color: #ffffff;
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      bottom: 0;
    }
  }
  .contentBox p {
    height: 24px;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
  }
  .contentBox .download-btn {
    width: 335px;
    height: 90px;
    margin: auto;
    margin-top: 50px;
  }
  .contentBox a {
    display: block;
    width: 100%;
    height: 100%;
    background-image: url(${require("../../../../assets/download_btn1.svg")});
  }
`;
const Div = styled.div`
  > div {
    opacity: 0;
    transform: translateY(-150px);
  }
`;

export default () => {
  const last = useRef(null);
  useEffect(() => {
    Scene(last.current.children, 0.8);
  }, []);
  return (
    <Box>
      <Div ref={last}>
        <div className="imgBox">
          <img src={require("../../../../assets/X-Mockup.png")} alt="allaimg" />
        </div>
        <div className="contentBox">
          <div>
            <h3>A World만의 혜택, 지금 이용해 보세요.</h3>
          </div>
          <div>
            <p>AllA Wallet으로 블록체인 신기술을 체험할 차례입니다.</p>
          </div>

          <div className="download-btn">
            <a href={PdfFile} target="_blank" rel="noopener noreferrer"></a>
          </div>
        </div>
      </Div>
    </Box>
  );
};
