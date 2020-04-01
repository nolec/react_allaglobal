import React from "react";
import HomePresenter from "./homePresenter";
import MhomePresenter from "../MHome/MhomePresenter";
import { isMobile } from "react-device-detect";
import { ThemeProvider, css } from "styled-components";
import ThemeContext from "../../Context";

const boxStyle = () => css`
  max-width: 100%;
  margin: 0 auto;
  padding-top: 80px;
  display: flex;
  justify-content: center;
`;
const titleStyle = () => css`
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
  margin-bottom: 150px;
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
const gridh3 = marginBottom => css`
  h3 {
    height: 31px;
    font-size: 24px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: center;
    margin-bottom: ${marginBottom}px;
    margin-top: 0;
  }
`;
const gridp = () => css`
  p {
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: 0.36px;
    text-align: center;
  }
`;
const gridicon = (width, height, marginTop) => css`
  width: ${width}px;
  height: ${height}px;
  margin: auto;
  margin-top: ${marginTop}px;
`;
export const theme = {
  style: {
    boxStyle,
    titleStyle,
    gridh3,
    gridp,
    gridicon
  },
  file: {
    andUrl: require("../../assets/google_btn.svg"),
    iosUrl: require("../../assets/apple_btn.svg"),
    apkUrl: require("../../assets/apk_btn.svg"),
    andMobile: require("../../assets/btn_google.svg"),
    iosMobile: require("../../assets/btn_apple.svg"),
    apkMobile: require("../../assets/btn_apk.svg"),
    bizMobile: require("../../assets/btn_biz_plan.svg"),
    phone_1: require("../../assets/1.png"),
    phone_2: require("../../assets/img_2_1.png"),
    phone_3: require("../../assets/img_3_1.png"),
    mphone_1: require("../../assets/m_1.png"),
    mphone_2: require("../../assets/m_2.png"),
    mphone_3: require("../../assets/m_3.png"),
    icon_1: require("../../assets/service_icon.svg"),
    icon_2: require("../../assets/mining_icon.svg"),
    icon_3: require("../../assets/market_icon.svg"),
    icon_4: require("../../assets/browser_icon.svg"),
    icon_5: require("../../assets/video_icon.svg"),
    easySign: require("../../assets/alla_second_contents_mockup.png"),
    pass: require("../../assets/pass.png"),
    line: require("../../assets/line_group.png"),
    video: require("../../assets/alla_app_video.mp4"),
    videoImg: require("../../assets/video_img.png"),
    allaBg: require("../../assets/video_img1.png")
  }
};
const files = {
  slide: [
    { index: 1, picture: require("../../assets/img_1.png") },
    { index: 2, picture: require("../../assets/img_2.png") },
    { index: 3, picture: require("../../assets/img_3.png") },
    { index: 4, picture: require("../../assets/img_4.png") },
    { index: 5, picture: require("../../assets/img_5.png") },
    { index: 6, picture: require("../../assets/img_6.png") },
    { index: 7, picture: require("../../assets/img_7.png") }
  ],
  grid: [
    require("../../assets/market_1.png"),
    require("../../assets/market_2.png"),
    require("../../assets/market_3.png"),
    require("../../assets/market_4.png"),
    require("../../assets/market_5.png")
  ],
  Mgrid: [
    require("../../assets/mmarket_1.png"),
    require("../../assets/mmarket_2.png"),
    require("../../assets/mmarket_3.png")
  ]
};
export default () => {
  return isMobile ? (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={files}>
        <MhomePresenter></MhomePresenter>
      </ThemeContext.Provider>
    </ThemeProvider>
  ) : (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={files}>
        <HomePresenter></HomePresenter>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};
