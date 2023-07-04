"use strict";

// const body = document.body;
const filter = document.querySelector(".filter")
const btOpenFilter = document.querySelector(".category__button-open-filter");
const btCloseFilter = document.querySelector(".filter__button-close")

const selectedCheckbox = function (e){
  const target = e.target;

  if(!target.classList.contains("filter__checkbox") && !target.classList.contains("filter__label")){
    return;
  }

  let elem;

  if(target.classList.contains("filter__label")){
    elem = target.parentNode.querySelector(".filter__checkbox");
  }else{
    elem = target;
  }

  elem.classList.toggle("filter__checkbox_active")
}

filter.addEventListener("click",selectedCheckbox)

btOpenFilter.addEventListener("click",function (e){
  body.classList.add("body_hidden");
  filter.classList.add("filter_active");

})
btCloseFilter.addEventListener("click",function (e){
  body.classList.remove("body_hidden");
  filter.classList.remove("filter_active");
})