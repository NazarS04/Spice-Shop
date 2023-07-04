"use strict";

const openFormBt = document.querySelector(".want-to-cooperate__open-anketa");
const modalAnketa = document.querySelector(".modal-window-anketa");
const modalFormContainer = document.querySelector(".modal-form__container");
const promo = document.querySelector(".want-to-cooperate__promo");

const openForm = function (e){
  modalAnketa.classList.add("modal-window-anketa_active")
  document.querySelector("body").style.overflow="hidden";
}

const closeForm = function (e){
  const target = e.target;
  console.log(!target.classList.contains("modal-window-anketa") && !target.closest(".modal-form__close"))
  if(!target.classList.contains("modal-window-anketa") && !target.closest(".modal-form__close")){
    return;
  }

  modalAnketa.classList.remove("modal-window-anketa_active")
  document.querySelector("body").style.overflow="visible";
}

const selectedCheckbox = function (e){
  const target = e.target;

  if(!target.classList.contains("modal-form__checkbox") && !target.classList.contains("modal-form__label")){
    return;
  }

  let elem;

  if(target.classList.contains("modal-form__label")){
    elem = target.parentNode.querySelector(".modal-form__checkbox");
  }else{
    elem = target;
  }

  elem.classList.toggle("modal-form__checkbox_active")

}

const startAndStopVideo = function (e){
  const target = e.target.parentNode;

  target.classList.toggle("want-to-cooperate__promo_unvisible");

  const video = target.parentNode.querySelector("video");

  if(target.classList.contains("want-to-cooperate__promo_unvisible")){
    video.play()
  }else{
    video.pause()
  }
}

openFormBt.addEventListener("click",openForm)

modalAnketa.addEventListener("click",closeForm)

modalFormContainer.addEventListener("click",selectedCheckbox)

promo.addEventListener("click", startAndStopVideo)

