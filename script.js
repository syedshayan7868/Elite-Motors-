// ================= MOBILE MENU =================

function toggleMenu() {
    document.getElementById("nav").classList.toggle("active");
}


// Close mobile menu after clicking a link

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        document.getElementById("nav").classList.remove("active");

    });

});


// ================= CONTACT FORM =================

document.getElementById("contactForm").addEventListener("submit", function(e) {

    e.preventDefault();

    alert("Thank you! Your message has been submitted.");

    this.reset();

});


// ================= SCROLL ANIMATION =================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.15
});


document.querySelectorAll(
    ".car-card, .service-card, .review-card, .about-content, .about-img"
).forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(50px)";
    element.style.transition = "all .8s ease";

    observer.observe(element);

});


// ================= NAVBAR SCROLL EFFECT =================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(0,0,0,.95)";

    } else {

        navbar.style.background = "rgba(0,0,0,.75)";

    }

});