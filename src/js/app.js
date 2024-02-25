$(document).ready(function () {
  $(".gallery__slider").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    arrows: false,
    speed: 500,
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
  $(".header__btn").click(function () {
    $(".header__nav").toggleClass("active");
  });

  $(".custom-arrows .prev-arrow").click(function () {
    $(".gallery__slider").slick("slickPrev");
  });

  $(".custom-arrows .next-arrow").click(function () {
    $(".gallery__slider").slick("slickNext");
  });

  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $("html, body").animate(
      {
        scrollTop: $target.offset().top - 79,
      },
      1000,
      "swing"
    );
  });

  $(".header__list-item a").click(function () {
    $(".header__nav").removeClass("active");

    var target = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(target).offset().top - 79,
      },
      800
    );

    return false;
  });
});
