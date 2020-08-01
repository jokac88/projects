$(document).ready(function () {
    $("#btn-chat").click(function () {
        $("#chat-div, #right-side").toggle();
    });
    $("#btn-chat-2").click(function () {
        $("#chat-div-2, #right-side-2").toggle();
    });
});

$(document).ready(function () {
    $("#close").click(function () {
        $("#chat-div").hide();
    });
    $("#close-2").click(function () {
        $("#chat-div-2").hide();
    });
});

$(document).ready(function () {
    $("#btn-hide").click(function () {
        $("#chat-div").toggle();
    });
    $("#btn-hide-2").click(function () {
        $("#chat-div-2").toggle();
    });
});
