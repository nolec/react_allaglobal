import React, { useRef, useLayoutEffect, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { TweenLite, CSSPlugin, TimelineLite } from "gsap/all";
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 300px;
  * {
    margin: 0;
  }
  .col {
    padding: 0 !important;
  }
  ::before {
    content: "";
    position: absolute;
    top: -10%;
    left: 0;
    width: 100%;
    height: 1200px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url(${require("../../assets/bg2.png")});
    z-index: -1;
  }
`;
const Box = styled.div`
  color: #fff !important;
  display: flex;
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
  margin-top: 30px;
`;
const Content = styled.div``;
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
  background-image: url(${props => props.andUrl});
`;
const IOSBtn = styled.a`
  background-image: url(${props => props.iosUrl});
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

const BgBox = styled.div`
  width: 892px;
  height: 559px;
  object-fit: contain;
  display: flex;
  justify-content: flex-end;
`;
const Img = styled.img`
  width: 80%;
  height: 100%;
  position: relative;
`;
const Phone = () => {
  const phone = useRef();

  useLayoutEffect(() => {
    if (phone.current) {
      TweenLite.from(phone.current, 1, { y: -300, opacity: 0 });
      console.log(phone.current);
    }
  });

  return (
    <Img
      ref={phone}
      src={require("../../assets/Free-iPhone-Xpective-Mockup_2.png")}
    />
  );
};

//------------------------------------
const Box2 = styled.div`
  .grid-box {
    width: 100%;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
  }
  .grid-item {
    max-width: 500px;
    margin: auto;
    height: 370px;
  }
  .grid-icon {
    width: 100px;
    height: 100px;
    margin: auto;
    margin-top: 50px;
  }
  .grid-content h3 {
    height: 31px;
    font-size: 21px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.48;
    letter-spacing: normal;
    text-align: center;
    margin-bottom: 20px;
  }
  .grid-content p {
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: 0.32px;
    text-align: center;
  }
  .grid-pbox {
    max-width: 425px;
    margin: auto;
    margin-bottom: 29px;
    p:last-child {
      margin-top: 20px;
    }
  }
`;
const Title2 = styled.h2`
  width: 422px;
  height: 112px;
  font-size: 28px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.46;
  letter-spacing: 1.4px;
  text-align: center;
  color: #333333;
  margin: auto;
  position: relative;
  ::after {
    content: "";
    width: 150px;
    height: 4px;
    background-color: #779bff;
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translate(-50%);
  }
`;
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
const GridAnimation = () => {
  const Grid = useRef();
  useLayoutEffect(() => {
    const stagger = () => {
      let tl = new TimelineLite();
      tl.staggerFromTo(
        Grid.current.children,
        1,
        {
          cycle: {
            y: function(index) {
              return index - 50;
            },
            opacity: function(index) {
              return 0;
            }
          }
        },
        {
          cycle: {
            y: function(index) {
              return index + 50;
            },
            opacity: function(index) {
              return 1;
            }
          }
        },
        0.5,
        +0.5
      );
      console.log(Grid.current.children);
    };
    stagger();
  });
  return (
    <div ref={Grid} className="row grid-box">
      <div>
        <div className="grid-item">
          <div className="grid-icon">
            <img
              src={require("../../assets/service_icon.svg")}
              alt="service_icon"
            />
          </div>
          <div className="grid-content">
            <h3>손쉬운 서비스 가입</h3>
            <div className="grid-pbox">
              <p>
                회원가입 절차 없이 EOS 계정만으로
                <br />
                손쉬운 서비스 가입이 가능합니다.
              </p>
              <p>
                심플한 구성의 메인화면 UI로 <br />
                누구나 쉽게 서비스를 이용할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="grid-item">
          <div className="grid-icon">
            <img src={require("../../assets/mining_icon.svg")} />
          </div>
          <div className="grid-content">
            <h3>누구나 쉽게 체험하는 채굴의 혜택</h3>
            <div className="grid-pbox">
              <p>
                단 2번의 터치만으로 시작하는 <br />
                채굴의 헤택을 바로 경험해 보세요.
              </p>
              <p>
                직관적인 UI와 감각적인 디자인으로 <br />내 채굴 수익을 한 눈에
                관리할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="grid-item">
          <div className="grid-icon">
            <img src={require("../../assets/market_icon.svg")} />
          </div>
          <div className="grid-content">
            <h3>스마트한 쇼핑, 마켓</h3>
            <div className="grid-pbox">
              <p>
                A월드에서는 코인으로 제휴 상품 구매가 가능합니다. <br />{" "}
                원터치로 결제하는 스마트한 쇼핑이 시작됩니다. <br /> (업데이트
                예정)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="grid-item">
          <div className="grid-icon">
            <img src={require("../../assets/browser_icon.svg")} />
          </div>
          <div className="grid-content">
            <h3>디앱(dApp) 브라우저</h3>
            <div className="grid-pbox">
              <p>
                올에이 월렛으로 다양한 <br />
                EOS dApp을 간편하게 이용할 수 있습니다.
              </p>
              <p>
                제휴 게임을 플레이하고 폭 넓은 A월드 생태계를 체험 해보세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const HomePresenter = () => (
  <>
    <Container id="home">
      <Box>
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
                href={"http://allaglobal.com/download/alla.apk"}
                andUrl={require("../../assets/google_btn.svg")}
              />
              <IOSBtn
                href="#"
                onClick={() => alert("준비중입니다.")}
                iosUrl={require("../../assets/apple_btn.svg")}
              />
            </ButtonBox>
          </Content>
        </ContentBox>
        <BgBox>
          <Phone />
        </BgBox>
      </Box>
      <Box2 id="section1">
        <div>
          <Title2>
            한 눈에 모아보는 수익 현황,이제 읽지 말고 직접 확인해보세요.
          </Title2>
          <GridAnimation></GridAnimation>
        </div>
      </Box2>
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
              <a
                href={require("../../assets/AllA_Whitepaper_KR_1.0.pdf")}
                target="_blank"
              ></a>
            </div>
          </div>
        </div>
      </Box3>
    </Container>
  </>
);

HomePresenter.propTypes = {};

export default HomePresenter;
