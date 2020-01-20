import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import ReactPlayer from "react-player";

const Box = styled.div`
  overflow: hidden;
  max-width: 100%;
  margin-bottom: 250px;
  margin-top: 50px;
  position: relative;
  padding-bottom: 30px;
  .grid-box {
    width: 100%;
    display: grid;
    grid-template-rows: auto auto;
    margin-bottom: 100px;
  }
  .grid-item {
    margin-top: 100px;
  }
  .grid-pbox {
    max-width: 425px;
    margin: auto;
    p:last-child {
      margin-top: 20px;
    }
  }
  &::before {
    content: "";
    width: 100%;
    height: 112px;
    background-color: #def7ff;
    position: absolute;
    left: 0;
    top: 54%;
  }
  &::after {
    content: "";
    width: 100%;
    height: 225px;
    background-color: #def7ff;
    position: absolute;
    left: 0;
    top: 68%;
    z-index: -1;
  }
`;
const GridIcon = styled.div`
  ${props => props.theme.style.gridicon(114, 114, 0)}
  margin-bottom : 20px;
`;
const GridContent = styled.div`
  ${props => props.theme.style.gridh3(25)}
  ${props => props.theme.style.gridp()}
`;

const VideoBox = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  box-shadow: 0px 6px 20px 0px rgba(153, 153, 153, 1);
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
    min-height: 675px !important;
    background-image: url(${props => props.theme.file.allaBg}) !important;
    background-size: auto !important;
    background-repeat: no-repeat !important;
  }
  .react-player__shadow {
    all: unset !important;
  }
  .react-player__shadow .react-player__play-icon {
    /* display: none !important; */
    margin-left: 0 !important;
    border: none !important;
    width: 200px;
    height: 200px;
    /* background-image: url(${props =>
      props.theme.file.videoImg}) !important; */
    background-size: cover !important;

    background-repeat: no-repeat !important;
  }
`;
const Img = styled.img.attrs({
  src: props => props.theme.file.icon_5
})``;

export default () => {
  const video = useRef(null);

  return (
    <Box id="section5">
      <div className="grid-box">
        <div>
          <div className="grid-item">
            <GridIcon>
              <Img />
            </GridIcon>
            <GridContent>
              <h3>현명한 사람들의 선택 Alla</h3>
              <div className="grid-pbox">
                <p>
                  동영상을 통해 다양한 사용법과
                  <br /> AllA의 모든것을 체험해 보세요!
                </p>
              </div>
            </GridContent>
          </div>
        </div>
      </div>
      <VideoBox>
        <Video playing></Video>
      </VideoBox>
    </Box>
  );
};
