$(document).ready(function() {

  $(".work-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#work").offset().top - 120
    }, 2000);
  });

  $(".about-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top - 150
    }, 2000);
  });

  $(".ingredient-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#ingredient").offset().top - 150
    }, 2000);
  });

  $(".macro-btn").click(function() {
    $('html, body').animate({
        scrollTop: ($("#macro").offset().top )- 150
    }, 2000);
  });

  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the
      //nav bar to stick.
      console.log($(window).scrollTop())

    if ($(window).scrollTop() > 76) {
      $('.desktop-navbar').addClass('navbar-fixed');
    }


    if ($(window).scrollTop() < 75) {
      $('.desktop-navbar').removeClass('navbar-fixed');
    }
  });
});