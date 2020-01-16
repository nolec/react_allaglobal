import React from "react";
import styled from "styled-components";

const Box = styled.div`
  height: 100%;
  position: relative;
`;
const Pbox = styled.div`
  width: 210px;
  height: 40px;
  position: relative;
  margin: auto;
  margin-bottom: 30px;
  ::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -20px;
    transform: translate(-50%);
    width: 50px;
    height: 2px;
    background-color: #779bff;
  }
  p {
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: 0.7px;
    text-align: center;
  }
`;
const GridBox = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  grid-template-rows: repeat(4, minmax(auto, 250px));
`;
const GridItem = styled.div`
  width: 320px;
`;
const ItemBox = styled.div`
  padding: 20px;
`;
const GridImg = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  img {
    width: 56px;
    height: 56px;
  }
`;
const GridContent = styled.div`
  h3 {
    height: 24px;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: center;
    margin: 0;
    margin-bottom: 20px;
  }
  div {
    p {
      font-size: 12px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.3;
      letter-spacing: 0.24px;
      text-align: center;
      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }
`;

const Second = () => {
  return (
    <Box>
      <Pbox>
        <p>
          한 눈에 모아보는 수익 현황,
          <br />
          이제 읽지 말고 직접 확인해보세요.
        </p>
      </Pbox>
      <GridBox>
        <GridItem>
          <ItemBox>
            <GridImg>
              <img src={require("../../assets/service_icon.svg")} />
            </GridImg>
            <GridContent>
              <h3>손쉬운 서비스 가입</h3>
              <div>
                <p>
                  회원가입 절차 없이 EOS 계정만으로
                  <br />
                  손쉬운 서비스 가입이 가능합니다.
                </p>
                <p>
                  심플한 구성의 메인화면 UI로
                  <br />
                  누구나 쉽게 서비스를 이용할 수 있습니다.
                </p>
              </div>
            </GridContent>
          </ItemBox>
        </GridItem>
        <GridItem>
          <ItemBox>
            <GridImg>
              <img src={require("../../assets/mining_icon.svg")} />
            </GridImg>
            <GridContent>
              <h3>누구나 쉽게 체험하는 채굴의 혜택</h3>
              <div>
                <p>
                  단 2번의 터치만으로 시작하는
                  <br />
                  채굴의 혜택을 바로 경험해 보세요.
                </p>
                <p>
                  직관적인 UI와 감각적인 디자인으로
                  <br />내 채굴 수익을 한 눈에 관리할 수 있습니다.
                </p>
              </div>
            </GridContent>
          </ItemBox>
        </GridItem>
        <GridItem>
          <ItemBox>
            <GridImg>
              <img src={require("../../assets/market_icon.svg")} />
            </GridImg>
            <GridContent>
              <h3>스마트한 쇼핑, 마켓</h3>
              <div>
                <p>
                  A월드에서는 코이으로 제휴 상품 구매가 가능합니다. 원터치로
                  결제하는 스마트한 쇼핑이 시작됩니다.
                </p>
              </div>
            </GridContent>
          </ItemBox>
        </GridItem>
        <GridItem>
          <ItemBox>
            <GridImg>
              <img src={require("../../assets/browser_icon.svg")} />
            </GridImg>
            <GridContent>
              <h3>디앱(dApp) 브라우저</h3>
              <div>
                <p>
                  올에이 월렛으로 다양한
                  <br />
                  EOS dApp을 간편하게 이용할 수 있습니다.
                </p>
                <p>
                  제휴 게임을 플레이하고
                  <br />폭 넓은 A월드 생태계를 체험 해보세요.
                  <br />
                  (업데이트 예정)
                </p>
              </div>
            </GridContent>
          </ItemBox>
        </GridItem>
      </GridBox>
    </Box>
  );
};

export default Second;
