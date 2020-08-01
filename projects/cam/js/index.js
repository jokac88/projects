$(document).ready(function () {
    $("#btn-1").click(function () {
        $("#popup-content").css("visibility", "visible");
        $("#popup-content").addClass("animated slideInUp");
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

$(window).scroll(function () {
    $(".slideanim").each(function () {
        var pos = $(this).offset().top;

        var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
            $(this).addClass("slide");
        }
    });
});

function menuBar() {
    document.getElementById("nav").style.backgroundColor = "#ffffff";
}

$(document).ready(function () {
    $("#btn-close").click(function () {
        $("#popup-content").css("visibility", "hidden");
    });
});
