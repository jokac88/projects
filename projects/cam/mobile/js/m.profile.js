$(document).ready(function () {
    $("#align-middle1").click(function () {
        $("#collapse1").toggle("slow", function () {
            if ($("#collapse1").is(":visible")) {
                $(".first").addClass("active");
            } else {
                $(".first").removeClass("active");
            }
        });
    });
    $("#align-middle2").click(function () {
        $("#collapse2").toggle("slow", function () {
            if ($("#collapse2").is(":visible")) {
                $(".second").addClass("active");
            } else {
                $(".second").removeClass("active");
            }
        });
    });
    $("#align-middle3").click(function () {
        $("#collapse3").toggle("slow", function () {
            if ($("#collapse3").is(":visible")) {
                $(".third").addClass("active");
            } else {
                $(".third").removeClass("active");
            }
        });
    });
    $("#align-middle4").click(function () {
        $("#collapse4").toggle("slow", function () {
            if ($("#collapse4").is(":visible")) {
                $(".forth").addClass("active");
            } else {
                $(".forth").removeClass("active");
            }
        });
    });
});

$(document).ready(function () {
    $(".carousel").carousel({
        interval: 2000
    });
    $(".control-prev-1").click(function () {
        $("#carouselExampleControls-1").carousel("prev");
    });
    $(".control-next-1").click(function () {
        $("#carouselExampleControls-1").carousel("next");
    });
    $(".control-prev-2").click(function () {
        $("#carouselExampleControls-2").carousel("prev");
    });
    $(".control-next-2").click(function () {
        $("#carouselExampleControls-2").carousel("next");
    });
});

$(document).ready(function () {
    if ($("#back-to-top").length) {
        var scrollTrigger = 300, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $("#back-to-top").addClass("show");
                } else {
                    $("#back-to-top").removeClass("show");
                }
            };
        backToTop();
        $(window).on("scroll", function () {
            backToTop();
        });
        $("#back-to-top").on("click", function (e) {
            e.preventDefault();
            $("html, body").animate({
                scrollTop: 0
            }, 700);
        });
    }
});

$(document).ready(function () {
    $("#side-bar").click(function () {
        $(".collapse").toggle("slow");
    });
});

var height = $("#header-top").outerHeight();
$("#header-bottom").css("padding-top", height);
