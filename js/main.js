$(document).ready(function () {

  /*Липкий sticky header*/
  $(window).scroll(function () {
    $('.header').removeClass('top');
    if($(this).scrollTop() > 0) {
      $('.header').addClass('top');
    } else {
      $('.header').removeClass('top');
    }
  })

  /*Якоря ссылки ANCHOR LINKS*/
  $('a[data-target^="anchor"]').on('click', function () {
    $('a[data-target^="anchor"]').removeClass('active');
    $(this).addClass('active');
    setTimeout(function() {
      $('a[data-target^="anchor"]').removeClass('active');
    }, 2000);

    var target = $(this).attr('href');
        heightHeader = $('.header').height() + 28;
        destination = $(target).offset().top - heightHeader;
    $('body, html').animate({ scrollTop: destination }, 1000);
    return false;
  })

  /*навигационное меню mobile*/
  $('.btn-navbar').on('click', function () {
    $('.nav-collapse').toggleClass('open');
  })
  $(window).on('load resize', function () {
    if ($(window).width() <= 767) {
      $('.nav-collapse').appendTo('.test');
    } else {
      $('.nav-collapse').appendTo('.navbar .navbar-inner .container');
    }
  })

  /*top-carousel SLIDER*/
  $('.top-carousel-slider').slick({
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  });

})
