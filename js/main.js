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
    autoplay: false,
    autoplaySpeed: 5000,
    dots: true,
    arrows: true,
    arrowsPlacement: 'beforeSlides',
    prevArrow: '<button type="button" class="custom-prev-button">' + '  <span class="las la-angle-left" aria-hidden="true"></span>' + '  <span class="sr-only">Previous slide</span>' + '</button>',
    nextArrow: '<button type="button" class="custom-next-button">' + '  <span class="las la-angle-right" aria-hidden="true"></span>' + '  <span class="sr-only">Next slide</span>' + '</button>',
    pauseIcon: '<span class="la la-pause" aria-hidden="true"></span>',
    playIcon: '<span class="la la-play" aria-hidden="true"></span>'
  });
});