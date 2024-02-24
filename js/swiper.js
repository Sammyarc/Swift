document.addEventListener("DOMContentLoaded", function () {
    var companyCarousel = document.querySelector('.company-carousel');
    var testimonialCarousel = document.querySelector('.testimonial-carousel');

    initializeCarousel(companyCarousel, {
        loop: true,
        margin: 30,
        autoplay: true,
        responsive: {
            0: {
                items: 2.5
            },
            768: {
                items: 4.5
            },
            1200: {
                items: 4.5
            }
        }
    }, 1000);

    initializeCarousel(testimonialCarousel, {
        loop: true,
        margin: 10,
        autoplay: true,
        responsive: {
            0: {
                items: 1.2
            },
            768: {
                items: 2.5
            },
            1200: {
                items: 3.5
            }
        }
    }, 1000);
} );


// Reusable function to initialize Owl Carousel
function initializeCarousel(element, options, timeout) {
    // Wrap the initialization inside a setTimeout with the specified delay
    setTimeout(function () {
        // Initialize Owl Carousel
        var owl = new OwlCarousel(element, options);
    }, timeout);
}

// OwlCarousel constructor function
function OwlCarousel(element, options) {
    this.element = element;
    this.options = options;

    this.init();
}

OwlCarousel.prototype.init = function () {
    // Initialize the Owl Carousel
    this.owlInstance = $(this.element).owlCarousel(this.options);
};