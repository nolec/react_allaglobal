import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Swiper from "react-id-swiper";
import "react-id-swiper/lib/index";

const Div = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  position: relative;
  .swiper-container {
    width: 100%;
    position: relative;
    z-index: 1;
    margin: 0px auto;
    list-style: none;
    padding: 0px;
    .swiper-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      z-index: 1;
      display: flex;
      transition-property: transform;
      box-sizing: content-box;
      .swiper-slide {
        flex-shrink: 0;
        max-width: 320px;
        height: 100%;
        position: relative;
        transition-property: transform;
      }
    }
  }
  .swiper-pagination{
      display : flex;
      height : 30px;
      justify-content : center;
      .swiper-pagination-bullet{
          height : 10px;
          width : 10px;
          border-radius : 15px;
          border : 1px solid #d4d4d4;
          &:not(:last-child){
              margin-right : 5px;
          }
          &.swiper-pagination-bullet-active{
              background-color : #6f86d6;
          }
      }
  }
`;
const Section = styled.section`
  width: fit-content !important;
  height: 200px;
  margin-right: 10px;
  border-radius: 5px;
  img {
    width: 140px !important;
    height: 286px;
  }
`;
export default ({ items }) => {
  const params = {
    slidesPerView: 2.2,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  };
  return (
    <Div id="panelWrap">
      <Swiper {...params}>
        {items.map(item => (
          <Section>{item}</Section>
        ))}
      </Swiper>
    </Div>
  );
};
