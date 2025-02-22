// Slideshow Functionality
let slideIndex = 0;
let slides = document.querySelectorAll(".blog-img");

function showSlides() {
    slides.forEach((slide, i) => {
        slide.style.opacity = i === slideIndex ? "1" : "0";
    });
    slideIndex = (slideIndex + 1) % slides.length; // Loop through images
    setTimeout(showSlides, 1500); // Change image every 3 seconds
}

showSlides(); // Start the slideshow

// Lightbox Functionality
function openLightbox(imgSrc) {
    let lightbox = document.getElementById("lightbox");
    let lightboxImg = document.getElementById("lightbox-img");

    if (lightbox && lightboxImg) {
        lightbox.classList.add("show");
        lightboxImg.src = imgSrc; // Set the clicked image source
    }
}

// Attach Click Event to Each Image
slides.forEach(slide => {
    slide.addEventListener("click", function() {
        openLightbox(this.src); // Pass the correct image source
    });
});

// Close Lightbox when clicking outside the image
function closeLightbox() {
    let lightbox = document.getElementById("lightbox");
    if (lightbox) {
        lightbox.classList.remove("show");
    }
}

// Close Lightbox when clicking outside the image
document.addEventListener("click", function(event) {
    let lightbox = document.getElementById("lightbox");
    let lightboxImg = document.getElementById("lightbox-img");

    if (lightbox && lightboxImg && event.target === lightbox) {
        closeLightbox();
    }
});