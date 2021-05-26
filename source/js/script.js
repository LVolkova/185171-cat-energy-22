var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

var sliderToggle = document.querySelector(".slider__toggle");
var sliderButtonBefore = document.querySelector(".slider__legend--before");
var sliderButtonAfter = document.querySelector(".slider__legend--after");
var photoBefore = document.querySelector(".photo__slide--before");
var photoAfter = document.querySelector(".photo__slide--after");

sliderButtonBefore.onclick = function() {
  sliderToggle.classList.add("slider__toggle--left");
  sliderToggle.classList.remove("slider__toggle--right");
  photoBefore.classList.add("photo__slide--current");
  photoAfter.classList.remove("photo__slide--current");
};

sliderButtonAfter.onclick = function() {
  sliderToggle.classList.add("slider__toggle--right");
  sliderToggle.classList.remove("slider__toggle--left");
  photoAfter.classList.add("photo__slide--current");
  photoBefore.classList.remove("photo__slide--current");
};
