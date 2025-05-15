$(document).ready(function () {
  const $slider = $('#slider .slider-wrapper');

  $slider.slick({
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

  $('.swiper-button-next').click(function () {
    $slider.slick('slickNext');
  });

  $('.swiper-button-prev').click(function () {
    $slider.slick('slickPrev');
  });

  function createCustomPagination() {
    $('.custom-pagination').remove();

    if ($(window).width() <= 360) {
      const slideCount = $slider.slick('getSlick').slideCount;
      const $pagination = $('<div class="custom-pagination bottom"></div>');

      for (let i = 0; i < slideCount; i++) {
        const $dot = $('<div class="pagination-dot"></div>');
        if (i === 0) $dot.addClass('active');
        $dot.on('click', function () {
          $slider.slick('slickGoTo', i);
        });
        $pagination.append($dot);
      }

      $('#slider').append($pagination);

      $slider.on('afterChange', function (event, slick, currentSlide) {
        $('.pagination-dot').removeClass('active');
        $('.pagination-dot').eq(currentSlide).addClass('active');
      });
    }
  }

  createCustomPagination();

  // Бургер-меню
  $('.wrapper_header').append(`
    <div class="burger">
      <i class="fa-solid fa-bars"></i>
    </div>
    <div class="mobile-menu">
      <div class="close-mobile-menu">
        <i class="fa-solid fa-xmark"></i>
      </div>
      <a href="#" class="center_text1">Pricing</a>
      <a href="#" class="center_text2">Use Cases</a>
      <a href="#" class="center_text3">Book a Demo</a>
      <a href="#" class="right_text">Sign in</a>
      <button class="right_button">Contact sales</button>
    </div>
  `);

  $('.burger').click(function () {
    $('.mobile-menu').addClass('active');
  });

  $('.wrapper_header').on('click', '.right_button', function () {
    $('.mobile-menu').removeClass('active');
  });

  $('.wrapper_header').on('click', '.close-mobile-menu', function () {
    $('.mobile-menu').removeClass('active');
  });

  $(document).on('click', function (e) {
    if (
      !$(e.target).closest('.mobile-menu').length &&
      !$(e.target).closest('.burger').length
    ) {
      $('.mobile-menu').removeClass('active');
    }
  });

});


