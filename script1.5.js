let btn = document.querySelector(".btn");
let swiperWrapper = document.querySelector(".swiper-wrapper");
let btnExpand = document.querySelector(".btn__expand");
let btnTextOn = document.querySelector(".btn__text");

btn.onclick = function () {
  swiperWrapper.classList.toggle("swiper-wrapper-open");
  btnExpand.classList.toggle("btn__expand-deg");
  if (swiperWrapper.classList.contains("swiper-wrapper-open")) {
    btnTextOn.innerHTML = "Скрыть";
  } else {
    btnTextOn.innerHTML = "Показать все";
  }
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
