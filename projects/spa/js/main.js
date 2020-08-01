$(window).on('beforeunload', function () {
	$(window).scrollTop(0);
});

$(document).ready(function () {
	$(".carousel").carousel({
		interval: 5000,
		pause: 'false',
		fade: 'true'
	});
});

$(document).ready(function () {
	$(".carousel-control-prev").click(function () {
		$(".carousel-item.active").addClass("animated fadeIn");
	});
	$(".carousel-control-next").click(function () {
		$(".carousel-item.active").addClass("animated fadeIn");
	});
	$("#carouselExampleIndicators").click(function () {
		$(".carousel-item.active").addClass("animated fadeIn");
	});
});

$("#service-1-scroll").click(function () {
	$('html, body').animate({
		scrollTop: $("#service-1").offset().top
	}, 1000);
});

$("#service-1-scroll-bottom").click(function () {
	$('html, body').animate({
		scrollTop: $("#service-1").offset().top
	}, 1000);
});

$("#service-2-scroll").click(function () {
	$('html, body').animate({
		scrollTop: $("#service-2").offset().top
	}, 1000);
});

$("#service-2-scroll-bottom").click(function () {
	$('html, body').animate({
		scrollTop: $("#service-2").offset().top
	}, 1000);
});


$("#service-3-scroll").click(function () {
	$('html, body').animate({
		scrollTop: $("#service-3").offset().top
	}, 1000);
});

$("#service-3-scroll-bottom").click(function () {
	$('html, body').animate({
		scrollTop: $("#service-3").offset().top
	}, 1000);
});

$(document).ready(function () {
	if ($("#back-to-top").length) {
		var scrollTrigger = 100, // px
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
			}, 1000);
		});
	}
});

$(document).ready(function () {
	$("#first").click(function () {
		$(".page-item.first").addClass("active");
		$(".page-item.second").removeClass("active");
		$(".page-item.third").removeClass("active");
		$("#first-page").css("display", "block");
		$("#second-page").css("display", "none");
		$("#third-page").css("display", "none");
	});
	$("#second").click(function () {
		$(".page-item.second").addClass("active");
		$(".page-item.first").removeClass("active");
		$(".page-item.third").removeClass("active");
		$("#second-page").css("display", "block");
		$("#first-page").css("display", "none");
		$("#third-page").css("display", "none");
	});
	$("#third").click(function () {
		$(".page-item.third").addClass("active");
		$(".page-item.first").removeClass("active");
		$(".page-item.second").removeClass("active");
		$("#third-page").css("display", "block");
		$("#first-page").css("display", "none");
		$("#second-page").css("display", "none");
	});
});


var body = document.getElementsByTagName('body')[0];
var removeLoading = function () {
	setTimeout(function () {
		body.className = body.className.replace(/loading/, '');
	}, 500);
};
removeLoading();

//$(document).ready(function () {
//	var scrollTrigger = 200, // px
//		headerBarBgColor = function () {
//			var scrollTop = $(window).scrollTop();
//			if (scrollTop > scrollTrigger) {
//				$(".navbar").addClass("fixed-top");
//				$(".dropdown-menu").addClass("dropdown-bg");
//			} else {
//				$(".navbar").removeClass("fixed-top");
//				$(".dropdown-menu").removeClass("dropdown-bg");
//			}
//		};
//	headerBarBgColor();
//	$(window).on("scroll", function () {
//		headerBarBgColor();
//	});
//});

$(document).ready(function () {
	var height = $("footer").outerHeight();
	$("#app").css("margin-bottom", "-" + height + "px");
	$(".push-footer").css("height", height + "px");
});