var testiomnialData = [
  {
    avatar: "./dist/img/Team/Van-Chen.jpg",
    name: "Van Chen",
    review: "Auto Expert",
  },
  {
    avatar: "./dist/img/Team/Anya.jpg",
    name: "Anna",
    review: "SMM Manager",
  },
  {
    avatar: "./dist/img/Team/Lilya.jpg",
    name: "Liliia",
    review: "Sales Manager",
  },
  {
    avatar: "./dist/img/Team/Van-Chen.jpg",
    name: "Van Chen",
    review: "Auto Expert",
  },
  {
    avatar: "./dist/img/Team/Anya.jpg",
    name: "Anna",
    review: "SMM Manager",
  },
  {
    avatar: "./dist/img/Team/Lilya.jpg",
    name: "Liliia",
    review: "Sales Manager",
  },
];
var slideHolder = document.querySelector("#slideHolder");
for (let i of testiomnialData)
  slideHolder.innerHTML += `<div class="swiper-slide"> <div class="ImgHolder"><img src="${i.avatar}"></div><div class="ContentHolder"><h3>${i.name}</h3><p>${i.review}</p></div></div>`;

const swiper = new Swiper("#craouselContainer", {
  grabCursor: true,
  centeredSlides: true,
  // slidesPerView: 2.3,
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    depth: 1100,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // autoplay: { delay: 3000 },
  // autoplay: false,
});
window.onresize = queryResizer;
queryResizer();
function queryResizer() {
  if (window.innerWidth < 768) swiper.params.slidesPerView = 1.2;
  if (window.innerWidth > 501) swiper.params.slidesPerView = 1.5;
  if (window.innerWidth > 768) swiper.params.slidesPerView = 1.5;
  if (window.innerWidth < 481) swiper.params.slidesPerView = 0.96;
  swiper.update();
}

swiper.el.addEventListener("mouseenter", function () {
  swiper.autoplay.stop();
});

swiper.el.addEventListener("mouseleave", function () {
  swiper.autoplay.start();
});
