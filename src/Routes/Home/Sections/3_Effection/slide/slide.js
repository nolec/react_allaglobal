import React from "react";
import "./slide.css";

const slide = () => {
  // I will be creating a different pen with touch support but right // now I have no time for it due to school

  const slider = document.querySelector(".items");
  const slides = document.querySelectorAll(".item");
  const button = document.querySelectorAll(".button");

  let current = 0;
  let prev = 4;
  let next = 1;

  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () =>
      i == 0 ? gotoPrev() : gotoNext()
    );
  }

  const gotoPrev = () =>
    current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

  const gotoNext = () => (current < 4 ? gotoNum(current + 1) : gotoNum(0));

  const gotoNum = number => {
    current = number;
    prev = current - 1;
    next = current + 1;

    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
      slides[i].classList.remove("prev");
      slides[i].classList.remove("next");
    }

    if (next == 5) {
      next = 0;
    }

    if (prev == -1) {
      prev = 4;
    }

    slides[current].classList.add("active");
    slides[prev].classList.add("prev");
    slides[next].classList.add("next");
  };
  return (
    <div class="items">
      <div class="item active">
        <img src="https://t3.ftcdn.net/jpg/01/21/39/24/240_F_121392436_TyJ0RrKUxTni7ADl2tEmxhiWB3DQpa99.jpg" />
      </div>
      <div class="item next">
        <img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/assets/share_new.jpg" />
      </div>
      <div class="item">
        <img src="https://tubikstudio.com/wp-content/uploads/2017/12/design_party_graphic_design_tubik-1.png" />
      </div>
      <div class="item">
        <img src="https://apeonthemoon.com/wp-content/uploads/2018/11/NbIIkGcA.jpeg" />
      </div>
      <div class="item prev">
        <img src="https://static.vecteezy.com/system/resources/previews/000/238/789/non_2x/cute-girl-celebrating-korean-harvest-festival-vector-flat-illustration-background.png" />
      </div>
      <div class="button-container">
        <div class="button">
          <i class="fas fa-angle-left"></i>
        </div>
        <div class="button">
          <i class="fas fa-angle-right"></i>
        </div>
      </div>
    </div>
  );
};

export default slide;
