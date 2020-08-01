// HTML CSS JSResult
// EDIT ON

// var $hamburger = $('.hamburger');

// TweenLite.set('.line01', {
//     x: 40
// });
// TweenLite.set('.line03', {
//     x: -40
// });
// TweenLite.set('.navigation', {
//     xPercent: -50,
//     yPercent: -50
// })
// TweenLite.set('.navigation li', {
//     x: -110
// });

// var hamburgerMotion = new TimelineMax()
//     .to('.line03', 0.4, {
//         x: '-=40'
//     }, 0)
//     .to('.line01', 0.4, {
//         x: '+=40'
//     }, 0)
//     .to('.menu', 0.4, {
//         autoAlpha: 1
//     }, 0)
//     .staggerTo('.navigation li', 0.4, {
//         x: 0,
//         ease: Sine.easeOut
//     }, 0.2, 0.5)
//     .to('.navigation li', 1, {
//         marginBottom: '40px',
//         ease: Power1.easeOut
//     })
//     .reverse()

// $hamburger.on('click', function (e) {
//     hamburgerMotion.reversed(!hamburgerMotion.reversed());
// });



// Resources1× 0.5× 0.25× Rerun
const hamburger = document.querySelector('.top-bar-left-hamburger');
hamburger.addEventListener('click', () => {
    gsap.to('.top-bar', {
        duration: 1,
        x: '-75%',
        y: 0,
        z: 0
    });
});
// import User, {
//     printName as printUserName,
//     printAge
// } from './ivan.js'

// const user = new User('Bob', 11)
// console.log(user)
// printUserName(user)
// printAge(user)