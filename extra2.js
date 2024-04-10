// $(".slider-wrapper").owlCarousel({
//         loop:true,
//         animateOut: 'fadeOut',
//         animateIn: 'fadeIn',
//         smartSpeed: 2500,
//         items:1,
// 		autoPlay: true, 
//         nav:true,
//         navText: ["<i class='zmdi zmdi-chevron-left'></i>","<i class='zmdi zmdi-chevron-right'></i>"],
//         dots:true,
//         responsive:{
//             0:{
//                 items:1
//             },
//             600:{
//                 items:1
//             },
//             1000:{
//                 items:1
//             }
//         }
//     });


// /*----------------------------------------
//     11. Slick Carousel
// ------------------------------------------*/
//     $('.room-slider').slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: false,
//         fade: true,
//         asNavFor: '.slider-nav'
//     });
//     $('.slider-nav').slick({
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         asNavFor: '.room-slider',
//         dots: true,
//         centerMode: true,
//         focusOnSelect: true,
//         dots: false,
//         responsive: [{
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1
//             }
//         }]
//     });
    
//     (jQuery); 




document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const prevBtn = document.querySelector(".slider-arrow.prev");
    const nextBtn = document.querySelector(".slider-arrow.next");

    let position = 0;

    function moveSlider() {
        slider.style.transform = `translateX(-${position}px)`;
    }

    nextBtn.addEventListener("click", function() {
        position += 120; // Adjust the value based on image width and margin
        if (position > (slider.children.length - 1) * 120) {
            position = 0;
        }
        moveSlider();
    });

    prevBtn.addEventListener("click", function() {
        position -= 120; // Adjust the value based on image width and margin
        if (position < 0) {
            position = (slider.children.length - 1) * 120;
        }
        moveSlider();
    });
});
