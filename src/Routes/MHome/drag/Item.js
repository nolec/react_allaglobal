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
  .swiper-pagination {
    display: flex;
    height: 30px;
    justify-content: center;
    .swiper-pagination-bullet {
      height: 10px;
      width: 10px;
      border-radius: 15px;
      border: 1px solid #d4d4d4;
      &:not(:last-child) {
        margin-right: 5px;
      }
      &.swiper-pagination-bullet-active {
        background-color: #6f86d6;
        &:focus {
          outline: none;
        }
      }
    }
  }
`;
const Section = styled.section`
  width: fit-content !important;
  height: 200px;
  border-radius: 5px;
  &:first-child {
    margin-left: 10px;
  }
  img {
    width: 140px !important;
    height: 286px;
  }
`;
export default ({ items }) => {
  const params = {
    slidesPerView: 2.8,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      1024: {
        slidesPerView: 2.7,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 4.5,
        spaceBetween: 30
      },
      600: {
        slidesPerView: 3.5,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      320: {
        slidesPerView: 2.5,
        spaceBetween: 10
      }
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
