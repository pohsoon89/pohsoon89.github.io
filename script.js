$(document).ready(function() {

  var data = $.ajax({
         url: "https://us14.api.mailchimp.com/3.0/lists/7a595cd258",
         type: "GET",
         beforeSend: function(xhr){xhr.setRequestHeader('Authorization', 'apikey 29038bc005974c5b9e439ee5023466a0-us14');},
         success: function() { alert('Success!' + authHeader); }
      });

  console.log(data)
  // var data =  $.getJSON('https://us14.api.mailchimp.com/3.0/lists/7a595cd258', {
  //   headers: {'Authorization', 'apikey 29038bc005974c5b9e439ee5023466a0-us14'}
  // });


  // var request = new XMLHttpRequest();
  // request.open('GET', "https://us14.api.mailchimp.com/3.0/lists/7a595cd258", true);
  // request.setRequestHeader("Authorization", "apikey 29038bc005974c5b9e439ee5023466a0-us14");

  // // this function gets called when the request changes

  //   // mistake pops up here !

  //     http.onreadystatechange = function() {
  //     // request was successful
  //     if(http.readyState == 4 && http.status == 200) {
  //         console.log(http.responseText);
  //     }

  // }


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

  $(".macro-btn").click(function() {
    $('html, body').animate({
        scrollTop: ($("#macro").offset().top )- 150
    }, 1000);
  });

  $("#trial-pack").click(function() {
    $('html, body').animate({
        scrollTop: ($(".trial").offset().top ) - 300
    }, 1000);
  });

  $("#standard-pack").click(function() {
    $('html, body').animate({
        scrollTop: ($(".sell_pack").offset().top ) - 300
    }, 1000);
  });

  $("#trial-btn").click(function() {
    // $(".popup-background").css("display", "block");
    $(".trial-popup").show();
  });

  $("#standard-btn").click(function() {
    // $(".popup-background").css("display", "block");
    $(".standard-pack").show();
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