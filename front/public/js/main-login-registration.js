"use strict";

const form = document.querySelector(".form");

form.addEventListener("click", function (e) {
  const target = e.target;

  if (!target.dataset.visible) {
    return;
  }

  const input =  target.closest(".password-input").querySelector("input");

  const visible = JSON.parse(target.dataset.visible);
  if(visible){

    target.dataset.visible = false;
    target.src = "img/login-registration/close_eye.svg";
    input.type = "password";
    return;
  }

  target.dataset.visible = true;
  target.src = "img/login-registration/open_eye.svg";
  input.type = "text";
});
