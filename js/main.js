// source: https://codepen.io/Radiergummi/pen/bjEZMO

// window.addEventListener("load", () => {
 
//     // Retrieve all help sections 
//  const sections = Array.from(document.querySelectorAll("section[id]"));

//  // Once a scrolling event is detected, iterate all elements
//  // whose visibility changed and highlight their navigation entry
//  const scrollHandler = entries =>
//   entries.forEach(entry => {
//    const section = entry.target;
//    const sectionId = section.id;
//    const sectionLink = document.querySelector(`a[href="#${sectionId}"]`);

//    if (entry.intersectionRatio > 0) {
//     section.classList.add("visible");
//     sectionLink.classList.add("visible");
//    } else {
//     section.classList.remove("visible");
//     sectionLink.classList.remove("visible");
//    }
//   });

//  // Creates a new scroll observer
//  const observer = new IntersectionObserver(scrollHandler);

//  //noinspection JSCheckFunctionSignatures
//  sections.forEach(section => observer.observe(section));
// });

// Slick slider initialization
$(document).ready(function() {

    console.log("Initializing slick slider...");

  $('.hero-slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    dots: true,
    fade: true,
    arrows: true,
    arrowsPlacement: 'split',
    prevArrow: '<button type="button" class="custom-prev-button">' + '  <i class="fa-solid fa-angle-left"></i>' + '  <span class="sr-only">Previous slide</span>' + '</button>',
    nextArrow: '<button type="button" class="custom-next-button">' + '  <i class="fa-solid fa-angle-right"></i>' + '  <span class="sr-only">Next slide</span>' + '</button>',
    pauseIcon: '<i class="fa-solid fa-pause"></i>',
    playIcon: '<i class="fa-solid fa-play"></i>'
  });
});

// $('.responsive').slick({
//   dots: true,
//   infinite: false,
//   speed: 300,
//   slidesToShow: 4,
//   slidesToScroll: 4,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ]
// });