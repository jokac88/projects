new WOW().init();

$(document).ready(function () {
  setTimeout(function () {
    $("#loader").hide();
    $("body").removeClass("active");
  }, 2000);
});

$(function () {
  $("#portfolio").fullpage({
    scrollingSpeed: 1000,
    scrollOverflow: true,
    css3: true,
    navigation: true,
    autoScrolling: true,
    lazyLoading: true,
    slidesNavigation: true,
    scrollBar: true,
    menu: "#nav",
    anchors: [
      "about-me",
      "eder",
      "the-stock-trader",
      "formosa",
      "basket-top",
      "hair-saloon",
      "contact-me",
    ],
    dragAndMove: true,
    // afterRender: function() {
    //     setInterval(function() {
    //         $.fn.fullpage.moveSlideRight();
    //     }, 10000);
    // }
  });
});

$(document).on("click", ".moveUp", function () {
  $.fn.fullpage.moveSectionUp();
});
$(document).on("click", ".moveDown", function () {
  $.fn.fullpage.moveSectionDown();
});

var text = document.getElementById("text");

var typewriter = new Typewriter(text, {
  loop: true,
});

typewriter
  .pauseFor(3500)
  .typeString("hi! i'm ivan")
  .pauseFor(3500)
  .deleteAll()
  .typeString("front-end web developer")
  .pauseFor(3500)
  .start();

$(document).ready(function () {
  $(".hamburger").click(function () {
    if ($(this).hasClass("is-active")) {
      $(this).removeClass("is-active");
      $(".push-app").removeClass("active");
      $("body").removeClass("active");
      $(".top-bar").removeClass("active");
      $("#close-nav").removeClass("active");
      $("#close-nav").addClass("no-active");
      $("#fp-nav").removeClass("active");
    } else {
      $(this).addClass("is-active");
      $(".push-app").addClass("active");
      $("body").addClass("active");
      $(".top-bar").addClass("active");
      $("#close-nav").removeClass("no-active");
      $("#close-nav").addClass("active");
      $("#fp-nav").addClass("active");
    }
  });
  $("#close-nav").click(function () {
    $(this).removeClass("active");
    $(this).addClass("no-active");
    $(".push-app").removeClass("active");
    $("body").removeClass("active");
    $(".top-bar").removeClass("active");
    $(".hamburger").removeClass("is-active");
    $("#fp-nav").removeClass("active");
  });
});

$(document).ready(function () {
  $("#nav li a").on("click", function (e) {
    $("body").removeClass("active");
    $(".push-app").removeClass("active");
    $(".top-bar").removeClass("active");
    $(".hamburger").removeClass("is-active");
    $("#close-nav").removeClass("active");
    $("#close-nav").addClass("no-active");
    $("#fp-nav").removeClass("active");
  });
});
