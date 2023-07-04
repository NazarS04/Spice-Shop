"use strict";

const productCounter = document.querySelector(".product-center__quantity");
const productCounterController = document.querySelector(".product-center__counter");
const select = document.querySelector(".product-center__select");
const priceForWeight = document.querySelector(".product-center__which-weight");
const productPrice = document.querySelector(".product-center__price");

productCounter.textContent = productCounter.dataset.value = "1";

priceForWeight.textContent = select.options[select.selectedIndex].value + "г";

productPrice.textContent = (productPrice.dataset.price/100 * select.options[select.selectedIndex].value).toFixed(2) + " грн";

productCounterController.addEventListener("click",function (e){
  const target = e.target.closest("button");

  if(!target){
    return;
  }

  let value = +productCounter.dataset.value;

  if(target.dataset.type === "plus" && !(value === 10)){
    value++;
  } else if(target.dataset.type === "minus" && !(value === 1)) {
    value--;
  }

  productCounter.dataset.value = productCounter.textContent = value;
})
select.addEventListener("change",function (){
  let value = +select.options[select.selectedIndex].value;
  let unit = "г";

  productPrice.textContent =  ((productPrice.dataset.price/100) * value).toFixed(2) + " грн";

  if(value >= 1000){
    value/=1000;
    unit = "кг";
  }

  priceForWeight.textContent = value+unit;
})