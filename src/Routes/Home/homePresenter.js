import React, { useRef, useLayoutEffect, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { TweenLite, CSSPlugin, TimelineLite } from "gsap/all";
import AllaWallet from "./Sections/1_AllaWallet";
import EasySign from "./Sections/2_EasySign";
import Effection from "./Sections/3_Effection";
import Market from "./Sections/4_Market";
import Video from "./Sections/5_Video";
const PdfFile = require("../../assets/AllA_Whitepaper_KR_1.0.134c5d76.pdf");

const Container = styled.div`
  .col {
    padding: 0 !important;
  }
  ::before {
    content: "";
    position: absolute;
    top: -3%;
    left: 0;
    width: 100%;
    height: 1200px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url(${require("../../assets/artboard.png")});
    z-index: -1;
  }
`;
//------------------------------------

//--------------------------------
const Box3 = styled.div`
  .imgBox {
    width: 728px;
    height: 485px;
    object-fit: contain;
    margin: auto;
    margin-bottom: 30px;
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
    background-image: url(${require("../../assets/download_btn1.svg")});
  }
`;

const HomePresenter = () => (
  <>
    <Container id="home">
      <AllaWallet />
      <EasySign />
      <Effection />
      <Market />
      <Video />
      <Box3>
        <div>
          <div className="imgBox">
            <img src={require("../../assets/X-Mockup.png")} alt="allaimg" />
          </div>
          <div className="contentBox">
            <div>
              <h3>A World만의 헤택, 지금 이용해 보세요.</h3>
            </div>
            <div>
              <p>AllA Wallet으로 블록체인 신기술을 체험할 차례입니다.</p>
            </div>

            <div className="download-btn">
              <a href={PdfFile} target="_blank"></a>
            </div>
          </div>
        </div>
      </Box3>
    </Container>
  </>
);

HomePresenter.propTypes = {};

export default HomePresenter;

// const GridAnimation = () => {
//   const Grid = useRef();
//   useLayoutEffect(() => {
//     const stagger = () => {
//       let tl = new TimelineLite();
//       tl.staggerFromTo(
//         Grid.current.children,
//         1,
//         {
//           cycle: {
//             y: function(index) {
//               return index - 50;
//             },
//             opacity: function(index) {
//               return 0;
//             }
//           }
//         },
//         {
//           cycle: {
//             y: function(index) {
//               return index + 50;
//             },
//             opacity: function(index) {
//               return 1;
//             }
//           }
//         },
//         0.5,
//         +0.5
//       );
//     };
//     stagger();
//   });
//   return (
//     <div ref={Grid} className="row grid-box">
//       <div>
//         <div className="grid-item">
//           <div className="grid-icon">
//             <img
//               src={require("../../assets/service_icon.svg")}
//               alt="service_icon"
//             />
//           </div>
//           <div className="grid-content">
//             <h3>손쉬운 서비스 가입</h3>
//             <div className="grid-pbox">
//               <p>
//                 회원가입 절차 없이 EOS 계정만으로
//                 <br />
//                 손쉬운 서비스 가입이 가능합니다.
//               </p>
//               <p>
//                 심플한 구성의 메인화면 UI로 <br />
//                 누구나 쉽게 서비스를 이용할 수 있습니다.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div>
//         <div className="grid-item">
//           <div className="grid-icon">
//             <img src={require("../../assets/mining_icon.svg")} />
//           </div>
//           <div className="grid-content">
//             <h3>누구나 쉽게 체험하는 채굴의 혜택</h3>
//             <div className="grid-pbox">
//               <p>
//                 단 2번의 터치만으로 시작하는 <br />
//                 채굴의 헤택을 바로 경험해 보세요.
//               </p>
//               <p>
//                 직관적인 UI와 감각적인 디자인으로 <br />내 채굴 수익을 한 눈에
//                 관리할 수 있습니다.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div>
//         <div className="grid-item">
//           <div className="grid-icon">
//             <img src={require("../../assets/market_icon.svg")} />
//           </div>
//           <div className="grid-content">
//             <h3>스마트한 쇼핑, 마켓</h3>
//             <div className="grid-pbox">
//               <p>
//                 A월드에서는 코인으로 제휴 상품 구매가 가능합니다. <br />{" "}
//                 원터치로 결제하는 스마트한 쇼핑이 시작됩니다.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div>
//         <div className="grid-item">
//           <div className="grid-icon">
//             <img src={require("../../assets/browser_icon.svg")} />
//           </div>
//           <div className="grid-content">
//             <h3>디앱(dApp) 브라우저</h3>
//             <div className="grid-pbox">
//               <p>
//                 올에이 월렛으로 다양한 <br />
//                 EOS dApp을 간편하게 이용할 수 있습니다.
//               </p>
//               <p>
//                 제휴 게임을 플레이하고 폭 넓은 A월드 생태계를 체험 해보세요.
//                 <br /> (업데이트 예정)
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
