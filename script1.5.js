let btn = document.querySelector(".btn");
let swiperWrapper = document.querySelector(".swiper-wrapper");
let btnExpand = document.querySelector(".btn__expand");
let btnTextOn = document.querySelector(".btn__text-on");
let btnTextOff = document.querySelector(".btn__text-off");

btn.onclick = function () {
  swiperWrapper.classList.toggle("swiper-wrapper-big");
  btnExpand.classList.toggle("btn__expand_deg");
  btnTextOn.classList.toggle("btn-on");
  btnTextOff.classList.toggle("btn-off");
};

let swiper;

let width = window.matchMedia("(max-width: 767px)");

function resize(event) {
  event == true
    ? (swiper = new Swiper(".swiper", {
        slidesPerView: "auto",
        spaceBetween: 16,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      }))
    : swiper.destroy();
}
width.addEventListener("change", function (event) {
  resize(event.matches);
});

resize(width.matches);
