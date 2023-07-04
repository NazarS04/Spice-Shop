"use strict";

new Swiper(".brief-information__container", {
  navigation: {
    prevEl: ".brief-information__button-prev",
    nextEl: ".brief-information__button-next",
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  loop: true,
  speed: 500,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  allowTouchMove: false,
});

const body = document.querySelector("body");

const searchInput = document.querySelector(".header__search > input");
const resetBt = document.querySelector(".header__reset");

const dropDownPhones = document.querySelector(".header__phone");
const modalWindowPhones = document.querySelector(".modal-window-phones");

const burger = document.querySelector(".header__burger");
const navigation = document.querySelector(".header__nav");

const modalWindowPhonesPosition = function () {
  const list = document.querySelector(".modal-window-phones__list");
  const dropDownPos = dropDownPhones.getBoundingClientRect();
  const maxWidthList = parseInt(getComputedStyle(list).maxWidth);
  list.style.cssText = `top: ${
    dropDownPos.top + dropDownPos.height + 15
  }px; left: ${dropDownPos.left - (maxWidthList - dropDownPos.width) / 2}px;`;
};

searchInput.addEventListener("input", function (e) {
  const value = e.target.value;

  if (value.length > 0 && !resetBt.classList.contains("header__reset-active")) {
    resetBt.classList.add("header__reset-active");
    return;
  }

  if (value.length === 0) {
    resetBt.classList.remove("header__reset-active");
  }
});
resetBt.addEventListener("click", function (e) {
  e.preventDefault();

  searchInput.value = "";
  this.classList.remove("header__reset-active");
  searchInput.focus();
});

dropDownPhones.addEventListener("click", function (e) {
  this.classList.add("header__phone_active");
  modalWindowPhonesPosition();

  body.classList.add("body_hidden");
  modalWindowPhones.classList.add("modal-window-phones_visible");
});
modalWindowPhones.addEventListener("click", function (e) {
  const target = e.target;

  if (target.classList.contains("modal-window-phones__list")) {
    return;
  }

  body.classList.remove("body_hidden");
  dropDownPhones.classList.remove("header__phone_active");
  target.classList.remove("modal-window-phones_visible");

});

window.addEventListener("resize", modalWindowPhonesPosition);

const calculateNavHeight = function (){
  const header = document.querySelector(".header").getBoundingClientRect()
  const windowClientHeight = document.documentElement.clientHeight;
  const result = windowClientHeight - header.height + scrollY;

  navigation.style.height =  `${result}px`;
}

burger.addEventListener("click", function (e) {
  if(!navigation.classList.contains("header__nav_active")){
    calculateNavHeight();
  }

  this.classList.toggle("header__burger_active");
  navigation.classList.toggle("header__nav_active");
  body.classList.toggle("body_hidden");
});
