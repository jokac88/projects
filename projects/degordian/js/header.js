const hamburger = document.querySelector('.top-bar-left-hamburger');
hamburger.addEventListener('click', () => {
    gsap.to('.top-bar', {
        duration: 1,
        x: '-75%',
        y: 0,
        z: 0
    });
});