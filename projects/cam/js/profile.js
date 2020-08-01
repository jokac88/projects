$(document).ready(function () {
    $("#btn-chat").hover(function () {
        $("#btn-chat").addClass("animated swing");
    });
});

$(document).ready(function () {
    $("#btn-chat").click(function () {
        $("#btn-chat").hide("slow");
        $("#chat-toggle").show();
    });
});

$(document).ready(function () {
    $("#close").click(function () {
        $("#chat-div").hide("slow");
    });
});

$(document).ready(function () {
    $("#btn-hide").click(function () {
        $("#chat-toggle").hide();
        $("#btn-chat").show("slow");
        $("#btn-chat").hover(function () {
            $("#btn-chat").removeClass("animated swing");
        });
    });
});

function chat() {

    var glavniDiv = document.getElementById("clr").parentNode;
    var clr = document.getElementById("clr");

    var div1 = document.createElement("div");
    div1.setAttribute("id", "chat-div");
    div1.setAttribute("class", "chat-div float-right");
    glavniDiv.insertBefore(div1, clr);

    var header = document.createElement("div");
    header.setAttribute("id", "header");
    header.setAttribute("class", "header");
    div1.appendChild(header);

    var private = document.createElement("a");
    private.setAttribute("href", "#");
    private.setAttribute("id", "private");
    private.setAttribute("class", "private");
    private.setAttribute("aria-hidden", "true");
    private.innerHTML = "Go private";
    header.appendChild(private);

    var div2 = document.createElement("div");
    div2.setAttribute("class", "right-header float-right");
    header.appendChild(div2);

    var btn1 = document.createElement("button");
    btn1.setAttribute("type", "button");
    btn1.setAttribute("id", "three-dot");
    btn1.setAttribute("class", "btn btn-default border-0 rounded-0 p-0");
    btn1.setAttribute("aria-label", "Three dot");
    div2.appendChild(btn1);

    var btnA1 = document.createElement("a");
    btnA1.setAttribute("aria-hidden", "true");
    btnA1.innerHTML = "&hellip;";
    btn1.appendChild(btnA1);

    var btn2 = document.createElement("button");
    btn2.setAttribute("type", "button");
    btn2.setAttribute("id", "close");
    btn2.setAttribute("class", "btn btn-default border-0 rounded-0 p-0 pl-1");
    btn2.setAttribute("aria-label", "Close");
    btn2.setAttribute("title", "Delete conversation");
    div2.appendChild(btn2);

    var btnA2 = document.createElement("a");
    btnA2.setAttribute("aria-hidden", "true");
    btnA2.setAttribute("class", "close");
    btnA2.innerHTML = "&times;";
    btn2.appendChild(btnA2);

    var div3 = document.createElement("div");
    div3.setAttribute("id", "chat-content");
    div3.setAttribute("class", "chat-content");
    div1.appendChild(div3);

    var div4 = document.createElement("div");
    div4.setAttribute("id", "name");
    div4.setAttribute("class", "name");
    div1.appendChild(div4);

    var span = document.createElement("span");
    span.setAttribute("class", "span-name");
    span.innerHTML = "larissaa888";
    div4.appendChild(span);

    var nameImg1 = document.createElement("img");
    nameImg1.setAttribute("src", "img/hover%202.png");
    nameImg1.setAttribute("class", "ml-1");
    nameImg1.setAttribute("title", "online");
    nameImg1.setAttribute("alt", "hover2.png");
    div4.appendChild(nameImg1);

    var nameImg2 = document.createElement("img");
    nameImg2.setAttribute("src", "img/smiley.png");
    nameImg2.setAttribute("title", "smile");
    nameImg2.setAttribute("alt", "smile.png");
    div4.appendChild(nameImg2);
}

$(document).ready(function () {
    $(".carousel").carousel({
        interval: 3000
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
    $(".control-prev-3").click(function () {
        $("#carouselExampleControls-3").carousel("prev");
    });
    $(".control-next-3").click(function () {
        $("#carouselExampleControls-3").carousel("next");
    });
    $(".control-prev-4").click(function () {
        $("#carouselExampleControls-4").carousel("prev");
    });
    $(".control-next-4").click(function () {
        $("#carouselExampleControls-4").carousel("next");
    });
});

$(document).ready(function () {
    $(".d-block.img-fluid.first").click(function () {
        $("#slider").hide();
        $("#slider-2").show();
    });
});

$(document).ready(function () {
    var viewportWidth = $(window).width();
    var containerWidth = $(".container").width();
    var width = (viewportWidth - containerWidth) / 2 + 15;
    $("#chat").css("right", width);
});
