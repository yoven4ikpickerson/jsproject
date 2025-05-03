$(document).ready(function(){
  $('#slider .slider-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, 
    dots: false,
    infinite: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.swiper-button-next').click(function(){
    $('#slider .slider-wrapper').slick('slickNext');
  });

  $('.swiper-button-prev').click(function(){
    $('#slider .slider-wrapper').slick('slickPrev');
  });
});
