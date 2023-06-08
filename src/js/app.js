$( document ).ready(function() {
    //nav btn
    $('.nav__btn').click(function(){
        $('.nav').toggleClass('active');
    })

    $(document).ready(function(){
        $('.gallery__slider').slick({
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
          dots: true,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
        });
      });

});