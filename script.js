$(document).ready(function() {

  ajaxMailChimpForm($("#standard-subscribe-form"), $("#thank-you-title"), $(".indicates-required"));
  ajaxMailChimpForm($("#trial-subscribe-form"), $("#thank-you-title"), $(".indicates-required"));

  function isValidEmail($form) {
      // If email is empty, show error message.
      // contains just one @
      var email = $form.find("input[type='email']").val();
      if (!email || !email.length) {
          return false;
      } else if (email.indexOf("@") == -1) {
          return false;
      }

      return true;
  }

  function isValidName($form) {
      // If email is empty, show error message.
      // contains just one @
      var name = $form.find("#name").val();
      console.log(name);
      if (!name || !name.length) {
          return false;
      }

      return true;
  }

  function ajaxMailChimpForm($form, $resultElement, $resultDescription){
      // Hijack the submission. We'll submit the form manually.
      $form.submit(function(e) {
          e.preventDefault();
          $('.flipper').css("transform", "rotateY(180deg)");
          if (!isValidEmail($form)) {
              var error =  "Don't missed out your email";
              var error_text =  "We promise we never spam.";
              $resultElement.html(error);
              $resultDescription.html(error_text);
              $(".return-btn").show();
              $(".close-btn").hide();
          } else if (!isValidName($form)) {
            var error =  "Something's wrong.";
            var error_text =  "Arh..Seem like you forgot to insert your beautiful name.";
              $resultElement.html(error);
              $resultDescription.html(error_text);
              $(".return-btn").show();
              $(".close-btn").hide();
          } else {
              $('.flipper').css("transition", "2s");
              $('.flipper').css("transform", "rotateY(1260deg)");
              $resultElement.html("Subscribing...");
              $resultDescription.html("A little bit of patience, please");
              submitSubscribeForm($form, $resultElement, $resultDescription);
              $(".close-btn").show();
              $(".return-btn").hide();
          }
      });
  }

  function submitSubscribeForm($form, $resultElement, $resultDescription) {
      $.ajax({
          type: "GET",
          url: $form.attr("action"),
          data: $form.serialize(),
          cache: false,
          dataType: "jsonp",
          jsonp: "c",
          contentType: "application/json; charset=utf-8",

          error: function(error){
              // According to jquery docs, this is never called for cross-domain JSONP requests
          },

          success: function(data){
              if (data.result != "success") {
                  var message = data.msg || "Sorry. Unable to subscribe. Please try again later.";

                  if (data.msg && data.msg.indexOf("already subscribed") >= 0) {
                      message = "You already in the list";
                      message_text = "You're subscribed. Thank you."
                  }
                  $resultElement.html(message);
                  $resultDescription.html(message_text);
              } else {
                  $resultElement.html("Yeah. Got it. One more step!");
                  $resultDescription.html("Thank you!<br>You must confirm the subscription in your inbox.");
              }
          }
      });
  }

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
    $("body").css("overflow", "hidden");
    $(".trial-popup").show();
  });

  $("#standard-btn").click(function() {
    // $(".popup-background").css("display", "block");
    $("body").css("overflow", "hidden");
    $(".standard-pack").show();
  });

  $(".cancel").click(function() {
    $(".popup-background").css("display", "block");
    $("body").css("overflow", "scroll");
    $(".popup-background").hide();
  });



  $(".close-btn").click(function() {
    $('.flipper').css("transform", "rotateY(0deg)");
    $(".popup-background").css("display", "block");
    $(".popup-background").hide();
  });

  $(".return-btn").click(function() {
    $('.flipper').css("transform", "rotateY(0deg)");
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