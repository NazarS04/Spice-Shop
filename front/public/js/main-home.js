"use strict";

const speed = 800;

new Swiper(".some-images__container",{
  navigation:{
    nextEl:".some-images__button-next",
    prevEl:".some-images__button-prev",
  },
  spaceBetween:10,
  slidesPerView: 3,
  loop: true,
  speed:speed,
  autoplay:{
    delay:2000,
    disableOnInteraction:false,
  },
  breakpoints:{
    601:{
      slidesPerView:4,
      spaceBetween: 15,
    },   
    801:{
      slidesPerView: 6,
    },
    1001:{
      slidesPerView:7,
    },
    1201:{
      slidesPerView:9,
    },
    1401:{
      slidesPerView: 10,
    }
  }
})

new Swiper(".new-receipts__container", {
  slidesPerView: 1,
  speed: speed,
  pagination:{
    el:".new-receipts__pagination",
    clickable:true
  },
  breakpoints:{
    500:{
      slidesPerView: 2,
      slidesPerGroup:2,
    },
    750:{
      slidesPerView: 3,
      slidesPerGroup:2,
    },
    950:{
      slidesPerView: 4,
    },
    1200:{
      slidesPerView: 5,
    }
  }
  })

new Swiper(".customer-favorites__container", {
  slidesPerView: 1,
  speed: speed,
  pagination:{
    el:".customer-favorites__pagination",
    clickable:true
  },
  breakpoints:{
    500:{
      slidesPerView: 2,
      slidesPerGroup:2,
    },
    750:{
      slidesPerView: 3,
      slidesPerGroup:3,
    },
    950:{
      slidesPerView: 4,
    },
    1200:{
      slidesPerView: 5,
      slidesPerGroup:3,
    }
  }
})