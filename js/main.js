lightGallery(document.getElementById("lightgallery"));

$(document).ready(function () {
    $(".switch").on("click", function (e) {
        var switcher = $(e.currentTarget);
        if (switcher.attr("aria-expanded") === "false") {
            $(this).attr("title", "Show");
        } else {
            $(this).attr("title", "Hide");
        }
    });
});

$(document).ready(function () {
    if ($("#back-to-top").length) {
        var scrollTrigger = 500, // px
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
                },
                2000
            );
        });
    }
});

$(document).ready(function () {
    setTimeout(function () {
        $("#loader").hide();
        $("body").removeClass("active");
    }, 2000);
});

$(document).ready(function () {
    $(".hamburger").click(function () {
        if ($(this).hasClass("is-active")) {
            $(this).removeClass("is-active");
            $("body").removeClass("active");
            $(".scroll-progress").removeClass("active");
            $("#top-menu").removeClass("active");
            $("#A4").removeClass("active");
            $("#close-nav").addClass("no-active");
            $("#close-nav").removeClass("active");
            $("#back-to-top").removeClass("active");
        } else {
            $(this).addClass("is-active");
            $("body").addClass("active");
            $(".scroll-progress").addClass("active");
            $("#top-menu").addClass("active");
            $("#A4").addClass("active");
            $("#close-nav").addClass("active");
            $("#close-nav").removeClass("no-active");
            $("#back-to-top").addClass("active");
        }
    });
    $("#close-nav").click(function () {
        $(this).removeClass("active");
        $(this).addClass("no-active");
        $("body").removeClass("active");
        $(".scroll-progress").removeClass("active");
        $("#top-menu").removeClass("active");
        $(".hamburger").removeClass("is-active");
        $("#A4").removeClass("active");
        $("#back-to-top").removeClass("active");
    });
    $(".profile").click(function () {
        $("body").removeClass("active");
        $(".scroll-progress").removeClass("active");
        $("#top-menu").removeClass("active");
        $(".hamburger").removeClass("is-active");
        $("#A4").removeClass("active");
        $("#close-nav").addClass("no-active");
        $("#close-nav").removeClass("active");
        $("#back-to-top").removeClass("active");
    });
});

$(document).ready(function () {
    // var topMenu = $("#top-menu");
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        myFunction();
        // var currentScrollPos = window.pageYOffset;
        // if (prevScrollpos > currentScrollPos) {
        // 	topMenu.removeClass("hide");
        // } else {
        // 	topMenu.addClass("hide");
        // }
        // prevScrollpos = currentScrollPos;
    };
});

function myFunction() {
    var winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
    var height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight -
        60;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

$(document).ready(function () {
    $("#side-nav ul li a").on("click", function (e) {
        e.preventDefault();

        var href = $(this).attr("href");
        $("html, body").animate({
                scrollTop: $(href).offset().top - 60
            },
            2000
        );
        $("body").removeClass("active");
        $("#A4").removeClass("active");
        $("#top-menu").removeClass("active");
        $(".scroll-progress").removeClass("active");
        $(".hamburger").removeClass("is-active");
        $("#close-nav").removeClass("active");
        $("#close-nav").addClass("no-active");
        $("#back-to-top").removeClass("active");
    });
});