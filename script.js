document.addEventListener("DOMContentLoaded", function () {

    const menuBtn = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuBtn && navMenu) {
        menuBtn.addEventListener("click", function () {
            navMenu.classList.toggle("active");
            menuBtn.classList.toggle("active");
        });
    }

    const serviceBtn = document.querySelector(".service-btn");
    const contactBtn = document.querySelector(".contact-btn");

    if (serviceBtn) {
        serviceBtn.addEventListener("click", function () {
            const services = document.querySelector("#services");
            if (services) {
                services.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    }

    if (contactBtn) {
        contactBtn.addEventListener("click", function () {
            const contact = document.querySelector("#contact");
            if (contact) {
                contact.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    }

});
