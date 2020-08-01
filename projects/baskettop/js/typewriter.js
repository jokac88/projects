var welcome = document.querySelector(".welcome");

var typewriter = new Typewriter(welcome, {
    loop: true
});

setTimeout(function () {
    typewriter
        .typeString("Počni da treniraš")
        .pauseFor(2000)
        .deleteAll()
        .typeString("Pridruži nam se!")
        .pauseFor(2000)
        .deleteAll()
        .typeString('K.K. "Basket top" Kragujevac')
        .pauseFor(2000)
        .start()
}, 4500);