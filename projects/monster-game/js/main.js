// 009
// new Vue({
//     el: "#app",
//     data: {
//         title: "Ivan Jovkovic",
//         link: "https://www.facebook.com",
//         finishedLink: '<a href="https://www.facebook.com" target="_blank">Facebook</a>'
//     },
//     methods: {
//         changeTitle: function (event) {
//             this.title = event.target.value;
//         },
//         helloWorld: function () {
//             this.title = "Bye";
//             return this.title;
//         }
//     }
// });
// 010, 011, 012, 013, 014, 015
// new Vue({
//   el: "#app",
//   data: {
//     title: "Hello World!",
//     link: "http://google.com",
//     finishedLink: '<a href="http://google.com">Goggle</a>',
//     ivan: ""
//   },
//   methods: {
//     sayHello: function() {
//       this.title = "Hello!";
//       return this.title;
//     }
//   }
// });
// 016, 017, 018, 19
// var vm = new Vue({
//     el: "#app",
//     data: {
//         counter: 0,
//         x: 0,
//         y: 0
//     },
//     methods: {
//         increase(step, event) {
//             this.counter += step;
//         },
//         updateCoordinates(event) {
//             this.x = event.clientX;
//             this.y = event.clientY;
//         },
//         dummy(event) {
//             event.stopPropagation();
//         },
//         alertMe() {
//             alert("ti si bubica");
//         }
//     }
// });
// new Vue({
//     el: "#app",
//     data: {
//         counter: 0,
//         htmlDiv: '<div class="text">Ivan</div>',
//         link: "http://www.facebook.com",
//         message: "Hellooooo",
//         x: 0,
//         y: 0,
//         alertMessage: ""
//     },
//     methods: {
//         changeText: function (event) {
//             this.message = event.target.value;
//         },
//         increase: function (a, event) {
//             this.counter += a;
//         },
//         updateCoordinates: function (event) {
//             this.x = event.clientX;
//             this.y = event.clientY;
//         },
//         init: function () {
//             this.x = 0;
//             this.y = 0;
//         },
//         dummy: function (event) {
//             event.stopPropagation();
//             this.init();
//         },
//         alert: function (event) {
//             this.alertMessage = event.target.value;
//         },
//         alertMe: function () {
//             alert(this.alertMessage);
//         }
//     }
// });
// new Vue({
//     el: "#app",
//     data: {
//         name: "Ivan",
//         counter: 0,
//         secondCounter: 0
//     },
//     computed: {
//         output: function () {
//             return this.counter > 10 ? 'Greater then 10' : 'Smaller then 10'
//         }
//     },
//     watch: {
//         counter: function (value) {
//             var vm = this;
//             setTimeout(function () {
//                 vm.counter = 0;
//             }, 2000)
//         }
//     },
//     methods: {
//         result: function () {
//             return this.counter > 10 ? 'Greater then 10' : 'Smaller then 10'
//         }
//     }
// });
// new Vue({
//     el: "#app",
//     data: {
//         attachRed: false,
//         attachBlue: false,
//         attachGreen: false,
//         color: 'red',
//         width: 100
//     },
//     computed: {
//         divClasses: function () {
//             return {
//                 red: this.attachRed,
//                 'blue-div': !this.attachRed
//             };
//         },
//         myStyle: function () {
//             return {
//                 backgroundColor: this.color,
//                 width: this.width + 'px'
//             }
//         }
//     }
// });
new Vue({
    el: "#app",
    data: {
        // show: true
        ingredients: ["meat", "fruit", "cookies"],
        persons: [{
                name: "Ivan",
                age: 31,
            },
            {
                name: "Ana",
                age: 24,
            },
        ]
    },
    computed: {
        color: function () {
            return {
                background: '-webkit-linear-gradient(black, yellow)',
                webkitBackgroundClip: 'text',
                webkitTextFillColor: 'transparent'
            }
        }
    }
});