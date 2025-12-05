$(document).ready(function(){

    // Slick slider initialization
    $('.hero-slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        dots: true,
        fade: true,
        arrows: true,
        pauseOnHover:true,
        pauseOnDotsHover:true,
        arrowsPlacement: 'split',
        prevArrow: '<button type="button" class="button button--previous">' + '  <i class="fa-solid fa-angle-left"></i>' + '  <span class="sr-only">Previous slide</span>' + '</button>',
        nextArrow: '<button type="button" class="button button--next">' + '  <i class="fa-solid fa-angle-right"></i>' + '  <span class="sr-only">Next slide</span>' + '</button>',
        pauseIcon: '<i class="fa-solid fa-pause"><span class="sr-only">Pause</span></i>',
        playIcon: '<i class="fa-solid fa-play"><span class="sr-only">Play</span></i>',
        responsive: [
        {
            breakpoint: 1024,
            settings: {
                arrows: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                autoplay: true,
                arrows: true,
            }
        },
        {
            breakpoint: 480,
            settings: {
                autoplay: true,
                arrows: false,
            }
        }
        ]
    });

    // TOC initialization
    window.addEventListener("load", () => {
        // Retrieve all help sections
        const sections = Array.from(document.querySelectorAll("h2[id], h3[id], h4[id]"));

        console.log('sections:', sections);
        // Once a scrolling event is detected, iterate all elements
        // whose visibility changed and highlight their navigation entry
        const scrollHandler = (entries) => {
            entries.forEach(entry => {
                const section = entry.target;
                const sectionId = section.id;
                const sectionLink = document.querySelector(`a[href="#${sectionId}"]`);
                
                console.log('section-link:', sectionLink);

                if (entry.intersectionRatio > 0) {
                    section.classList.add("visible");
                    if (sectionLink) {
                        sectionLink.classList.add("visible");
                    }
                } else {
                    section.classList.remove("visible");
                    if (sectionLink) {
                        sectionLink.classList.remove("visible");
                    }
                }
            });
        };

        // Creates a new scroll observer
        const observer = new IntersectionObserver(scrollHandler);

        //noinspection JSCheckFunctionSignatures
        sections.forEach(section => observer.observe(section));
    });

});
