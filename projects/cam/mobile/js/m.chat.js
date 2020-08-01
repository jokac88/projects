$(document).ready(function () {
    $("#side-bar").click(function () {
        $(".collapse").toggle("slow");
    });
    $(".close").click(function () {
        $(".collapse").hide("slow");
    })
});

$(document).ready(function () {
    $("#btn-hide").click(function () {
        $("#right").toggle(250, 'linear');
    });
});

$(document).ready(function () {
    $(".chat-input").focus(function () {
        $("#chat").css("height", "75%");
        $("#btn-hide").css("height", "10%");
        $("#chat-text").css("height", "46%");
        $("#chat-input").css("height", "15%");
    });
    $(".chat-input").blur(function () {
        $("#chat").css("height", "85%");
        $("#btn-hide").css("height", "5%");
        $("#chat-text").css("height", "66%");
        $("#chat-input").css("height", "8%");
    });
});
