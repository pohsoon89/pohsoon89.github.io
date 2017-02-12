$(document).ready(function() {

  // var data =  $.getJSON('https://us14.api.mailchimp.com/3.0/lists/7a595cd258', {
  //   headers: {'Authorization': 'apikey 29038bc005974c5b9e439ee5023466a0-us14'},
  // });

  // function register($form) {
  //   $.ajax({
  //       type: $form.attr('method'),
  //       url: $form.attr('action'),
  //       data: $form.serialize(),
  //       dataType    : 'json',
  //       contentType: "application/json; charset=utf-8",
  //       error       : function(err) { alert("Could not connect to the registration server. Please try again later."); },
  //       success     : function(data) {
  //           if (data.result != "success") {
  //               // Something went wrong, do something to notify the user. maybe
  //               alert(data.msg);
  //           } else {
  //               // It worked, carry on...
  //               alert("success");
  //           }
  //       }
  //   });
  // }

  // var $form = $('.validate');

  // $('form input[type="submit"]').bind('click', function ( event ) {
  //     if ( event ) event.preventDefault();
  //     register($form);
  // });


  $(".trial-pack-validate .subscribe-button").click(function() {
    $('.trial-pack-validate').submit(function(event) {
      var formData = {
      'mce-NAME' : $('trial-pack-validate #mce-NAME').val(),
      'mce-EMAIL' : $('trial-pack-validate #mce-EMAIL').val(),
      'mce-MMERGE3' : $('trial-pack-validate #mce-MMERGE3').val()
      };

      console.log(formData);

      $.ajax({
        type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
        url         : 'https://github.us14.list-manage.com/subscribe/post?u=3e394ca01b95d97f157c72e12&amp;id=7a595cd258', // the url where we want to POST
        data        : formData, // our data object
        dataType    : 'json', // what type of data do we expect back from the server
        encode          : true,
        error       : function(err) {
          alert("Could not connect to the registration server. Please try again later.");
        },
        success     : function(data) {
            if (data.result != "success") {
                // Something went wrong, do something to notify the user. maybe
                alert(data.msg);
            } else {
                // It worked, carry on...
                alert("success");
            }
        }
      });
      event.preventDefault();
    });
  });

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