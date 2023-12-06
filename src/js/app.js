$(document).ready(function () {
  $(".gallery__slider").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    arrows: false,
    speed: 300,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  //nav btn
  $(".nav__btn").click(function () {
    $(".nav").toggleClass("active");
  });

  $(".custom-arrows .prev-arrow").click(function () {
    $(".gallery__slider").slick("slickPrev");
  });

  $(".custom-arrows .next-arrow").click(function () {
    $(".gallery__slider").slick("slickNext");
  });
});
