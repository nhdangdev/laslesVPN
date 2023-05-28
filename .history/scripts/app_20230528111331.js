$(".customer-list").slick({
  infinity: true,
  slideToShow: 3,
  slideToScroll: 1,
  dots: true,

  // slick slider arrow
  prevArrow: `<button type='button' class=' slick-prev'><img src="./images/icon-arrow-left.svg"/></button>`,
  nextArrow: `<button type='button' class=' slick-next'><img src="./images/icon-arrow-right.svg"/></button>`,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      },
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      },
    },
  ],
});

const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const activeClass = "is-show";
toggle.addEventListener("click", function () {
  menu.classList.add(activeClass);
});

// Click outside menu
window.addEventListener("click", function () {
  if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
    // CLick in menu
    menu.classList.remove(activeClass);
  }
});
