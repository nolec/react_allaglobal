import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import PdfFile from "../assets/AllA_Whitepaper_KR_1.0.134c5d76.pdf";

const Header = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  position: fixed;
  left: 0;
  z-index: 10;
  transition: 0.3s linear;
`;
const Container = styled.div`
  width: 1200px !important;
  display: flex;
`;
const TitleBox = styled.div`
  margin-top: 23px;
  margin-bottom: 15px;
`;
const Title = styled(Link)`
  cursor: pointer;
  width: 100%;
  font-size: 35px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: #fff !important;
`;
const NavBox = styled.div`
  width: 100%;
`;
const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
`;
const Item = styled.li`
  width: 66px;
  height: 27px;
  :last-child {
    width: 140px;
    height: 38px;
  }
  :not(:last-child) {
    margin-right: 40px;
  }
`;
const Alink = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #fff !important;
`;
const BizBtn = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(${props => props.bizUrl});
`;
export default () => {
  const handleScroll = () => {
    const header = document.querySelector("header");
    if (window.scrollY > 0) {
      header.style.backgroundColor = "#50afea";
    } else {
      header.style.backgroundColor = "";
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Header>
      <Container className="container">
        <TitleBox>
          <Title
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <img src={require("../assets/alla_logo.svg")} alt="logo" />
          </Title>
        </TitleBox>
        <NavBox>
          <List>
            <Item>
              <Alink
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                기능소개
              </Alink>
            </Item>
            <Item>
              <BizBtn
                href={PdfFile}
                target="_blank"
                bizUrl={require("../assets/header_down_btn.svg")}
              />
            </Item>
          </List>
        </NavBox>
      </Container>
    </Header>
  );
};
