import React from "react";
import styled from "styled-components";
import ThemeContext from "../../Context";
import ReactPlayer from "react-player";
import Slider from "./drag/slide";

const Box = styled.div`
  height: 100%;
  position: relative;
  margin-bottom: 100px;
`;
const Pbox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  margin: auto;
  margin-bottom: 100px;
  ::after {
    content: "";
    position: absolute;
    left: 50%;
    margin-top: 11px;
    transform: translate(-50%);
    width: 50px;
    height: 2px;
    background-color: #779bff;
  }
  p {
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: -0.72px;
    text-align: center;
  }
`;
const GridBox = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  grid-template-rows: auto;
`;
const GridItem = styled.div`
  width: 100%;
  overflow: hidden;
  > div {
    width: 320px;
    margin-left: auto;
    margin-right: auto;
  }
`;
const ItemBox = styled.div`
  padding: 0;
  margin: 0 auto;
  margin-bottom: 70px;
`;
const GridImg = styled.div`
  ${props => props.theme.style.gridicon(56, 56, 0)}
  display: flex;
  justify-content: center;
  margin: 0 auto 5px auto;
  margin-bottom: 5px;
  img {
    width: 100%;
  }
`;
const GridContent = styled.div`
  h3 {
    height: 31px;
    font-size: 21px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.48;
    letter-spacing: -0.42px;
    text-align: center;
    margin: 0;
    margin-bottom: 13px;
  }
  div {
    p {
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.31;
      letter-spacing: -0.64px;
      text-align: center;
      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }
`;
const ImgBox = styled.div`
  height: 354px;
  margin-bottom: 100px;
`;
const Img = styled.img.attrs({
  src: props => props.theme.file.easySign
})`
  width: 100%;
`;
const Market = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: auto auto auto auto auto;
  grid-template-columns: repeat(20, calc(100% / 20));
  grid-auto-flow: column;
  margin-bottom: 100px;
  padding: 0 10px;
`;
const Card = styled.div`
  width: 166px;
  height: 300px;
  &:nth-child(1) {
    /* grid-column: 1 / span 10; */
    grid-row: 1 / span 3;
  }

  &:nth-child(2) {
    grid-column: 10 / span 8;
    grid-row: 2 / span 4;
  }
  &:nth-child(3) {
    grid-row: 3 / span 2;
    grid-column: 1 / span 3;
  }
`;
const Img2 = styled.img`
  width: 100%;
`;
const VideoBox = styled.div`
  max-width: 320px;
  margin: 0 auto;
  position: relative;
`;
const Video = styled(ReactPlayer).attrs({
  url: props => props.theme.file.video,
  width: "100%",
  height: "100%",
  controls: true,
  light: true
  // playIcon: props => props.theme.file.videoImg
})`
  /* position: absolute; */
  top: 0;
  left: 0;
  video{
    margin-bottom: -2px;
  }
  .react-player__preview {
    min-height: 180px !important;
    background-image: url(${props => props.theme.file.allaBg}) !important;
    background-size: cover !important;
    background-repeat: no-repeat !important;
    background-position : top !important;
  }
  .react-player__shadow {
    all: unset !important;
  }
  .react-player__shadow .react-player__play-icon {
    /* display: none !important; */
    margin-left: 0 !important;
    border: none !important;
    width: 60px;
    height: 60px;
    /* background-image: url(${props =>
      props.theme.file.videoImg}) !important; */
    background-size: cover !important;
    background-repeat: no-repeat !important;
  }
`;
const CarouselBox = styled.div`
  width: 100%;
  height: 286px;
  margin-bottom: 100px;
  #carousel {
    height: 286px;
    position: relative;
    .arrow-right {
      right: 0;
    }
    .arrow-left {
      left: 0;
    }
    .arrow:hover {
    }
  }
  .item {
    width: 140px;
    height: 286px;
  }
`;

const Second = () => {
  // const con = useContext(ThemeContext);
  // const properties = con.slide; //이미지들

  // const Image = () => {
  //   let tempItems = [];
  //   properties.map(property =>
  //     tempItems.push(<img style={{ width: "100%" }} src={property.picture} />)
  //   );
  //   return tempItems;
  // };
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
              <img
                src={require("../../assets/service_icon.svg")}
                alt="service"
              />
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
          <ImgBox>
            <Img />
          </ImgBox>
        </GridItem>
        <GridItem>
          <ItemBox>
            <GridImg>
              <img src={require("../../assets/mining_icon.svg")} alt="mining" />
            </GridImg>
            <GridContent>
              <h3 style={{ letterSpacing: "-0.84px" }}>
                누구나 쉽게 체험하는 채굴의 혜택
              </h3>
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
          <CarouselBox style={{ minWidth: "100%" }}>
            {/* <Carousel items={Image} active={0}></Carousel> */}
            <Slider></Slider>
          </CarouselBox>
        </GridItem>
        <GridItem>
          <ItemBox>
            <GridImg>
              <img src={require("../../assets/market_icon.svg")} alt="market" />
            </GridImg>
            <GridContent>
              <h3>스마트한 쇼핑, 마켓</h3>
              <div>
                <p style={{ letterSpacing: "-0.8px" }}>
                  A월드에서는 코인으로 제휴 상품 구매가 가능합니다. 원터치로
                  결제하는 스마트한 쇼핑이 시작됩니다.
                </p>
              </div>
            </GridContent>
          </ItemBox>
        </GridItem>
        <GridItem>
          <ThemeContext.Consumer>
            {theme => (
              <Market>
                {theme.Mgrid.map((img, i) => (
                  <Card key={i}>
                    <Img2 src={img} alt="market" />
                  </Card>
                ))}
              </Market>
            )}
          </ThemeContext.Consumer>
        </GridItem>
        <GridItem>
          <ItemBox>
            <GridImg
              style={{ width: "58px", height: "58px", marginBottom: "17px" }}
            >
              <img src={require("../../assets/video_icon.svg")} alt="video" />
            </GridImg>
            <GridContent>
              <h3>현명한 사람들의 선택 Alla</h3>
              <div>
                <p style={{ lineHeight: "1.5" }}>
                  동영상을 통해 다양한 사용법과
                  <br />
                  AllA의 모든것을 체험해 보세요!
                </p>
              </div>
            </GridContent>
          </ItemBox>
        </GridItem>
        <GridItem>
          <VideoBox>
            <Video playing></Video>
          </VideoBox>
        </GridItem>
      </GridBox>
    </Box>
  );
};

export default Second;
