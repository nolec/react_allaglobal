import React from "react";
import styled from "styled-components";

const Box = styled.div`
  ${props => props.theme.style.boxStyle}
  margin-bottom: 350px;
  .grid-box {
    width: 100%;
    display: grid;
    grid-template-columns: max(798px) auto;
    grid-template-rows: auto auto;
  }
  .grid-item {
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
const Title = styled.h2`
  ${props => props.theme.style.titleStyle()}
`;
const GridIcon = styled.div`
  ${props => props.theme.style.gridicon(114, 114, 274)}
  margin-bottom : 26px;
`;
const GridContent = styled.div`
  ${props => props.theme.style.gridh3(25)}
  ${props => props.theme.style.gridp()}
`;
const Img1 = styled.img.attrs({
  src: props => props.theme.file.icon_1
})``;
const Img2 = styled.img.attrs({
  src: props => props.theme.file.easySign
})``;
export default () => {
  return (
    <Box id="section1">
      <div>
        <Title>
          한 눈에 모아보는 수익 현황,이제 읽지 말고 직접 확인해보세요.
        </Title>
        <div className="grid-box">
          <div>
            <div className="grid-item">
              <Img2 />
            </div>
          </div>
          <div>
            <div className="grid-item">
              <GridIcon>
                <Img1 />
              </GridIcon>
              <GridContent>
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
              </GridContent>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};
