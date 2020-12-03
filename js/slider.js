"use strict";

$('.slide-card').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [, "<i class='fas fa-chevron-right duannoibat-btn-next fa-2x fw-100'></i>"],
  responsive: {
    0: {
      items: 1
    },
    480: {
      items: 1
    },
    576: {
      items: 1
    },
    768: {
      items: 1
    },
    992: {
      items: 1
    },
    1000: {
      items: 1
    }
  },
  dots: true
}); // mat bang du an

$(document).ready(function () {
  $('.ground-slider-top').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    asNavFor: '.ground-slider-bottom',
    // autoplay: true,
    // autoplaySpeed: 2000,
    variableWidth: true
  });
  $('.ground-slider-bottom').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.ground-slider-top',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
    variableWidth: true
  });
}); // chi tiet du an

$(document).ready(function () {
  $('.chitietduan-slider-top').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    asNavFor: '.chitietduan-slider-bottom' // autoplay: true,
    // autoplaySpeed: 2000,

  });
  $('.chitietduan-slider-bottom').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.chitietduan-slider-top',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    arrows: true
  });
}); //start slide khách hàng của Reti

$('.khachHangCuaReti-slide').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: ["<i class='fas fa-chevron-left duannoibat-btn-prev fa-2x'></i>", "<i class='fas fa-chevron-right duannoibat-btn-next fa-2x'></i>"],
  responsive: {
    0: {
      items: 1
    },
    480: {
      items: 1
    },
    576: {
      items: 1
    },
    768: {
      items: 1
    },
    992: {
      items: 1
    },
    1000: {
      items: 1
    }
  },
  dots: false
}); //end slide khach hang cua reti

$('#slider-main').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  accessibility: false,
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
});
$('.slide-apartment').owlCarousel({
  loop: true,
  margin: 10,
  responsive: {
    0: {
      items: 1,
      nav: false,
      autoplay: true,
      autoplayTimeout: 6000
    },
    480: {
      items: 1,
      nav: false,
      autoplay: true,
      autoplayTimeout: 6000
    },
    576: {
      items: 1
    },
    768: {
      items: 1
    },
    992: {
      items: 1
    },
    1000: {
      items: 1,
      nav: true,
      navText: [, "<i class='fas fa-chevron-right duannoibat-btn-next fa-2x fw-100'></i>"]
    }
  },
  dots: true
});
$(".js-range-slider").ionRangeSlider();
$(".js-range-slider2").ionRangeSlider({
  from: 250,
  to: 500
});
$('.partner-reti-slider').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  stagePadding: 4,
  autoplay: true,
  autoplayTimeout: 6000,
  items: 4,
  responsive: {
    0: {
      items: 1
    },
    480: {
      items: 1
    },
    576: {
      items: 3
    },
    768: {
      items: 4
    },
    992: {
      items: 4
    },
    1000: {
      items: 4
    }
  },
  dots: false
});
var owl = $('.partner-reti-slider');
owl.owlCarousel(); // Go to the next item

$('.btn-next').click(function () {
  owl.trigger('next.owl.carousel');
}); // Go to the previous item

$('.btn-prev').click(function () {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  owl.trigger('prev.owl.carousel', [300]);
});