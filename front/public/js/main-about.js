"use strict";

new Swiper(".our-team__swiper",{
  slidesPerView:1,
  spaceBetween:20,
  navigation:{
    nextEl:".our-team__button-next",
    prevEl:".our-team__button-prev"
  },
  speed:800,
  autoplay:{
    delay:2000,
    disableOnInteraction:false,
  },
  breakpoints:{
    1000:{
      slidesPerView: 5
    },
    850:{
      slidesPerView:4
    },
    500:{
      slidesPerView:3
    },
    401:{
      slidesPerView:2
    }
  }
})