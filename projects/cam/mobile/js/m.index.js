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
    $("#side-bar").click(function () {
        $(".collapse").toggle("slow");
    });
});

var visina = $("#header-top").outerHeight();
$("#header-bottom").css("padding-top", visina);
