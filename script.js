$(document).ready(function() {

  $(".work-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#work").offset().top - 120
    }, 1000);
  });

  $(".about-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top - 150
    }, 1000);
  });

  $(".ingredient-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#ingredient").offset().top - 150
    }, 1000);
  });

  $(".macro-btn").click(function() {
    $('html, body').animate({
        scrollTop: ($("#macro").offset().top )- 150
    }, 1000);
  });

  $("#trial-btn").click(function() {
    // $(".popup-background").css("display", "block");
    $(".popup-background").show();
  });

  $(".cancel").click(function() {
    $(".popup-background").css("display", "block");
    $(".popup-background").hide();
  });

  $(".subscribe-button").click(function() {
    $('.flipper').css("transform", "rotateY(180deg)");
  });

  $(".close-btn").click(function() {
    $('.flipper').css("transform", "rotateY(0deg)");
    $(".popup-background").css("display", "block");
    $(".popup-background").hide();

  });

  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the
      //nav bar to stick.
      //console.log($(window).scrollTop());
      //console.log($(window).width());
      var windowsize = $(window).width();
      if (windowsize > 658) {
        if ($(window).scrollTop() > 76) {
          $('.desktop-navbar').addClass('navbar-fixed');
          $('.jumbotron').css("margin-top", "70px");

        }


        if ($(window).scrollTop() < 75) {
          $('.desktop-navbar').removeClass('navbar-fixed');
          $('.jumbotron').css("margin-top", "0px");

        }
      }
  });
});