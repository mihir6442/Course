document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Highlight active navigation link on scroll
    window.addEventListener("scroll", function() {
        let scrollPosition = window.scrollY;
        document.querySelectorAll("section").forEach(section => {
            if (
                scrollPosition >= section.offsetTop - 100 &&
                scrollPosition < section.offsetTop + section.offsetHeight
            ) {
                document.querySelectorAll("nav ul li a").forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href").substring(1) === section.id) {
                        link.classList.add("active");
                    }
                });
            }
        });
    });

    // Contact form validation
    const contactForm = document.querySelector("#contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const name = document.querySelector("#name").value.trim();
            const email = document.querySelector("#email").value.trim();
            const message = document.querySelector("#message").value.trim();
            
            if (name === "" || email === "" || message === "") {
                alert("Please fill in all fields.");
            } else {
                alert("Thank you for your message! We will get back to you soon.");
                contactForm.reset();
            }
        });
    }
});
